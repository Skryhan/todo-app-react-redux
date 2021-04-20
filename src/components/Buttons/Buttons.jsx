import React from 'react'
import PropTypes from 'prop-types'
import './Buttons.css'

const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Active',
    id: 'active',
  },
  {
    text: 'Completed',
    id: 'completed'
  }
]

const Buttons = ({ activeFilter , changeFilter }) => (
  <div className="footer">
    <div className="btn-group">
      {FILTERS_BTN.map(({ text, id }) => (
        <button onClick={() => {changeFilter(id)}}
          key={id}
          className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
        >{text}</button>
      ))}
    </div>
  </div>
)

Buttons.propTypes = {
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func,
}

Buttons.defaultProps = {
  changeFilter: () => {},
  activeFilter: 'all',
}

export default Buttons