import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.loader.style.display = 'none';

const options = {
  key: '42243795-d3e0b32c8a225c14b798958b0',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  q: '',
};
function formSubmit(e) {
  e.preventDefault();
  refs.loader.style.display = 'block';
  const inputValue = e.target.elements.input.value;
  options.q = inputValue;
  getPhotoByName()
    .then(images => markup(images))
    .catch(error => console.log(error));
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
    refs.gallery.innerHTML = link;
  }
  let lightBox = new SimpleLightbox('.gallery-link');
  lightBox.refresh();
  refs.loader.style.display = 'none';
}
function getPhotoByName() {
  const urlOptions = new URLSearchParams(options);
  return fetch(`https://pixabay.com/api/?${urlOptions}`).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  });
}
refs.form.addEventListener('submit', formSubmit);
