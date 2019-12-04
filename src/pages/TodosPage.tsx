import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

import { ITodo } from '../interfaces'

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      complited: false
    }
    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.complited = !todo.complited
      }
      return todo
    }))
  }

  const deleteHandler = (id: number) => {
    const result = window.confirm("Вы уверенны что хотите удалить элемент")
    if (result) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return <>
    <TodoForm onAdd={addHandler} />
    <TodoList
      todos={todos}
      onToggle={toggleHandler}
      onDelete={deleteHandler}
    />
  </>
}