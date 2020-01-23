import React from 'react'
import "./Form.css"

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            destination: '',
            diet: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        if (type === "checkbox") {
            console.log(checked)
            this.setState((prevState) => {
                let newState = prevState
                if (!checked) {
                    let idx = newState[name].indexOf(value)
                    newState[name].splice(idx, 1)
                } else {
                    newState[name].push(value)
                }
                return { [name] : newState[name].sort() }
            })
        } else {
            this.setState( { [name]: value } )
        }
        console.log(this.state.diet)
    }

    firstCharUpper(str) {
        return str[0].toUpperCase() + str.slice(1)
    }

    render() {

        let dietList = this.state.diet.map((item, idx) => {
            return <p key={idx} >{item}</p>
        })

        return (
            <div id="form" className="">
                
                <form className="column"> 
                    <h1 className="header">Travel Form</h1>
                    <div className="bg">
                    <div className="field column columns is-grouped">
                        <div className="control column">
                            <label className="label">First Name</label>
                            <input className="input" type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
                        </div>
                        <div className="control column">
                            <label className="label">Last Name</label>
                            <input className="input" type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="field column columns is-grouped">
                    <div className="control column">
                        <label className="label">Age</label>
                        <input className="input" type="number" name="age" value={this.state.value} placeholder="Age" onChange={this.handleChange} />
                    </div>
                    <div className="control column gender">
                        <label className="label">Gender</label>
                        <label className="radio">Female 
                            <input type="radio" name="gender" value="female" onChange={this.handleChange} checked={this.state.gender === 'female'} />
                        </label>
                        <label className="radio">Male 
                            <input type="radio" name="gender" value="male" onChange={this.handleChange} checked={this.state.gender === 'male'} />
                        </label>
                        <label className="radio">Other 
                            <input type="radio" name="gender" value="other" onChange={this.handleChange} checked={this.state.gender === 'other'} />
                        </label>
                    </div>
                    <div className="control column">
                        <label className="label">Destination</label>
                        <select className="control select" name="destination" value={this.state.destination} onChange={this.handleChange}>
                            {this.state.destination === '' ? <option>Please select one...</option> : null}
                            <option name="Tokyo" value="Tokyo">Tokyo</option>
                            <option name="Osaka" value="Osaka">Osaka</option>
                            <option name="Yokohama" value="Yokohama">Yokohama</option>
                        </select>
                    </div>
                    </div>
                    
                    <div className="field column">
                        <div className="diet">
                            <label className="label">Dietary Restrictions</label>
                        
                            <label className="checkbox">
                                Dairy
                                <input type="checkbox" name="diet" value="dairy" onChange={this.handleChange} />
                            </label>
                            <label className="checkbox">
                                Lactose
                                <input type="checkbox" name="diet" value="lactose" onChange={this.handleChange} />
                            </label>
                            <label className="checkbox">
                                Milk
                                <input type="checkbox" name="diet" value="milk" onChange={this.handleChange} />
                            </label>
                        </div>
                    </div>
                    </div>
                </form>
                <div>
                    {this.state.firstName || this.state.lastName ? <p>Name: {this.state.firstName} {this.state.lastName}</p> : null} 
                    {this.state.age ? <p>Age: {this.state.age}</p> : null}
                    {this.state.gender ? <p>Gender: {this.firstCharUpper(this.state.gender)}</p> : null}
                    {this.state.destination ? <p>Destination: {this.state.destination}</p> : null}
                    {this.state.diet.length > 0 ? <div>Dietary Restrictions: {dietList}</div> : null}
                </div>
            </div>
        )
    }
}

export default Form
