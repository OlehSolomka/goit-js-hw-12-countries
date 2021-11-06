import debounce from 'lodash.debounce';
import './sass/main.scss';
import fetchCountries from './js-components/createMarkup-service.js';

const refs = {
  wrapper: document.querySelector('.container'),
  container: document.querySelector('.country'),
  input: document.querySelector('.input'),
};

refs.input.addEventListener('input', debounce(fetchCountries, 500));
