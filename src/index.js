
const root = document.querySelector("#root")


API.getAllUsers().then(users => renderUsers(users))


/////////render all users\\\\\\\\\\\\\\\\\\\\
const renderUsers = (users) => { 
  users.forEach(u => renderUser(u));
}

///////////render user attributes \\\\\\\\\\\\
const renderUser = (u) => {
  const div = document.createElement("div")
  div.id = u.id
  const h3 = document.createElement("h3")
  h3.innerText = `Name ${u.id}: ${u.first_name} ${u.last_name}`
  const ul = document.createElement("ul")
  const li = document.createElement("li")
  li.innerText = `Email Address: ${u.email}`
  ul.append(li)  
  div.append(h3,ul)
  root.appendChild(div)
}