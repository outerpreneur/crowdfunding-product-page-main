// variables
const backingBtn = document.querySelector(".backing-btn")
const selectionModal = document.querySelector(".selection-modal")
const closeModal = document.querySelector(".close-modal")

const mobileMenuIcon = document.querySelector(".mobile-menu-icon")
const mobileMenu = document.querySelector(".menu-mobile")
const mobileMenuClose = document.querySelector(".mobile-menu-close")

// functions

function showModal1() {
    selectionModal.showModal()
    console.log("works 2")
}

function closeModal1() {
    selectionModal.close()
}

function showMenu() {
    mobileMenu.showModal()
    mobileMenuIcon.style.display = "none"
    mobileMenuClose.style.display = "block"
}

function closeMenu() {
    mobileMenu.close()
    mobileMenuIcon.style.display = "block"
}

// triggers

backingBtn.addEventListener('click', showModal1 )
closeModal.addEventListener('click', closeModal1)
mobileMenuIcon.addEventListener("click", showMenu)
mobileMenuClose.addEventListener("click", closeMenu)
