const body = document.querySelector('body');
const colores=[ '#fbf8cc', '#fde4cf', '#ffcfd2', '#f1c0e8', '#cfbaf0',
                '#a3c4f3', '#90dbf4', '#8eecf5', '#98f5e1', '#b9fbc0',
                '#ff0000', '#ff8700', '#ffd300', '#deff0a', '#a1ff0a',
                '#0aff99', '#0aefff', '#147df5', '#580aff', '#be0aff']

let index;
for(let i=0; i<10; i++){
    const div = document.createElement('div');
    div.style.height='100px';
    index = Math.floor(Math.random()*colores.length);
    div.style.background = colores[index];
    colores.splice(index, 1);
    body.appendChild(div);
}
