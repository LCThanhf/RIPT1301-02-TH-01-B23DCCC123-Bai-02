window.onload = function() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

document.getElementById("submit").addEventListener("click", function() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        window.location.href = "./quanly.html";
    } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
    }   
});


