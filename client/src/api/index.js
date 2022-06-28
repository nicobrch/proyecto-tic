const axios = require('axios').default

const url = 'http://localhost:5000/'

export const fetchRegistros = () => {
  console.log('Fetching registros...');

  return axios.get(url + 'registro').then(res => res.data);
}

export const fetchLastRegistro = () => {
  console.log('Fetching last registro...');

  return axios.get(url + 'lastregistro');
}
