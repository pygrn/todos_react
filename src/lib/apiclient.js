class ApiClient {
  getTodos() {
    return fetch('https://server3.microdisseny.com/apps/todos/api/v1/todos/').then(response => response.json())
  }
}

const apiclient = new  ApiClient()
export default apiclient