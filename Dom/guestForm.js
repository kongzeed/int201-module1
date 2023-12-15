import { createGuestList } from './data/guestdata.js'
// const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = []

  // 1. register event for searching and adding
  function registerEventHandling() {
    const searchInput = document.getElementById('search-input')
    const addGuestBtn = document.getElementById('add-guest-btn')
    searchInput.addEventListener('keyup', searchGuest)
    addGuestBtn.addEventListener('click', addGuest)
  }

  // 2. Function to display one guest in the display area
  function displayGuest(
    guestItem = {
      firstname,
      lastname
    }
  ) {
    const html = ` <div>
    <span>${guestItem?.firstname} ${guestItem?.lastname}</span>
    <span class="remove-icon" id="${guestItem?.firstname}-${guestItem?.lastname}" style="cursor:pointer;color:red">[X]</span>
  <div>`
    const displayArea = document.getElementById('display-area')
    displayArea.insertAdjacentHTML('beforeend', html)
    setTimeout(() => {
      const removeBtn = document.getElementById`${guestItem.firstname}-${guestItem.firstname}`
      removeBtn.addEventListener('click', removeGuest)
    })

    const removeBtn = document.getElementById(
      `${guestItem.firstname}-${guestItem.lastname}`
    )

    removeBtn.addEventListener('click', removeGuest)
  }

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const displayArea = document.getElementById('display-area')
    displayArea.textContent = ''
    guestResult.forEach((guestItem) => displayGuest(guestItem))
  }

  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const keyword = event.target.value
    const result = guests.searchGuests(keyword)
    displayGuests(result)
  }

  // 5. Function to add a new guest
  function addGuest() {
    let firstname = document.getElementById('firstname-input')
    let lastname = document.getElementById('lastname-input')
    guests.addNewGuest(firstname.value, lastname.value)
    displayGuest({ firstname: firstname.value, lastname: lastname.value })
    firstname.value = ''
    lastname.value = ''
    // const inputFname = document.getElementById('firstname-input')
    // const inputLname = document.getElementById('lastname-input')
    // const Fname = inputFname.value
    // const Lname = inputLname.value
    // guests.addNewGuest(Fname, Lname)
    // const newGuest = { Fname, Lname }
    // displayGuest(newGuest)
    // inputFname.value = ''
    // inputLname.value = ''
    // console.log(inputFname, inputLname)
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    const parentNode = event.target.parentNode
    const [firstname, lastname] = event.target.getAttribute('id').split('-')
    parentNode.remove()
    guests.removeGuest({ firstname, lastname })
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
////test
// module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())


