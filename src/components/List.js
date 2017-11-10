import React from 'react'
import Row from './Row'
import apiclient from '../lib/apiclient'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {todos: [], loading: false}
  }

  componentDidMount() {
    this.updateList()
  }

  updateList = () => {
    this.setState({loading: true})
    apiclient.getTodos().then(todos => {
      if (todos) {
        this.setState({todos: todos, loading: false})
      }
    })
  }

  render () {
    return (
      <div>
        <h1>List</h1>
        <table className="table striped">
          <thead>
            <tr>
              <th>Description</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(todo => <Row todo={todo} key={todo.pk}/>)}
          </tbody>
        </table>
        <br/><button className="btn waves-effect waves-light" onClick={this.updateList} disabled={this.state.loading}>
          {this.state.loading ? 'Loading' : 'Refresh'}
        </button>
      </div>
    )
  }
}

export default List