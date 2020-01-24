import React from 'react';

class Results extends React.Component {
    render() {
        let item = this.props.item
        return (
            <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img src={item.link} alt={item.title} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="is-size-6">
                            {item.title}
                        </p>
                        <p className="subtitle">
                            {item.description}
                        </p>
                    </div>

                    <div className="content">
                        {item.link}
                    </div>
                </div>
            </div>
        )
    }
}

export default Results