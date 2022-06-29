import React from "react";
import PropTypes from 'prop-types';

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alingItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({ todo, index, onChange }) {
  const classes = [];

  if (todo.complited) {
    classes.push('done')
  }

  return <li style={styles.li}>
    <span className={classes.join(' ')}>
      <input type='checkbox' style={styles.input} onChange={() => onChange(todo.id)} checked={todo.complited} />
      <strong>{index + 1}</strong>
      &nbsp;
      {todo.title}
    </span>

    <button className="rm">&times;</button>

  </li>
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem