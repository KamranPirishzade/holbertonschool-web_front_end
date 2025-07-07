function changeMode(size, weight, transform, background, color) {
    return function () {
        document.querySelector("body").setAttribute("style", `color:${color}; background-color:${background}; tranform:${transform};
        font-size:${size}; font-weight:${weight}`);
    }
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white")
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let heading = document.createElement("h1")
    heading.innerText = "Welcome Holberton!";
    document.body.appendChild(heading);

    let button1 = document.createElement("button")
    button1.innerText = "Spooky";
    button1.addEventListener("click",()=>spooky())
    document.body.appendChild(button1);

    let button2 = document.createElement("button")
    button2.innerText = "Dark";
    button2.addEventListener("click",()=>darkMode())
    document.body.appendChild(button2);

    let button3 = document.createElement("button")
    button3.innerText = "Scream";
    button3.addEventListener("click",()=>screamMode())
    document.body.appendChild(button3);
}


main();