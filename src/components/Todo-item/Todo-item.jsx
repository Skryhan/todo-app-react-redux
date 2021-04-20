import React from 'react'
import PropTypes from 'prop-types'
import {FaCheck, FaTimes} from 'react-icons/fa'
import './Todo-item.css'

const ToDoItem = ({ text, isCompleted, removeTask, id, completeTask }) => (
  <div className="task">
    <div className="task__cont"><span className={isCompleted ? 'completed text' : 'text'}>{text}</span></div>
    <div className="task__btns">
    <button onClick={() => completeTask(id)} className={isCompleted ? 'task__btn_check' : 'task__btn'}><FaCheck className="icon"  /></button>
    <button className="task__btn" onClick={() => removeTask(id)}><FaTimes className="icon"/></button>
    </div>
  </div>
)

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  id: PropTypes.number,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  removeTask: () => {},
  id: 0,
}

export default ToDoItem