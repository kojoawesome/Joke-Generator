import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    // 'X-RapidAPI-Key': 'df935fe5f1msh01dd30557eec1bfp1ce381jsn81b0aa3119cc',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

export async function r2() {
  try {
    const response = await axios.request(options);
    const joke = response.data.body[0].setup;
    const hit = response.data.body[0].punchline;
    return { joke, hit };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
