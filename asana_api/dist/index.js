// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"index.js":[function(require,module,exports) {
var deleteTaskFromDOM = function deleteTaskFromDOM(task) {
  return task.remove();
};

var deleteTaskFromAsana = function deleteTaskFromAsana(taskId) {
  var token = getToken();
  var url = "https://app.asana.com/api/1.0/tasks/" + taskId;
  fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token
    }
  }).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    console.log(data.status);
  }).catch(function (error) {
    console.log("error found, fix it and try again");
  });
};

var addDeleteEvent = function addDeleteEvent(delButton) {
  delButton.addEventListener("click", function (event) {
    var taskToDel = event.target.parentNode;
    deleteTaskFromDOM(taskToDel);
    deleteTaskFromAsana(taskToDel.id);
  });
};

var editTaskInApi = function editTaskInApi(taskId, newTaskName) {
  var newObjectTask = { data: { name: newTaskName } };
  var token = getToken();
  var url = "https://app.asana.com/api/1.0/tasks/" + taskId;

  fetch(url, {
    method: "PUT",
    body: JSON.stringify(newObjectTask),
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  }).then(function (res) {
    return res.json();
  }).catch(function (error) {
    console.log("error found, fix it and try again");
  }).then(function (response) {
    return console.log("Success:", response);
  });
};

var editTaskInDOM = function editTaskInDOM(taskId) {
  var taskToEdit = document.getElementById(taskId);

  var inputOfTask = document.createElement("input");

  inputOfTask.setAttribute("placeholder", "new name of task");

  taskToEdit.appendChild(inputOfTask);

  inputOfTask.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      var newTaskName = inputOfTask.value;
      taskToEdit.innerHTML = newTaskName;
      inputOfTask.style.display = "none";
      editTaskInApi(taskId, taskToEdit.innerHTML);
    }
  });
};

var insertTaskToDOM = function insertTaskToDOM(asanaTask, taskId) {
  var ulTasks = document.getElementById("task-asana");

  // Create elements
  var oneLiTask = document.createElement("li");
  var deleteButton = document.createElement("button");

  // Set attributes to elements
  oneLiTask.setAttribute("id", taskId);
  deleteButton.classList.add("delete-task");

  // Appending text to elements
  oneLiTask.appendChild(document.createTextNode(asanaTask));
  deleteButton.appendChild(document.createTextNode("Delete"));

  // Appending elements to parents in the DOM
  ulTasks.appendChild(oneLiTask);
  oneLiTask.appendChild(deleteButton);

  addDeleteEvent(deleteButton);

  oneLiTask.addEventListener("click", function () {
    editTaskInDOM(taskId);
    editTaskInApi(taskId);
  });
};

var parseApiResponse = function parseApiResponse(data) {
  for (var index in data) {
    index = parseInt(index, 10);
    var taskName = data[index].name;
    var taskId = data[index].id;
    // insertToDOM
    insertTaskToDOM(taskName, taskId);
  }
};

var getApiTasks = function getApiTasks() {
  var token = getToken();
  var url = "https://app.asana.com/api/1.0/projects/670284833006984/tasks?opt_fields=name";
  fetch(url, {
    headers: {
      Authorization: "Bearer " + token
    }
  }).then(function (resp) {
    return resp.json();
  }).then(function (data) {
    data.data.length ? parseApiResponse(data.data) : alert("Sorry no tasks");
  }).catch(function (error) {
    console.log("error found, fix it and try again");
  });
};

var sendNewTaskToApi = function sendNewTaskToApi(newTask) {
  var newObjectTask = { data: { name: newTask } };
  // let newObjectTask = { data: { name: 'Hello, world!' } };

  var token = getToken();
  var url = "https://app.asana.com/api/1.0/tasks?projects=670284833006984";

  fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(newObjectTask),
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  }).then(function (res) {
    return res.json();
  }).catch(function (error) {
    console.log("error found, fix it and try again");
  }).then(function (response) {
    return console.log("Success:", response);
  });
};

var getToken = function getToken() {
  return "0/eb7c3fec7263aaad65c6f6553537fa66";
};

var main = function main() {
  var newTaskBtn = document.getElementById("create-new-task");
  var inputNewTask = document.getElementById("input-new-task");
  newTaskBtn.addEventListener("click", function () {
    var inputText = inputNewTask.value;

    if (inputText === " ") {
      alert("enter a valid task please!");
    } else {
      sendNewTaskToApi(inputText);
    }
  });

  var allTaskBtn = document.getElementById("get-all-tasks");
  allTaskBtn.addEventListener("click", getApiTasks);
};

main();
},{}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '53300' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/index.map