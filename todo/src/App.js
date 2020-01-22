import React from 'react'
import Todo from './Todo'
import todoJSON from './todos.json'
import AddTodo from './AddTodo'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoJSON.Todos
        }
        this.clickHandler = this.clickHandler.bind(this)
        this.addTodoClickHandler = this.addTodoClickHandler.bind(this)
    }

    clickHandler = (id) => {
        this.setState((prevState) => {
            let newState = prevState.todos.map((item) => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item
            })
            return { todos: newState }
        })
    }

    addTodoClickHandler = (text) => {
        let newId = this.state.todos.slice().sort((a,b) => { return b.id - a.id})
        let newTodo = {
            id: newId[0].id + 1,
            completed: false,
            task: text
        }

        this.setState((prevState) => {
            let newState = prevState.todos
            newState.push(newTodo)
            return { todos: newState}
        })
    }

    render() {
        let todos = this.state.todos.map(item => {
            return <Todo clickHandler={this.clickHandler} key={item.id} todo={item} />
        })

        return (
            <div>
                <div><AddTodo clickHandler={this.addTodoClickHandler} /></div>
                <div>{todos}</div>
            </div>
        )
    }
}

export default App