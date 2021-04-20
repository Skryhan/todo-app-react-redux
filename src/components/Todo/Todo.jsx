import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTast, removeTask, completeTask, changeFilter } from '../../actions/actionCreator'
import { FaPlus, FaCheck, FaTimes } from 'react-icons/fa'
import ToDoList from '../Todo-list/Todo-list'
import Buttons from '../Buttons/Buttons'
import './Todo.css'

class ToDo extends Component {

  state = {
    taskText: '',
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState({
      taskText: value,
    })
  }

  addTast = (e) => {
    const { taskText } = this.state
    if (taskText.length < 1) {
      const $input = document.querySelector('.input')
      $input.classList.add('error')
    } else {
    const { addTast } = this.props;
    const popap = document.querySelector('.popap')
    popap.classList.remove('show')
    addTast((new Date()).getTime(), taskText, false)
    this.setState({
      taskText: '',
    })
  }
  }

  filterTasks = (tasks, activeFilter) => {
    switch (activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted)
      case 'active':
        return tasks.filter(task => !task.isCompleted)
      default:
        return tasks
    }
  }

  onClickPlus = (e) => {
    const popap = document.querySelector('.popap')
    popap.classList.add('show')
  }

  onClickClose = (e) => {
    const popap = document.querySelector('.popap')
    popap.classList.remove('show')
    const $input = document.querySelector('.input')
    $input.classList.remove('error')
    this.setState({
      taskText: '',
    })
    const inputt = document.querySelector('.inputt')
    inputt.value = ''
  }



  render() {
    const { taskText } = this.state
    const { tasks, removeTask, completeTask, filters, changeFilter } = this.props
    const filteredTasks = this.filterTasks(tasks, filters)

    return (

      <div className="todo-wrapper">
        <Buttons changeFilter={changeFilter} activeFilter={filters} />
        <div className="todo_content">
          <ToDoList completeTask={completeTask} tasksList={filteredTasks} removeTask={removeTask} />
          <div className="popap">
            <div className="modal">
              <div className="modal__main">
                <form className="modal__form">
                  <label>
                    <p>Name<span>*</span></p>
                    <input className="input" type="text" placeholder="Enter task name" onChange={this.handleInputChange} value={taskText} />
                  </label>
                  <label>
                        <p>Description</p>
                        <textarea className="inputt" name="task-description" data-type="taskDescription" placeholder="
                        Enter task description"></textarea>
                    </label>
                </form>
                <div className="modal__btn">
                  <button className="btn ok" onClick={this.addTast}><FaCheck className="btn_icon" /> Ok</button>
                  <button className="btn close" onClick={this.onClickClose}><FaTimes className="btn_icon" /> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="add__task">
          <button className="plus" onClick={this.onClickPlus}><FaPlus /></button>
        </div>
      </div>
    )
  }
}

export default connect(({ tasks, filters }) => ({
  tasks,
  filters,
}), { addTast, removeTask, completeTask, changeFilter })(ToDo)