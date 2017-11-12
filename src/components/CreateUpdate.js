import React from 'react'
import $ from 'jquery'
import apiclient from '../lib/apiclient'

class CreateUpdate extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      description: '',
      dueDate: '',
      dueTime: ''
    }
  }

  componentDidMount() {
    $(this.refs.dueDate).pickadate({
      format: 'yyyy-mm-dd',
      closeOnSelect: true,
      onSet: (context) => {
        this.setState({ dueDate: $(this.refs.dueDate).pickadate('picker').get() })
      }
    })

    // $(this.refs.dueTime).pickatime({
    //   twelvehour: true,
    //   autoclose: true,
    //   format: 'H:i',
    //   onSet: () => {
    //     console.log('ei')
    //   }
    // })
  }

  onSave = (event) => {
    event.preventDefault()
    apiclient.createTodo(this.state).then(() => {
      this.setState({ description: '', dueDate: '', dueTime: '' })
    })
  }

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value })
  }

  onChangeDueTime = (event) => {
    this.setState({ dueTime: event.target.value })
  }

  render () {
    return (
      <div className="card" style={{ marginTop: '2em' }}>
        <form action="" onSubmit={this.onSave}>
          <div className="card-content">
            <span className="card-title">Create</span>
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Description" id="description" type="text" className="validate" maxLength="200"
                    value={this.state.description} onChange={this.onChangeDescription}/>
                  <label htmlFor="description">Description</label>
                </div>
                <div className="input-field col s3">
                  <input id="due_date" type="text" className="validate" ref="dueDate" value={this.state.dueDate}/>
                  <label htmlFor="due_date">Due date</label>
                </div>
                <div className="input-field col s3">
                  <input id="due_time" type="text" className="validate" ref="dueTime" value={this.state.dueTime}
                    onChange={this.onChangeDueTime}/>
                  <label htmlFor="due_time">Due time</label>
                </div>
              </div>
          </div>
          <div className="card-action">
            <button className="btn waves-effect waves-light green">Guardar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateUpdate
