// const axios = require('axios')
// const mapArrToString = require('../mapArrToString/mapArrToString')



// async function getData(url) {
//     const response = await fetch(url);
    
//     return response.json();
// }
// const data = await getData('https://jsonplaceholder.typicode.com/users');
  

  // const getData =  async  () =>{
//     try {
        
//         await fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => {const res =response.json()});
//         // const response = await axios.get('https://jsonplaceholder.typicode.com/users')
//         console.log(res)
//         const arrayUserID = res.data.map(user => user.id)
//         console.log(arrayUserID)

//         return mapArrToString(arrayUserID)
//     } catch (error) {
        
//     }
// }

//module.exports = getData;