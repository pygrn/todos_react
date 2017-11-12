import React from 'react'
import List from './List'
import Header from './Header'
import CreateUpdate from './CreateUpdate'

const Main = () => (
  <div>
    <Header/>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <List/>
          <CreateUpdate/>
        </div>
      </div>
    </div>
  </div>
)
export default Main
