function sendRequest(method, url, body=null){
    const headers = {
        
    }
    if (method === 'GET' || method === 'HEAD') {
        return fetch(url, {
            method: method,
            headers: headers
        }).then(response => response.text());
    } else {
        return fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        }).then(response => response.text());
    }
      
}
module.exports = sendRequest;