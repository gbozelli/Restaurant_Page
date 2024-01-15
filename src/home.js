const home = () => {
  const content = document.querySelector('#content');

  const body = document.createElement('div');
  body.classList.add('body');
  const img = document.createElement('img');
  img.setAttribute('src', 'img.jpg');
  const words = document.createElement('div');
  words.setAttribute('id', 'words');
  words.textContent = 'This restaurant is wonderful, incredible, we have some of the bests foods in the world, we play Daft Punk musics in our restaurants, etc.';
  body.appendChild(img);
  body.appendChild(words);
  
  content.appendChild(body);
}

export { home };