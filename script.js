const myMarksheet = document.getElementById('myMarksheet');
const name = document.getElementById('name');
const  htmlCss = document.getElementById('html-css');
const  js = document.getElementById('js');
const  reactJs = document.getElementById('react-js');
const  node = document.getElementById('node-express');
const  database = document.getElementById('database');

let isDisplay = false;
function handleMyMarksheet() {
    
    if (isDisplay) {
        myMarksheet.classList.add('d-none');
        isDisplay = false;
    } else {
        myMarksheet.classList.remove('d-none');
        isDisplay = true;
    }
}

const nameDisplay = document.getElementById('name-display');
const htmlDisplay = document.getElementById('html-display');
const jsDisplay = document.getElementById('js-display');
const rjsDisplay = document.getElementById('rjs-display');
const nejsDisplay = document.getElementById('nejs-display');
const dbDisplay = document.getElementById('Db-display');
const totalDisplay = document.getElementById('total-display');
const perDisplay = document.getElementById('per-display');

function handleSubmit(){
    nameDisplay.innerText = name.value;
    htmlDisplay.innerText = htmlCss.value;
    jsDisplay.innerText = js.value;
    rjsDisplay.innerText = reactJs.value;
    nejsDisplay.innerText = node.value;
    dbDisplay.innerText = database.value;
    totalDisplay.innerText = Number(htmlDisplay.innerText)
    + Number(jsDisplay.innerText)
    + Number(rjsDisplay.innerText)
    + Number(nejsDisplay.innerText)
    + Number(dbDisplay.innerText);
    perDisplay.innerText = Number(totalDisplay.innerText) / 500 * 100 + "%";

}
