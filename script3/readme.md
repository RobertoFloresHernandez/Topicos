# Script 3

###### This script creates 5 paragraphs between 50 and 100 random words based on an array of words, performs the character count of each paragraph.

### Declaration of a paragraph within the canva
```javascript
const body = document.querySelector('body');
const parrafo = document.createElement('p');
body.appendChild(parrafo);
```
### We declare an array of words
It will be used to create random paragraphs.
```javascript
const palabras= ['Occaecat', 'aliquip', 'veniam', 'reprehenderit', 'sit', 'Cillum',
                 'esse', 'incididunt', 'elit', 'Qui', 'labore', 'fugiat', 'Duis', 'nulla',
                 'irure', 'tempor', 'do', 'ut', 'cupidatat', 'id', 'sint', 'quis', 'sunt',
                 'nisi', 'dolore', 'Et', ' ullamco', 'occaecat', 'laborum', 'aliqua', 
                 'enim', 'deserunt', 'adipisicing', 'qui', 'anim', 'dolor', 'minim', 'officia',
                 'Magna', 'commodo', 'mollit', 'laboris', 'pariatur', 'ea'];
```
### Paragraph size
We declare a variable called `tamañoParrafo` that with the `Math` object we will get a number between 50 and 100 (the size of the paragraph).
```javascript
let tamañoParrafo = Math.floor(Math.random()*50) + 50;
```
### Random paragraph
With a for loop we will be able to create a completely random paragraph by storing in a variable the words obtained from the random array and adding a blank space to separate words.
```javascript
for(;tamañoParrafo>0;tamañoParrafo--)
        parrafos+=palabras[Math.floor(Math.random()*palabras.length)] + ' '
```

### Random paragraph function
With the above we create a function to call it whenever we need.
```javascript
function parrafosAleatorios(){
    let tamañoParrafo = Math.floor(Math.random()*50) + 50;
    for(;tamañoParrafo>0;tamañoParrafo--)
        parrafos+=palabras[Math.floor(Math.random()*palabras.length)] + ' '
}
```
### Function of the program
In a for loop we will create the paragraphs where we will create the paragraphs of the canva, at the beginning of the loop we will declare the variable `parrafos` as an empty string to empty the variable after each iteration, after the function we will append the total number of characters with the `length` property and then we will assign the information of the variable `parrafos` to the `parrafo` that will appear in the canva.
```javascript
for(let i=0; i<5; i++){
    const parrafo = document.createElement('p');
    parrafos = ''
    parrafosAleatorios();
    parrafos+='**El total de caracteres del parrafo es: ' + parrafos.length + '**'
    parrafo.textContent=parrafos;
    body.appendChild(parrafo)
}
```