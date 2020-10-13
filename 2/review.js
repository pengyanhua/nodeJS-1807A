let obj = [{
    name: "张三",
    age: "18"
}, "篮球", {
    like: {
        name: "散散",
        sex: "女"
    }
}];


let [{
    name
}, b, {
    like: {
        sex
    }
}] = obj;

console.log(sex)