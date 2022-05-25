const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

document.getElementById('name').innerText = params.name;

const media = params.media;
let welcomeAudio = document.getElementById('welcomeAudio');
welcomeAudio.value = media;
welcomeAudio.play();
