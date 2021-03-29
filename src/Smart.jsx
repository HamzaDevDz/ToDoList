import React, {Component} from 'react';

class Smart extends Component{

    render() {
        return (
            <div className='smart'>
                <h2>
                    {this.props.title}
                </h2>
                <div className='points'
                     onDragOver={this.props.dragOver}
                     onDrop={this.props.drop}
                >
                    {this.props.list.map(p => {
                        return <p
                            id={p.id}
                            draggable='true'
                            onDragStart={this.props.drag}
                        >{p.val}</p>;
                    })}
                </div>
            </div>
        );
    }
}

export default Smart;