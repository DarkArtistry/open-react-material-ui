# Open React Material UI Visual Editor

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Objectives

Users will be able to drag and drop material components on the left drawer to the dropzone (middle/user layout), and use the toolbox on the right drawer to edit the CSS of individual components in the dropzone. Finally with a click of the button, the platform will generate react/ react-material-ui code and also have the capability convert the xml structure to a json for various device purposes. Also, possibly becoming a library for people who want to build no code platforms.


### Phase 1
![Phase 1](https://i.imgur.com/BOT2fg6.gif "Phase 1")

Before diving deeper I was circling around to understand if the below implementations are valid or if there are better ways to implement this.
Particularly:
When I handle drag start:
```
ev.dataTransfer.setData("text/plain", ev.target.id);
ev.dataTransfer.effectAllowed = 'copy';
ev.dataTransfer.setData('text/html', ev.currentTarget.innerHTML);
```
and when I handle drop:
```
ev.preventDefault();
ev.stopPropagation();
let html = ev.dataTransfer.getData("text/html");
ev.currentTarget.style.border = "none";
let text = ev.dataTransfer.getData("text/plain");
let element = document.getElementById(text)
let element_prime = element.cloneNode(true)
ev.currentTarget.append(element_prime)
```
The reason why I feel uncomfortable is because I'm actually using the document queries, which is not exactly the "react way" of doing things.
I'm thinking of only using createRef() when selecting a component in the dropzone when working on the CSS in the toolbox area.
I generate the ids of the components with:
```
import { nanoid } from '@reduxjs/toolkit'
```

For now i think this implementation should work.