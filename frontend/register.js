const regBtn = document.getElementById("reg-button")
//console.log(regBtn)
regBtn.addEventListener("click",function(){
    event.preventDefault()
    const name =document.getElementById("name").value
    const email =document.getElementById("email").value
    const password =document.getElementById("password").value
    const rePassword =document.getElementById("re-password").value
    if(name===""|| email===""|| password==="" ||rePassword===""){
        alert("Please fill all feilds")
        return

    }
    if(password!==rePassword){
        alert("Password Mismatch")
        return
    }
    const user={
        name:name,
        email:email,
        password:password
    }
    let users=JSON.parse(localStorage.getItem("users")) || []
    users.push(user)
    console.log(users)
    localStorage.setItem("users",JSON.stringify(users))
    alert("Registration Succesful")
    window.location.href="login.html"



})