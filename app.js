const navLinks = document.querySelector(".nav-links")
const menu = document.querySelector(".hamburger")
const timesIcon = document.querySelector(".times-icon")
menu.addEventListener("click",()=>{

  navLinks.classList.add("dynamic-links")
})
timesIcon.addEventListener("click",()=>{
navLinks.classList.remove("dynamic-links")

})
// to load content 

Html = document.querySelector(".flex-content")
product.forEach(item => {
  Html.innerHTML += `<div>
        <div>
          <img src="${item.img}">
        </div>
          
       </div>
       
       
       `
  
});