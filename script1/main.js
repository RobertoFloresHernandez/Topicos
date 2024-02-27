const body = document.querySelector('body');
const colores=['lime', 'red', 'black', 'white', 'violet', 'coral']
for(let i=0; i<10; i++){
    const div = document.createElement('div');
    div.style.height='100px';
    div.style.background=colores[Math.floor(Math.random()*colores.length)]
    body.appendChild(div)
}