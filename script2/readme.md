# script 2
###### This program creates 10 containers of 100 px high with different colors each (without repeating).
### Declaration of a container within canva
First we declare the *body* inside the script
```javascript
const body = document.querySelector('body');
const div = document.createElement('div');
body.appendChild(div);
```

### Creation of containers
10 containers of a size of 100 px high are generated with a for cycle.

```javascript
for(let i=0; i<10; i++){
    const div = document.createElement('div');
    div.style.height='100px';
    body.appendChild(div)
}
```
### Declare array of colors
We declare the colors that we will use to place them on the containers (20 colors).
```javascript
const colores=[ '#fbf8cc', '#fde4cf', '#ffcfd2', '#f1c0e8', '#cfbaf0',
                '#a3c4f3', '#90dbf4', '#8eecf5', '#98f5e1', '#b9fbc0',
                '#ff0000', '#ff8700', '#ffd300', '#deff0a', '#a1ff0a',
                '#0aff99', '#0aefff', '#147df5', '#580aff', '#be0aff']
```
### Random colors
We use the `Math` object to obtain a random position of the color matrix and assign it to our `index` variable and then assign it to our `background` and then remove it from the array so as not to use it again.
```Javascript
let index = Math.floor(Math.random()*colores.length);
div.style.background = colores[index];
colores.splice(index, 1);
```
Finally, we add the following to the for cycle we had before
```javascript
for(let i=0; i<10; i++){
    const div = document.createElement('div');
    div.style.height='100px';
    index = Math.floor(Math.random()*colores.length);
    div.style.background = colores[index];
    colores.splice(index, 1);
    body.appendChild(div);
}
```
