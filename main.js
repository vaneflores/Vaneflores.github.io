//console.log("Hola mundo! desde la consola");
var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true
});
typewriter.typeString('<h2>Desarrolladora Frontend Jr')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Si lo puedes imaginar, lo puedes crear!')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong> programar!</strong>')
    .pauseFor(2500)
    .start();