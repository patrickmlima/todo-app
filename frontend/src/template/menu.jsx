import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <nav className="navbar navbar-expand navbar-dark bg-dark">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <i className="fa fa-calendar-check-o"></i> ToDoApp
        </a>
      </div>

      <div id="navbar" className="navbar-collapse collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/todos" className="nav-link">Tarefas</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">Sobre</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
