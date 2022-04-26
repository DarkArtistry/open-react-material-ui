# Open React Material UI Visual Editor

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Objectives

Users will be able to drag and drop material components on the left drawer to the dropzone (middle/user layout), and use the toolbox on the right drawer to edit the CSS of individual components in the dropzone. Finally with a click of the button, the platform will generate react/ react-material-ui code and also have the capability convert the xml structure to a json for various device purposes. Also, possibly becoming a library for people who want to build no code platforms.

### Target Milestone
- To achieve visual editing with components: buttons, icon buttons, Material icons, grid container, grid item, Accordion, Divider, Paper, Typography. ImageList components will be an over achievement.


### To see this project grow.

<b>Join us</b> and collaborate on this project
OR
<b>Donate</b> to us at:

|   |Coin|NetWork|Address|
|---|----|-------|-------|
|<img src="https://s2.coinmarketcap.com/static/img/coins/200x200/825.png" width="50" height="50"> |USDT|BSC Network|0x81C2A19Ab37A48EB435CFe75c1ba42E3070517B1|
|<img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Binance-coin-bnb-logo.png" width="50" height="50">|BNB|BSC Network|0x81C2A19Ab37A48EB435CFe75c1ba42E3070517B1|
|<img src="https://d33wubrfki0l68.cloudfront.net/fcd4ecd90386aeb50a235ddc4f0063cfbb8a7b66/4295e/static/bfc04ac72981166c740b189463e1f74c/40129/eth-diamond-black-white.jpg" width="50" height="50">|ETH|ETH Network|0x81C2A19Ab37A48EB435CFe75c1ba42E3070517B1|

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

#### Lessons Learnt from Phase 1

- cloneNode() does not copy the event listeners, which is a good thing! [(see reference)](https://stackoverflow.com/questions/15408394/how-to-copy-a-dom-node-with-event-listeners)
- In order to make a cleaner design we cannot wrap the "components" of the left drawer directly with the React Material-UI Components.
Instead we will need to handle the rendering of the component in a seperate logic. This way it can also be analogous of the front-end framework!
- createDocumentFragment() creates a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.
- createElementNS creates an element with the specified namespace URI and qualified name. (This is not relevant in our approach to use material-ui)
- We should includ Grid container and Grid item components, a widely used layout components.
- We can make use of a hierarchical data tree of components and their IDs in the state to easily target elements w.r.t their IDs. And edit any css on the fly of each action.
- Decided to allow relative and abosulute position strategies, adjustment of display will be secondary as we have Grid strategies, we need to allow float. [(see reference)](https://medium.com/@mautayro/understanding-css-position-display-float-87f9727334b2) 
- Upon cloning the component, and before appending it into the dropzone, we will addEventListener, drag, handleDrag. handleDrag will get the element's rect properties, ev.target.getBoundingClientRect(), and ev.target.parentNode.getBoundingClientRect(). This will allow us to drag the component and reposition itself on the fly.
- Thereafter we can set the left and top properties of the target element with this: const coordinates = [parent.left - rect.left, parent.top - rect.top];
- We MIGHT need to work on some highlighting and additional wrapping divs to "pretend" they are paddings.
- Instead of immediately manupulating the react DOM we have to update the component tree state and render accordingly to the tree. Therefore now it makes sense to completely make use of react-dnd.

### Phase 1.1

- Let's progress with using [react-dnd](https://react-dnd.github.io/react-dnd/about)  AND make use of redux, global store, to store our JSON Tree Data. The JSON Tree Data will be used to render the elements recursively.
- This is the react way of working, it is much cleaner and it easily constructs the tree, saving our hassle to query the DOM document and messing with classes and ids. Now we just have to render recusively. :)

