import React from 'react'

class AddTodo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputVal: ''
        }
        this.addEvent = this.addEvent.bind(this)
        this.updateInputValue = this.updateInputValue.bind(this)
    }

    updateInputValue = (event) => {
        this.setState({
            inputVal: event.target.value
        })
    }
    addEvent = () => {
        this.props.clickHandler(this.state.inputVal)
        this.setState({inputVal:''})
    }

    render() {
        return (
            <div>
                <input value={this.state.inputVal} type='text' onChange={(event) => {this.updateInputValue(event)}} />
                <button onClick={()=>{this.addEvent()}} >Add</button>
            </div>
        )
    }
}

export default AddTodo