// variables
const backingBtn = document.querySelector(".backing-btn")
const selectionModal = document.querySelector(".selection-modal")
const closeModal = document.querySelector(".close-modal")

// functions

function showModal1() {
    selectionModal.showModal()
    console.log('is it working?')
}

function closeModal1() {
    selectionModal.close()
}

backingBtn.addEventListener('click', showModal1 )
closeModal.addEventListener('click', closeModal1)

// backingBtn.addEventListener('click', () => {
//     selectionModal.showModal()
//     console.log('work mothafucka')
// })