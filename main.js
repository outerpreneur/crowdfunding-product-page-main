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

// items

const item1 = document.querySelector("#item-1 .type-selection");
const item2 = document.querySelector("#item-2 .type-selection");
const item3 = document.querySelector("#item-3 .type-selection");
const item4 = document.querySelector("#item-4 .type-selection");


// pledges

const enterPledge1 = document.querySelector("#item-1 .enter-pledge")
const enterPledge2 = document.querySelector("#item-2 .enter-pledge")
const enterPledge3 = document.querySelector("#item-3 .enter-pledge")
const enterPledge4 = document.querySelector("#item-4 .enter-pledge")

// Thank you modal

const thankYouModal = document.querySelector(".success-modal")
const successModalClose = document.querySelector(".success-modal-close")


// counters

const NumberBackers = document.getElementById("pledge-counter")
let NumberOfBackers = 5007
const moneyRaisedCounter = document.getElementById('money-raised-counter')
let TotalMoneyRaised = 89914
let backingBarValue = document.querySelector('.backing-bar')

// pledge input

const pledgeInputAll = document.querySelectorAll(".pledge-input")
const pledgeInput1 = document.querySelector("#item-1 .pledge-input")
const pledgeInput2 = document.querySelector("#item-2 .pledge-input")
const pledgeInput3 = document.querySelector("#item-3 .pledge-input")
const pledgeInput4 = document.querySelector("#item-4 .pledge-input")

// continue Button
const continueBtn1 = document.querySelector("#item-1 .continue-btn")
const continueBtn2 = document.querySelector("#item-2 .continue-btn")
const continueBtn3 = document.querySelector("#item-3 .continue-btn")
const continueBtn4 = document.querySelector("#item-4 .continue-btn")



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

function showPledge2() {
    enterPledge3.classList.add('hidden')
    enterPledge2.classList.remove('hidden')
}

function showPledge3() {
    enterPledge2.classList.add('hidden')
    enterPledge3.classList.remove('hidden')
}

function showThankYou() {
    thankYouModal.showModal()
    addOneBacker()
}

function closeThankYouModal() {
    selectionModal.close()
    thankYouModal.close()
}

function addOneBacker() {
     NumberOfBackers += 1
     NumberBackers.innerText = NumberOfBackers.toLocaleString('en-US')
}

function addValueToRaiseTotal2() {
    event.preventDefault()
    let valueInput = pledgeInput2.value
    let convertToNumber = parseFloat(valueInput)
    TotalMoneyRaised += convertToNumber
    moneyRaisedCounter.innerText = TotalMoneyRaised.toLocaleString('en-US')
    showThankYou()
    updateProgressBar()
}

function addValueToRaiseTotal3() {
    event.preventDefault()
    let valueInput = pledgeInput3.value
    let convertToNumber = parseFloat(valueInput)
    TotalMoneyRaised += convertToNumber
    moneyRaisedCounter.innerText = TotalMoneyRaised.toLocaleString('en-US')
    showThankYou()
    updateProgressBar()
}


function updateProgressBar () {
    backingBarValue.value = TotalMoneyRaised
    const backingBarMaxValue = 100000
    let progressPercentage = (TotalMoneyRaised / backingBarMaxValue) * 100
    backingBarValue.style.background = `linear-gradient( to right, var(--moderate-cyan) 0, var(--moderate-cyan) ${progressPercentage}%, var(--light-gray) 90%, var(--light-gray) 100% )`;
}



// triggers

backingBtn.addEventListener('click', showModal1 )
closeModal.addEventListener('click', closeModal1)
mobileMenuIcon.addEventListener("click", showMenu)
mobileMenuClose.addEventListener("click", closeMenu)
bookmarkGroup.addEventListener("click", BookmarkBookmarked)
item1.addEventListener("click", showThankYou)
item2.addEventListener('change', showPledge2)
item3.addEventListener('change', showPledge3)
successModalClose.addEventListener('click', closeThankYouModal)
continueBtn2.addEventListener('click', addValueToRaiseTotal2 )
continueBtn3.addEventListener('click', addValueToRaiseTotal3 )


// Loops

selectReward.forEach(reward => {
    reward.addEventListener('click', () => {
        selectionModal.showModal()
    })
});
