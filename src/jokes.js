const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'X-RapidAPI-Key': 'dbc7ad0761msh07ab629def75aa5p1f6a27jsn1073da560166',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

export async function r2(){
    try {
        const response = await axios.request(options);
        let joke = response.data.body[0].setup
        let hit = response.data.body[0].punchline
        console.log(joke,hit);
        // console.log(response.data.body[0].setup);
    } catch (error) {
        console.error(error);
    }
}

r2()

