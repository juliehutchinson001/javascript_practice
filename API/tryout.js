const ul = document.getElementById('authors'); 
const url = 'https://randomuser.me/api/?results=10'; 

fetch(url).then(function(data) {
  let myAPIdata = data.json();
    console.log(myAPIdata);
    }).catch(function(error) {
    console.log("error found, fix it and try again");
  });
