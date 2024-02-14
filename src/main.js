import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMore: document.querySelector('.load-btn'),
};

refs.loader.style.display = 'none';
refs.loadMore.style.display = 'none';
let page;
const options = {
  key: '42243795-d3e0b32c8a225c14b798958b0',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 1,
  per_page: 15,
  q: '',
};
async function formSubmit(e) {
  e.preventDefault();
  refs.gallery.innerHTML = '';
  options.page = 1;
  refs.loader.style.display = 'block';
  const inputValue = e.target.elements.input.value;
  options.q = inputValue;
  const images = await getPhotoByName();
  try {
    markup(images);
  } catch (error) {
    iziToast.show({
      message: 'Error ',
      messageColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      position: 'topRight',
      messageSize: '16px',
      messageLineHeight: '24px',
      maxWidth: '432px',
    });
    console.log(error);
  }
  refs.loadMore.style.display = 'block';
  checkBtnLoadMore(images);
  e.target.reset();
}
function markup(images) {
  if (images.hits.length === 0) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      position: 'topRight',
      messageSize: '16px',
      messageLineHeight: '24px',
      maxWidth: '432px',
    });
    refs.gallery.innerHTML = '';
  } else {
    const link = images.hits
      .map(
        image => `<a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image"
        src="${image.webformatURL}"
        alt="${image.tags}"
         </a>
        <div class="img-content">
        <div>
        <h3>Likes</h3>
        <p>${image.likes}</p>
        </div>

        <div>
        <h3>Views</h3>
        <p>${image.views}</p>
        </div>

        <div>
        <h3>Comments</h3>
        <p>${image.comments}</p>
        </div>

        <div>
        <h3>Downloads</h3>
        <p>${image.downloads}</p>
        </div>
        </div>
        `
      )
      .join('');
    refs.gallery.insertAdjacentHTML('beforeend', link);
  }
  let lightBox = new SimpleLightbox('.gallery-link');
  lightBox.refresh();
  refs.loader.style.display = 'none';
}
async function getPhotoByName() {
  const res = await axios.get('https://pixabay.com/api/?', {
    params: options,
  });
  try {
    return res.data;
  } catch (error) {
    iziToast.show({
      message: 'Error ',
      messageColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      position: 'topRight',
      messageSize: '16px',
      messageLineHeight: '24px',
      maxWidth: '432px',
    });
    console.log(error);
  }
}
async function onLoadMoreClick() {
  const el = document.querySelector('.gallery-link');
  const heithEl = el.getBoundingClientRect().height * 3;
  options.page += 1;
  refs.loader.style.display = 'block';
  const images = await getPhotoByName();
  try {
    markup(images);
  } catch (error) {
    iziToast.show({
      message: 'Error ',
      messageColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      position: 'topRight',
      messageSize: '16px',
      messageLineHeight: '24px',
      maxWidth: '432px',
    });
    console.log(error);
  }
  checkBtnLoadMore(images);
  window.scrollBy({
    top: heithEl,
    behavior: 'smooth',
  });
}
function checkBtnLoadMore(images) {
  const maxPage = Math.ceil(images.totalHits / options.per_page);
  if (maxPage === options.page) {
    refs.loadMore.style.display = 'none';
    iziToast.show({
      message: "We're sorry, but you've reached the end of search results.",
      messageColor: '#FFFFFF',
      backgroundColor: '#EF4040',
      position: 'center',
      messageSize: '16px',
      messageLineHeight: '24px',
      maxWidth: '432px',
    });
  }
}
refs.form.addEventListener('submit', formSubmit);
refs.loadMore.addEventListener('click', onLoadMoreClick);
