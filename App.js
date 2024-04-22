const headElement1 = React.createElement("h2", {id:'title1'}, "Welcome To");
const headElement2 = React.createElement("h1", {id:'title2'}, "React World");
const divElement = React.createElement('div',{id:'container'},[headElement1,headElement2])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divElement);
