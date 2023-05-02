// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokesbtn');

const generatejokes= async() =>{
    try{
        const setHeader={
            headers:{
                Accept: "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await res.json();
        jokes.innerHTML =data.joke;
    }
    catch(err){
        console.log(err);
    }
}

jokebtn.addEventListener("click", generatejokes);
generatejokes();


