
const root = document.querySelector("#list")
const originList = {London:{originLat: 51.509865, originLong:-0.118092}, Leeds:{originLat: 51.509865, originLong:-0.118092}}
const form = document.querySelector("#form")
let list = []
let selectedOption = "both"

const clickBtn = () => {
  
  console.log(list)
  list.length = 0
  console.log(list)
  selectedOption = document.getElementById("3-options").value
    if (selectedOption == "both"){
      console.log("both")
      API.getLondonUsers().then(londonUsers => addLondonUsersToList(londonUsers))
      API.getAllUsers().then(users => selectUsers(users))
    } else　if (selectedOption === "within-50"){
      console.log("within-50")
      API.getAllUsers().then(users => selectUsers(users))
    } else {
      console.log("london")
      API.getLondonUsers().then(londonUsers => addLondonUsersToList(londonUsers))
      console.log(list)
      setTimeout("renderUsersInList()", 100) // without setTimeout, renderUserInList is called before the fetch&list creation process has been completed
    }
}  


/////////get from londonusers table\\\\\\\\\\\\\\\\\\
API.getLondonUsers().then(londonUsers => addLondonUsersToList(londonUsers))

/////////push all the users in londonusers table to the list\\\\\\\\\\\\\\\\\\
const addLondonUsersToList = (londonUsers) => {
  londonUsers.forEach(londonUser => {
  list.push(londonUser)
  })
}
/////////get all users from users table\\\\\\\\\\\\\\\\\\
API.getAllUsers().then(users => selectUsers(users))

///////select users whose coordinates are wihtin 50 miles of London and add them to the list\\\\\\\\\\\\
const selectUsers = (users,location = "London") => { 
  users.forEach(user => {
  const {latitude, longitude} = user
  const {originLat, originLong} = originList[location]
  const result = calcDistance(originLat, originLong, latitude, longitude)
  result <= 50 ? list.push(user) : null
  })
    renderUsersInList()
}

/////////render users in London and users within 50 mi of London \\\\\\\\\\\\
const renderUsersInList = () => {
  // debugger
  console.log(list)
  root.innerHTML = ""
  const h2 = document.createElement("h2")
  h2.innerText = `${list.length} People in Total`
  root.appendChild(h2)
    list.forEach(user => {
    const {user_id, first_name, last_name, email, latitude, longitude} = user
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
    })
}

/////////calculate distance\\\\\\\\\\\\
const calcDistance = (originLat, originLong, latitude, longitude) => {
  originLat *= Math.PI/180
  originLong *= Math.PI/180
  latitude *= Math.PI/180
  longitude *= Math.PI/180
  return  (6371*0.62137*Math.acos(Math.cos(originLat)*Math.cos(latitude)*Math.cos(longitude-originLong)+Math.sin(originLat)*Math.sin(latitude)))
}

console.log(list)