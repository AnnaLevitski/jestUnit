const sendRequest = require('./sendRequest');

describe('sendRequest', () =>{
    test('Valid value', async () =>{
        const request = await sendRequest("GET","https://jsonplaceholder.typicode.com/todos/")

        console.log(request)
    })
    
})