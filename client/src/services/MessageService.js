const baseURL = 'http://localhost:3000/api/messages/'

export default {

  getMessage(){
    return fetch(baseURL)
    .then(res => res.json())
  },
  postMessage(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }

}
