// moving boxes section js
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

// checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight * 10 

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

// expanding cards (reviews) js 
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// search page (in header) js
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})

// rotating nav js
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

function popupFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

// selecting color icons js 
const color_icons = document.querySelectorAll('.cicon')

color_icons.forEach(cicon => {
    cicon.addEventListener('click', () => {
        removeActiveClass()
        cicon.classList.add('clicked')
    })
})

function removeActiveClass() {
    color_icons.forEach(cicon => {
        cicon.classList.remove('clicked')
    })
}
