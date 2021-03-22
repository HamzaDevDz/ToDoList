import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Background from "./Background";
import Smart from "./Smart";
import Input from "./Input";

class ToDoList extends React.Component {
    state = {
        title: 'To Do List',
        list_toStart : ['bb', '45'],
        list_inProgress : [1,2],
        list_Done : []
    }

    handleAdd = str => {
        const zebzoub = Array.from(this.state.list_toStart);
        zebzoub.push(str);
        this.setState({list_toStart: zebzoub});
    }

    render() {
        return (
            <div className='big_container'>
                <Background />
                <h1>
                    {this.state.title}
                </h1>
                <Input onAjouter={this.handleAdd} />
                <div className='big_smart'>
                    <Smart title={'To Start'}
                           list={this.state.list_toStart}
                    />
                    <Smart title={'In Progress'}
                           list={this.state.list_inProgress}
                    />
                    <Smart title={'Done'}
                           list={this.state.list_Done}
                    />
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <ToDoList />,
    document.getElementById('root')
);
