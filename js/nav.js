const menu = document.getElementById('dropdown__menu')
const dropdown = document.getElementById('dropdown')
const menuCart = document.getElementById('dropdown__menuCart')
const dropdown__cart = document.getElementById('dropdown__cart')





window.addEventListener('mouseover', function(event){
    
    if (!event.target.matches("#navi__item-toggle") 
        && event.target.parentNode != dropdown
        && event.target.parentNode != menu 
        && !event.target.matches(".p-o-click"))
    {
        if(menu.classList.contains("dropdown__menu--active")) {
            menu.classList.remove("dropdown__menu--active")
        }
    }
})

document.getElementById('navi__item-toggle').addEventListener('mouseover', NavItem)

function NavItem() {
    // menu.classList.toggle('dropdown__menu--active')
    menu.classList.add("dropdown__menu--active")
}


const navi__cartBorder = document.getElementById('navi__cartBorder')

window.addEventListener('mouseover', function(event){
    // event.preventDefault()
    if (!event.target.matches("#navi__cart-toggle") 
        && event.target.parentNode != dropdown__cart
        && event.target.parentNode != menuCart
        && !event.target.matches(".p-o-click")
    ) 
    {
        if(menuCart.classList.contains("dropdown__menuCart--active")) {
            menuCart.classList.remove("dropdown__menuCart--active")
        }
    }
})

document.getElementById('navi__cart-toggle').addEventListener('mouseover', NavCart)

function NavCart() {
    // menuCart.classList.toggle('dropdown__menuCart--active')
    menuCart.classList.add("dropdown__menuCart--active")

}

document.getElementById('navi-toggle').addEventListener('click', showNav)







function showNav() {
var x = document.getElementsByClassName('navigation__item')

    for (var i=0;i<x.length;i+=1){

        if (x[i].style.display === "flex") {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "flex";
            x[i].style.animation = "0.6s ease 0s 1 normal forwards running show_navItem"
        }
    }
}