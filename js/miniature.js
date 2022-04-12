import {similarDescription} from './data.js';

const userPicture = document.querySelector('.pictures');
const otherUserPicture = document.querySelector('#picture').content.querySelector('picture');

const similarPicture = similarDescription();

const similarPictureFragment = document.createDocumentFragment();

similarPicture.forEach(({url,comment,like}) => {
  const pictureElement = otherUserPicture.cloneNode(true);
  pictureElement.querySelector('img[src=""]').innerHTML = picture.url;
  pictureElement.querySelector('.picture__comments').textContent = picture.comment;
  pictureElement.querySelector('.picture__likes').textContent = picture.like;
  userPicture.appendChild(pictureElement);
});

userPicture.appendChild(similarPictureFragment);
