import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { AxiomUserSearch } from './js/pixabay-api';
import { renderItems } from './js/render-functions';
export const refs = {
  formEl: document.querySelector('.js-form'),
  containerElem: document.querySelector('.js-gallery'),
  loadingElem: document.querySelector('.loader')
};
refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(refs.formEl);
  const inputValue = formData.get('search-text').trim();
  if (inputValue.length < 0) {
    return;
  }
  refs.loadingElem.style.display = 'inline-block'
  AxiomUserSearch(inputValue).then(res => {
    refs.loadingElem.style.display = 'none'
    if (res.data.hits.length !== 0) {
      renderItems(res.data.hits);
    } else {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        maxWidth: 432,
        color: '#EF4040',
        messageColor: '#FAFAFB',
      });
    }
  });
});


