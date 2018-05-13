const url = 'https://randomuser.me/api/'; 
let userName = document.querySelector('h1');
let button = document.querySelector('button');

const changeUser = (data) =>  {
  userName.innerHTML = data.results[0].login.username;
};

const getRandomUser = () => {
  fetch(url).then((resp) => resp.json()).then((data) => {
  
  // userName.innerHTML = data.results[0].login.username;
    changeUser(data);
    
  }).catch(function(error) {
    console.log("error found, fix it and try again");
  });
}


button.addEventListener('click', getRandomUser);


