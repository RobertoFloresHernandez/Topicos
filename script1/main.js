const body = document.querySelector('body');
const colores=['lime', 'red', 'black', 'white', 'violet', 'coral']
for(let i=0; i<10; i++){
    const div = document.createElement('div');
    div.style.height='100px';
    div.style.background=colores[Math.floor(Math.random()*colores.length)]

    // const parrafo = document.createElement('p');
    // parrafo.textContent = i+1;
    // parrafo.style.textAlign='center';
    // parrafo.style.fontSize='20px';
    // div.appendChild(parrafo)
    body.appendChild(div)
}