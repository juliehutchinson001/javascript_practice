import dom from './dom.js';
import api from './api.js';

class Task {
    constructor(name, id, display) {
        this.name = name;
        this.id = id;
        this.display = display;
    }

    hide() {
        dom.hideElement(this.id);
        this.display = false;
    }

    show() {
        dom.showElement(this.id);
        this.display = true;
    }

    update(newName) {
        this.name = newName;
        dom.updateElement(this.name, this.id);
        api.update(this.name, this.id);
    }

}

export default Task;
