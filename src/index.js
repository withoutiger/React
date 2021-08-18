import React from './lib/react.js';
import ReactDom from './lib/react-dom.js';

function clickMe() {
    console.log('click me');
}

let styleObj = {
    color: 'red'
}

let div = (
    <h1 className="hello" id="header" onClick={clickMe} style={styleObj} dataId="hello" >
        <span>hello</span>
        <span>world</span>
    </h1 >
);

console.log(div);

ReactDom.render(div, document.body);