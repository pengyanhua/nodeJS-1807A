axios.create().get("/api/data").then(result => {
    let h1 = document.querySelector("h1");
    h1.innerHTML = `
        姓名：${result.data.name}
        年龄:${result.data.age}
    `
})