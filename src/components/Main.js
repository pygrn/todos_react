import React from 'react'
import List from './List'
import Header from './Header'

const Main = () => (
  <div>
    <Header/>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <List/>
        </div>
      </div>
    </div>
  </div>
)
export default Main
