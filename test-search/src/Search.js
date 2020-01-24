import React from 'react'
import dataJSON from './data.json'
import Results from './Results'

class Search extends React.Component {
    constructor() {
        super()
        this.state ={
            data: dataJSON.data,
            search: '',
            searchResults: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(event) {
        let searchParam = this.state.search.toLowerCase()
        this.setState(() => {
            let newResults = this.state.data.filter((item) => {
                let wordsArr = item.description.toLowerCase().split(' ');
                return wordsArr.indexOf(searchParam) !== -1
            })
            return { searchResults: newResults}
        })

        this.setState( { search: '' } )
        event.preventDefault();
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState( { [name]: value } )
    }

    render() {
        let results = this.state.searchResults.map((item) => {
            return <Results key={item.id} item={item} />
        })

        return (
            <div>
                <div className="column is-full">
                    <div className="field has-addons has-addons-centered">
                        <div className="control">
                            
                            <input className="input" type="text" name="search" placeholder="Search" value={this.state.search} onChange={this.handleChange} />
                        </div>
                        <div className="control" >
                            <a className="button is-primary" name="searchButton" onClick={this.handleClick}>
                                Search
                            </a>
                        </div>
                    </div>
                </div>
                <div className="column is-full">
                    <div className="columns is-multiline">
                        {results}
                    </div>
                </div>   
            </div>
        )
    }
}

export default Search