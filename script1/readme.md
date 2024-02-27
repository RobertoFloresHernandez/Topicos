# Script 1
###### This program creates 10 containers 100 px high with random colors.
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
We declare the colors that we will use to place them on the containers.
```javascript
const colores=['lime', 'red', 'black', 'white', 'violet', 'coral']
```
### Random colors
We use the `Math` object to obtain a random position of the color array and assign it to the `background` of the container.

```Javascript
div.style.background=colores[Math.floor(Math.random()*colores.length)];
```
Finally, we add the following to the for cycle we had before
```javascript
for(let i=0; i<10; i++){
    const div = document.createElement('div');
    div.style.height='100px';
    div.style.background=colores[Math.floor(Math.random()*colores.length)]
    body.appendChild(div);
}
```