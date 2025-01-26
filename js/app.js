const innerImage = document.querySelectorAll(".inner-img")
const image = document.querySelectorAll('#anime-image')
const navbar = document.querySelector('.nav-bar')
const links = document.querySelectorAll('#nav-link')
const header = document.querySelector("header")
const burger = document.querySelector('.burger-menu')
const burgerSpan = document.querySelectorAll('#burger-menu span')
const accors = document.querySelectorAll('#accordion')
const innerAccors = document.querySelectorAll('.panel')
const plusIcon = document.querySelectorAll("span .fa-solid")

AOS.init();

links.forEach(link => {
    link.addEventListener('click', function() {
        navbar.classList.remove('active')
        burger.classList.toggle('active')
    })
})

burger.addEventListener('click', function() {
    
    if(!burger.classList.contains('active')) {
        burger.classList.toggle('active')
        navbar.classList.add('active')
        
    }
    else{
        burger.classList.toggle('active')
        navbar.classList.remove('active')
    }
    
})


burger.addEventListener('mouseenter', function() {
    burgerSpan.forEach(bgs => {
        bgs.style.width = "35px"
        bgs.style.transition = "all 0.3s ease-in-out"
    })
})

burger.addEventListener('mouseleave', function() {
    burgerSpan.forEach(bgs => {
        bgs.style.width = ""
        bgs.style.transition = "all 0.3s ease-in-out"
    })
})

image.forEach(img => {
    img.addEventListener('click', function(e) {
        e.preventDefault()
        for (let index = 0; index < image.length; index++) {
            if(e.target == image[index] && window.matchMedia("(min-width: 768px)").matches === true) {
                innerImage[index].style.visibility= "visible"
                innerImage[index].style.width= "300px"
                
            }
        }
        
        
    })
    
    
    img.addEventListener('mouseleave', function(e) {
        e.preventDefault()
        for (let index = 0; index < image.length; index++) {
            if(e.target == image[index]) {
                innerImage[index].style.visibility= "hidden"
            }
        }
    })
    
})

console.log()

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 && window.matchMedia("(min-width: 768px)").matches === true) {
        header.style.position = "fixed"
        header.style.justifyContent = "space-evenly"
        header.style.backdropFilter = "blur(16px) saturate(180%)"
        header.style.backgroundColor ="background-color: #0f0c24"
        header.style.borderRadius = "5px"
        header.style.border = "1px solid rgba(209, 213, 219, 0.3)"
        header.style.width = "75%"
        header.style.left = "12.5%"
        header.style.transition = "all 0.3s ease-in-out"
        links.forEach(link => {
            link.style.visibility = "visible"
        })
    }
  else {
    header.style.justifyContent = "space-between"
    header.style.backdropFilter = ""
    header.style.backgroundColor =""
    header.style.borderRadius = ""
    header.style.border = ""
    header.style.position = "fixed"
    header.style.transition = "all 0.3s ease-in-out"
    header.style.width = ""
    header.style.left = "0"
    links.forEach(link => {
        link.style.visibility = ""
    })
  }
 

}


accors.forEach(acc => {
    acc.addEventListener('click', function(e) {
        for (let i = 0; i < accors.length; i++) {
            console.log(plusIcon)
            if(e.target == accors[i] && !innerAccors[i].classList.contains('active') && plusIcon[i].classList.contains('fa-plus')){
                innerAccors[i].classList.add('active')
                plusIcon[i].classList.remove('fa-plus')
                plusIcon[i].classList.add('fa-minus')

            }
            else {
                innerAccors[i].classList.remove('active')
                plusIcon[i].classList.remove('fa-minus')
                plusIcon[i].classList.add('fa-plus')
                
            }
            
        }
    })
})
