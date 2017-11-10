import React from 'react'
import PropTypes from 'prop-types'

const Row = ({todo}) => (
  <tr>
    <td>{todo.description}</td>
    <td>{todo.due_date}</td>
  </tr>
)

Row.propTypes = {
  todo: PropTypes.shape({
    pk: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    due_date: PropTypes.string.isRequired
  })
}

export default Row