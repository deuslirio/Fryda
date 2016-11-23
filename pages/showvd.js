var query = location.search.slice(1);
var Args = {};

var chaveValor = query.split('=');
var chave = chaveValor[0];
var valor = chaveValor[1];
Args[chave] = valor;
var videourl = Args["url"];

var scene = document.querySelector('a-scene');
if (scene.hasLoaded) {
    run();
} else {
    scene.addEventListener('loaded', run);
}

function run() {
    var video = scene.querySelector('a-videosphere');
    // video.setAttribute(videourl, 'autoplay', '0 180 0');
    video.setAttribute('src', videourl)
}
