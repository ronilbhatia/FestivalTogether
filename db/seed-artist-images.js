const axios = require('axios');

axios.defaults.headers.common['Ocp-Apim-Subscription-Key'] = 'b0856bf5939d40c49b1c76d183157517';

const url = 'http://localhost:5000' // heroku: 'https://festivaltogether.herokuapp.com

axios
  .get(`${url}/api/festivals`)
  .then(festivals => {
    const coachella = festivals.data.find(festival => (
      festival.name === 'Coachella' && festival.year === 2019
    ));
    const coachellaId = coachella._id;

    coachella.lineup.forEach(set => {
      
    })
  })