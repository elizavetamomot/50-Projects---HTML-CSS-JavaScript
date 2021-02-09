const jokeEL = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);


//USING .then()
// function generateJoke(){
//     const config = {
//         headers: {
//             'Accept': 'application/json'
//         }
//     };

//     fetch('https://icanhazdadjoke.com',config)
//     .then(response => response.json())
//     .then(data => {
//         jokeEL.innerHTML = data.joke
//     })
// }

//USING async/await
async function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    const res = await fetch('https://icanhazdadjoke.com',config);    
    const data = await res.json();

    jokeEL.innerHTML = data.joke;
    
}
