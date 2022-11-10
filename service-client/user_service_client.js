const axios = require('axios').default


async function getUsers() {
    let urlPath = "https://reqres.in/api/users?page=2";
    let response = await axios.get(urlPath)
    return response
    
}

module.exports = {
    getUsers
}