import React from 'react';

class Results extends React.Component {
    render() {
        let item = this.props.item
        return (
            <div>
                <h1>{item.title}</h1>
                <img src={item.link} alt={item.title} />
                <p>{item.description}</p>
            </div>
        )
    }
}

export default Results