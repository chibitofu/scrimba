import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: props.todo.completed
        }
    }

    render() {
        let isChecked = {
            textDecoration: 'line-through',
            color: 'grey',
            textStyle: 'italic'
        }

        let todo = this.props.todo
        return (
            <div>
                <input type='checkbox' checked={todo.completed} onChange={() => {this.props.clickHandler(todo.id)}} />
                <p style={this.state.clicked ? isChecked : null}>{this.props.todo.task}</p>
            </div>
        )
    }
}

export default Todo