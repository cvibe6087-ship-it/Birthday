const gift=document.getElementById("gift");
const message=document.getElementById("message");
const btn=document.getElementById("btn");
const random=document.getElementById("randomMessage");

gift.onclick=()=>{

gift.classList.add("open");

setTimeout(()=>{

gift.style.display="none";

message.classList.remove("hidden");

confetti();

},800);

};

const wishes=[

"❤️ You are amazing!",

"🎂 Have the happiest birthday ever!",

"🌸 Wishing you joy and success!",

"✨ Stay happy forever!",

"💖 May all your dreams come true!",

"🎉 Enjoy your special day!"

];

btn.onclick=()=>{

random.innerHTML=wishes[Math.floor(Math.random()*wishes.length)];

};

const canvas=document.getElementById("confetti");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let pieces=[];

function confetti(){

for(let i=0;i<250;i++){

pieces.push({

x:Math.random()*canvas.width,

y:-20,

size:Math.random()*8+3,

speed:Math.random()*5+2,

color:`hsl(${Math.random()*360},100%,50%)`

});

}

animate();

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>{

ctx.fillStyle=p.color;

ctx.fillRect(p.x,p.y,p.size,p.size);

p.y+=p.speed;

if(p.y>canvas.height){

p.y=-20;

}

});

requestAnimationFrame(animate);

}

window.onresize=()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

};