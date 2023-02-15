import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {

    // const todos = [
    //     {
    //         id: new Date().getTime(),
    //         description: 'Recolectar la piedra del alma',
    //         done: false
    //     },
    // ]

    return (
        <ul className="list-group">
            {
                todos.map(todo => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onDeleteTodo={onDeleteTodo}
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }
        </ul>
    )
}
