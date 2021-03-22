import React, {Component} from 'react';

class Input extends Component{

    state = {
        str: ''
    }

    handleChange = event => {
        this.setState({str: event.currentTarget.value});
    }

    handleAdd = () => {

        const str = this.state.str;
        this.setState({str: ''});
        return str;
    }

    render() {
        return (
            <div className='input'>
                <input type='text'
                       value={this.state.str}
                       onChange={this.handleChange}
                />
                <button
                    onClick={()=>this.props.onAjouter(this.handleAdd())}
                    type='button'
                >+</button>
            </div>
        );
    }
}

export default Input;