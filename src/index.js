import './sass/main.scss';
import createCardTmpl from './templates/countryCard-tmpl.hbs';
import createListTmpl from './templates/countlyList-tmpl.hbs';
import createErrorTmpl from './templates/errorMarkup.hbs';
// var debounce = require('lodash.debounce');

const refs = {
    wrapper: document.querySelector('.container'),
  container: document.querySelector('.country'),
  input: document.querySelector('.input'),
};

refs.input.addEventListener('input', () => {
  let target = refs.input.value;
        fetch(`https://restcountries.com/v2/name/${target}`)
        .then(response => response.json())
        .then(data => {
            if (data.length === 1) {
                refs.wrapper.classList.remove('warning');
                const cardMarkup = createCardTmpl(data);
                refs.container.innerHTML = cardMarkup;
            } else if (data.length > 1 && data.length < 10) {
                refs.wrapper.classList.remove('warning');
                const listMarkup = createListTmpl(data)
                refs.container.innerHTML = listMarkup;
            } else if (data.length > 10) {
                refs.wrapper.classList.add('warning')
              const errorMarkup = createErrorTmpl(data);
              refs.container.innerHTML = errorMarkup;
            } else {
                refs.wrapper.classList.remove('warning');
                refs.container.innerHTML = ''
                return
            }
        })
});
