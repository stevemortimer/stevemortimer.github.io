const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const image = 'images/' + params.name + '.png';
const audio = 'media/' + params.name + '.wav';

document.getElementById('personalized-image').src = image;

document.getElementById('audioSource').src = audio;
document.getElementById('audio').load();
document.getElementById('audio').play();
