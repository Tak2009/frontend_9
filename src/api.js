
const LONDON_USERS_URL = "http://localhost:3000/londonusers";
const ALL_USERS_URL = "http://localhost:3000/users"


/////////get user data and return the response body as promise with JSON content\\\\\\\\\\\\\\\\\\
const getAllUsers = () => {
    return fetch(ALL_USERS_URL)
    .then(resp => resp.json())
};

const getLondonUsers = () => {
    return fetch(LONDON_USERS_URL)
    .then(resp => resp.json())
};


API = {getAllUsers, getLondonUsers};

