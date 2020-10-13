"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var div = document.createElement("div");
document.body.appendChild(div);
var flag = true,
    pos = null;

div.onmousedown = function (e) {
  flag = true;
  pos = {
    x: e.offsetX,
    y: e.offsetY
  };
};

div.onmousemove = function (e) {
  if (flag) {
    div.style.left = e.pageX - pos.x + "px";
    div.style.top = e.pageY - pos.y + "px";
  }
};

div.onmouseup = function () {
  flag = false;
};

var Tab = function Tab() {
  _classCallCheck(this, Tab);
};