const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

let image = 'images/' + params.name + '.png';
let audio = 'media/' + params.name + '.wav';

document.getElementById('personalized-image').src = image;

document.getElementById('audioSource').src = audio;
document.getElementById('audio').load();
document.getElementById('audio').play();
