const toggleMenu =()=>{
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const getDate=()=>{
const time = new Date()
const date = time.getFullYear()
let parraf =    document.getElementById("111Date")
parraf.innerHTML += `${date} In maintenance...`;
}
getDate()










