let div = document.createElement("div");
document.body.appendChild(div);

let flag = true,
    pos = null;
div.onmousedown = (e) => {
    flag = true;
    pos = {
        x: e.offsetX,
        y: e.offsetY,
    }
}
div.onmousemove = (e) => {
    if (flag) {
        div.style.left = e.pageX - pos.x + "px";
        div.style.top = e.pageY - pos.y + "px";
    }
}

div.onmouseup = () => {
    flag = false
}


class Tab {
    constructor() {

    }
}