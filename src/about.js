const about = () => {
  const content = document.querySelector('#content');

  const body = document.createElement('div');
  body.classList.add('body');
  const img = document.createElement('img');
  img.setAttribute('src', 'img.jpg');
  const words = document.createElement('div');
  words.setAttribute('id', 'words');
  words.textContent = 'Awesome!!!';
  body.appendChild(img);
  body.appendChild(words);
  
  content.appendChild(body);
}

export { about };