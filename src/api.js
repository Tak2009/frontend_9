
// const LONDON_USERS_URL = "http://localhost:3000/exchanges";
const ALL_USERS_URL = "http://localhost:3000/users"


const getAllUsers = () => {
    return fetch(ALL_USERS_URL)
    .then(resp => resp.json())
};


API = {getAllUsers};

