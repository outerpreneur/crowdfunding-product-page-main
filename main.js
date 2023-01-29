// variables

// back buttons / main modal
const backingBtn = document.querySelector(".backing-btn")
const selectionModal = document.querySelector(".selection-modal")
const closeModal = document.querySelector(".close-modal")


// mobile menu
const mobileMenuIcon = document.querySelector(".mobile-menu-icon")
const mobileMenu = document.querySelector(".menu-mobile")
const mobileMenuClose = document.querySelector(".mobile-menu-close")

// select reward buttons
const selectReward = document.querySelectorAll(".select-reward")
const typeSelection = document.querySelectorAll(".type-selection")
const enterPledge = document.querySelector(".enter-pledge")

// header buttons
const bookmarkGroup = document.querySelector('.bookmark-gp')
const bookmarkBtn = document.querySelector('.bookmark-btn')
const bookmarkImg = document.querySelector('.bookmark-img')


// functions

function showModal1() {
    selectionModal.showModal()
    target.showModal()
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

function BookmarkBookmarked() {
    bookmarkBtn.classList.toggle('bookmarked-button')
    bookmarkImg.classList.toggle('bookmarked')
    
}


// triggers

backingBtn.addEventListener('click', showModal1 )
closeModal.addEventListener('click', closeModal1)
mobileMenuIcon.addEventListener("click", showMenu)
mobileMenuClose.addEventListener("click", closeMenu)
bookmarkGroup.addEventListener("click", BookmarkBookmarked)


// Loops

selectReward.forEach(reward => {
    reward.addEventListener('click', () => {
        selectionModal.showModal()
    })
});

typeSelection.forEach(selection => {
    selection.addEventListener('change', () => {
        console.log("clicked")
        enterPledge.classList.remove('hidden')
    })
})