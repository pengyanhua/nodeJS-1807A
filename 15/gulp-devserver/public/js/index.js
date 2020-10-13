let btn = document.querySelector(".btn"),
    username = document.querySelector(".username"),
    password = document.querySelector(".password");


btn.onclick = function () {
    axios.post("/api/login", {
        username: username.value,
        password: password.value,
    }).then(result => {
        if (result.data) {
            alert("登录成功");
            location.href = "list.html"
        } else {
            alert("登录失败")
        }
    })
}