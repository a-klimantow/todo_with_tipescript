import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onDelete(id: number): void
}


export const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onToggle }) => {
  if (!todos.length) {
    return <p className="center">Пока дел нет!</p>
  }

  const handleDelete = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onDelete(id)
  }

  return (
    <ul>
      {todos.map(todo =>
        <li className={!todo.complited ? 'todo' : 'todo complited'} key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complited}
              onChange={onToggle.bind(null, todo.id)}
            />
            <span>{todo.title}</span>
            <i
              className="material-icons red-text"
              onClick={event => handleDelete(event, todo.id)}
            >delete</i>
          </label>
        </li>
      )}
    </ul>
  )
}