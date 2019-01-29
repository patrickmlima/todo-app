import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import IconButton from '../template/iconButton'

import { changeStatus, remove } from './todoActions'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'marked-as-done' : ''}>{todo.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={todo.done}
            onClick={() => props.changeStatus(todo)}></IconButton>
          <IconButton style='warning' icon='undo' hide={!todo.done}
            onClick={() => props.changeStatus(todo)}></IconButton>
          <IconButton style='danger' icon='trash-o'
            onClick={() => props.remove(todo)}></IconButton>
        </td>
      </tr>
    ))
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='table-actions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({ list: state.todo.list })

const mapDispatchToProps = dispatch => bindActionCreators({ changeStatus, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
