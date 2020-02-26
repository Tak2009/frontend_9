
const root = document.querySelector("#list")
const originList = {London:{originLat: 51.509865, originLong:-0.118092}, Leeds:{originLat: 51.509865, originLong:-0.118092}}
const form = document.querySelector("#form")
let listAll = []
let list50 = []
let listLondon = []
let selectedOption = "london"

const clickBtn = () => {
  // debugger
  selectedOption = document.getElementById("3-options").value
  passRightList(selectedOption)
  // if (selectedOption == "london"){
  //   console.log("london")
  // } else　if (selectedOption === "within-50") {
  //   console.log("within-50")
  // } else {
  //   console.log("all")
  // }
}  


/////////get from londonusers table\\\\\\\\\\\\\\\\\\
API.getLondonUsers().then(londonUsers => addLondonUsersToList(londonUsers))
console.log("check1")

/////////push all the users in londonusers table to the list\\\\\\\\\\\\\\\\\\
const addLondonUsersToList = (londonUsers) => {
  londonUsers.forEach(londonUser => {
  listAll.push(londonUser)
  listLondon.push(londonUser)
  })
}

/////////get all users from users table\\\\\\\\\\\\\\\\\\
API.getAllUsers().then(users => selectUsers(users))
console.log("check2")

///////select users whose coordinates are wihtin 50 miles of London and add them to the list\\\\\\\\\\\\
const selectUsers = (users,location = "London") => { 
  users.forEach(user => {
  const {latitude, longitude} = user
  const {originLat, originLong} = originList[location]
  const result = calcDistance(originLat, originLong, latitude, longitude)
    if (result <= 50) {
      listAll.push(user)
      list50.push(user)
    } else {
      null
    }
  })
  // renderUsersInList(selectedOption)
  passRightList(selectedOption)
}

const passRightList = (selectedOption) => {
  if (selectedOption == "london"){
    console.log("london")
    listLondon.forEach(user => renderUser(user))
  } else　if (selectedOption === "within-50") {
    console.log("within-50")
    list50.forEach(user => renderUser(user))
  } else {
    console.log("all")
    listAll.forEach(user => renderUser(user))
  }
}


const renderUser = (user) => {
    root.innerHTML = ""
    const {user_id, first_name, last_name, email, latitude, longitude} = selectedU
    const div = document.createElement("div")
    div.id = user_id
    const h3 = document.createElement("h3")
    h3.innerText = `Name: ${first_name} ${last_name}`
    const ul = document.createElement("ul")
    const li = document.createElement("li")
    li.innerText = `Email Address: ${email}`
    const li2 = document.createElement("li")
    li2.innerText = `Lat:${latitude}, Long:${longitude}`
    ul.append(li,li2)  
    div.append(h3,ul)
    root.appendChild(div)
  }

/////////render users in London and users within 50 mi of London \\\\\\\\\\\\
// const renderUsersInList = (selectedOption) => {
//   root.innerHTML = ""
//   listAll.forEach(selectedU => {
//   const {user_id, first_name, last_name, email, latitude, longitude} = selectedU
//   const div = document.createElement("div")
//   div.id = user_id
//   const h3 = document.createElement("h3")
//   h3.innerText = `Name: ${first_name} ${last_name}`
//   const ul = document.createElement("ul")
//   const li = document.createElement("li")
//   li.innerText = `Email Address: ${email}`
//   const li2 = document.createElement("li")
//   li2.innerText = `Lat:${latitude}, Long:${longitude}`
//   ul.append(li,li2)  
//   div.append(h3,ul)
//   root.appendChild(div)
//   })
// }

/////////calculate distance\\\\\\\\\\\\
const calcDistance = (originLat, originLong, latitude, longitude) => {
  originLat *= Math.PI/180
  originLong *= Math.PI/180
  latitude *= Math.PI/180
  longitude *= Math.PI/180
  return  (6371*0.62137*Math.acos(Math.cos(originLat)*Math.cos(latitude)*Math.cos(longitude-originLong)+Math.sin(originLat)*Math.sin(latitude)))
}
