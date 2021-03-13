import axios from 'axios';


// criar conta no HG BRASIL E GERAR UMA CHAVE E COLOCAR NA CONSTANTE KEY
export const key = '';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com/'
})

export default api;