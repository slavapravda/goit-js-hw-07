// 1 Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// 2 Реализация делегирования на div.gallery и получение url большого изображения.
// 3 Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// 4 Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// 5 Замена значения атрибута src элемента <img> в модальном окне перед открытием.
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description }) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
};

const galleryArray = galleryItems.map((el) => {
  return makeGalleryCard(el);
});

galleryEl.insertAdjacentHTML("afterbegin", galleryArray.join(""));

const onGalleryClick = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const sourseOfImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${sourseOfImg}" width="800" height="600">
    `);

  instance.show();
};

galleryEl.addEventListener("click", onGalleryClick);
