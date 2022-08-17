console.log("Hello 🌎");

const FakeReact = {
render: function (id, RootComponent) {
const element = document.getElementById(id);
if(!element) {
throw Error("element for id not found");
}
element.innerHTML = RootComponent();
},
useState: function (defaultValue){
let value = defaultValue;
function setValue(newValue) {
value = newValue;
App();
}
return [value, setValue];
}
}

const { useState, render } = FakeReact;

function App() {
const [value, setValue] = useState(0);

const addOneToValue = () => {
setValue(value + 1);
}

const substractOneFromValue = () => {
setValue(value - 1);
}

return `
<nav>
    <ul>
        <li><a href="/home.html">Home</a></li>
        <li><a href="/about.html">About</a></li>
        <li><a href="/resume.html">Resume</a></li>
    </ul>
</nav>
<h1 class="heading-one">Home</h1>
${Button({
value: `Add ${value}`,
isPrimary: true,
classes: "margin-right",
onClick: addOneToValue
})}
${Button({
value: `Substract ${value}`,
onClick: substractOneFromValue
})}
`;
}

function Button({ onClick, value, isPrimary = false, classes = "" }) {
return `
<button onClick="onClick()" class="button ${isPrimary ? " button-primary" : '' } ${classes}">
    ${value}
</button>`
}

render('app', App)