function sendRequest(method, url, body=null){
    const headers = {
        
    }
    return fetch(url,{
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => response.text())
      
}
module.exports = sendRequest;