const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const collcanvas = document.getElementById('collcanvas');
const collcontext = collcanvas.getContext('2d');
collcanvas.width = window.innerWidth;
collcanvas.height = window.innerHeight;




const bird = new Bird();
let lasttime = 0;
let timetonextbird = 0;
let birdgap = 1500;
let birds = [];
let bombs = [];
let briddrop = [];
let score =0;
let gameend = false;
context.font='20px Impact'; 

function animate(timestamp) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    let timediference = timestamp - lasttime;
    lasttime = timestamp;
    timetonextbird += timediference;
    if (timetonextbird > birdgap) {
        birds.push(new Bird());
        timetonextbird = 4;
    }
    [...birds,...bombs,...briddrop].forEach(Object => Object.update(timediference));
    [...birds,...bombs,...briddrop].forEach(Object => Object.draw());
    birds=birds.filter(object => !object.deleteentity);
    bombs=bombs.filter(object => !object.deleteentity);
    briddrop=briddrop.filter(object => !object.deleteentity);   
    if(!gameend) requestAnimationFrame(animate);
    else drawgameend();


}
animate(0);

window.addEventListener('click', function (e) { 
    const detectpixelcolor = context.getImageData(e.x,e.y, 1,1);
    console.log(detectpixelcolor)
})

window.addEventListener('click', function (e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Itera sobre los pájaros para verificar si el clic está dentro de alguno
    for (let i = 0; i < birds.length; i++) {
        const bird = birds[i];
        if (
            mouseX >= bird.x &&
            mouseX <= bird.x + bird.width &&
            mouseY >= bird.y &&
            mouseY <= bird.y + bird.height
        ) {
        
           score++;
           scorecount.innerHTML=score;

           bird.deleteentity = true;
           bombs.push(new Bomb(object.x,object.y,object.width))
           briddrop.push(new Briddrop(object.x,object.y,object.width))
   
        }
    }
});
function drawgameend() { 
    context.textAling = 'center';
    context.fillStyle = 'black'; 
    context.fillText('Game Over : tu puntaje final es  ' + score,canvas.width/2, 100);
 } 