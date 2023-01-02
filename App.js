import React from 'react';
import ReactDOM from 'react-dom'

const heading = React.createElement("h1", {}, "Prince");
const heading2 = React.createElement("h2", {}, "Parvat");
const container = React.createElement("div", {}, [heading, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
