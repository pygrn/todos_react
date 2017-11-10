class ApiClient {
  getTodos() {
    return new Promise((resolve, reject) => {
      resolve([{
        pk: 1,
        description: 'Todo 1',
        due_date: '2017-11-08T21:01:35Z'
      }, {
        pk: 2,
        description: 'Todo 2',
        due_date: '2017-11-08T21:01:35Z'
      }])
    })
  }
}

const apiclient = new  ApiClient()
export default apiclient