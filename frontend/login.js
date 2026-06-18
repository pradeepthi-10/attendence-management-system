const lgnBtn = document.getElementById("lgn-btn")
lgnBtn.addEventListener("click", function () {
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    if (email === "" || password === ""){
        alert("please fill all feilds")
        return

    }
    const users=JSON.parse(localStorage.getItem("users"))
    users.find(function (user){
       return  user.email===email && user.password===password
    })
    if(matchedUser){
        alert("Login Succesful")
        window.location.href="index.html"

    }
    else{
        alert("username or password mismatch")
    }

})