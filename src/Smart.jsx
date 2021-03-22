import React, {Component} from 'react';

class Smart extends Component{

    render() {
        return (
            <div className='smart'>
                <h2>
                    {this.props.title}
                </h2>
                <div className='points'>
                    {this.props.list.map(function (p) {
                        return <p draggable='true'>{p}</p>;
                    })}
                </div>
            </div>
        );
    }
}

export default Smart;