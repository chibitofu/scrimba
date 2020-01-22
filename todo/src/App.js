import React from 'react'
import Todo from './Todo'
import todoJSON from './todos.json'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todoJSON.Todos
        }
        this.clickHandler = this.clickHandler.bind(this)
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

    render() {
        let todos = this.state.todos.map(item => {
            return <Todo clickHandler={this.clickHandler} key={item.id} todo={item} />
        })

        return (
            <div>
                {todos}
            </div>
        )
    }
}

export default App