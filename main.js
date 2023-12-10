const modalOverlay = document.querySelector(".modal-overlay")
const modalBox = document.querySelector(".modal-box")
const close = document.querySelector(".close")
const submitButton = document.querySelector(".submit-button")
const usernameError = document.querySelector("#username-error")
const passwordError = document.querySelector("#password-error")
const charError = document.querySelector(".error-img")
const charDefault = document.querySelector(".default-img")
const loginButton = document.querySelector(".login")
const loginModal  = document.querySelector(".login-overlay")
const closeLogin = document.querySelector(".close-login")

let UsernameInput = document.querySelector(".username-input")
let passwordInput = document.querySelector(".password-input")

window.onload = () => {
    let tl = gsap.timeline({
        duration: 0.5,
        ease: "power4.out"
    })

    tl.from(modalOverlay, {
        opacity: 0
    })

    tl.from(modalBox, {
        opacity: 0,
        yPercent: 60
    }, 0.2)

    close.onclick = () => {
        tl.reverse()
        setTimeout(()=>{
            modalOverlay.style.display = "none";
        },1000)
    }

    let e = gsap.timeline();

    e.to(loginModal, {
        display:"flex"
    })

    e.from(loginModal,{
        duration: 0.5,
        backgroundColor: "rgba(0,0,0,0)",
        ease: "expo.out"
    })

    e.from(".login-outer-box",{
        duration: 0.5,
        scaleY: 0,
        ease: "expo.out"
    })

    e.from(".fade-animate",{
        duration: 0.5,
        opacity: 0,
        ease: "power4.out"
    })

    e.from(".chibi-container", {
        duration: 1,
        yPercent: 100,
        ease: "power4.out"
    },1.3)


    e.reverse()

    loginButton.onclick = () => {
        e.restart();

        closeLogin.onclick = () =>{
            e.reverse()
        }
    }

    function updateSubmit(){
        if(UsernameInput.value.length > 0 && passwordInput.value.length > 0){
            submitButton.classList.add("active")
        } else{
            submitButton.classList.remove("active")
        }
    }

    UsernameInput.onblur = () =>{
        if(UsernameInput.value.length > 0){
            usernameError.innerText = "";
            charError.classList.remove("active");
            charDefault.classList.add("active");
        }else {
            usernameError.innerText = "*Username can not be empty*";
            submitButton.disabled = true;
            charError.classList.add("active");
            charDefault.classList.remove("active");
        }
        updateSubmit();
    }

    passwordInput.onblur = () =>{
        if(passwordInput.value.length > 0){
            passwordError.innerText = "";
            charError.classList.remove("active");
            charDefault.classList.add("active");
        }else {
            passwordError.innerText = "*Password can not be empty*";
            submitButton.disabled = true;
            charError.classList.add("active");
            charDefault.classList.remove("active");
        }
        updateSubmit();
    }
 
    }


