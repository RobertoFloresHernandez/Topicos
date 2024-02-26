function parrafosAleatorios(){
    let tamañoParrafo = Math.floor(Math.random()*50) + 50;
    for(;tamañoParrafo>0;tamañoParrafo--)
        parrafos+=palabras[Math.floor(Math.random()*palabras.length)] + ' '
    

}
const body = document.querySelector('body');
const palabras= ['Occaecat', 'aliquip', 'veniam', 'reprehenderit', 'sit', 'Cillum',
                 'esse', 'incididunt', 'elit', 'Qui', 'labore', 'fugiat', 'Duis', 'nulla',
                 'irure', 'tempor', 'do', 'ut', 'cupidatat', 'id', 'sint', 'quis', 'sunt',
                 'nisi', 'dolore', 'Et', ' ullamco', 'occaecat', 'laborum', 'aliqua', 
                 'enim', 'deserunt', 'adipisicing', 'qui', 'anim', 'dolor', 'minim', 'officia',
                 'Magna', 'commodo', 'mollit', 'laboris', 'pariatur', 'ea'];
let parrafos= '';
for(let i=0; i<5; i++){
    const parrafo = document.createElement('p');
    parrafos = ''
    parrafosAleatorios();
    parrafos+='**El total de caracteres del parrafo es: ' + parrafos.length + '**'
    parrafo.textContent=parrafos;
    body.appendChild(parrafo)
}



