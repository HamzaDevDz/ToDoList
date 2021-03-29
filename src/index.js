import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Background from "./Background";
import Smart from "./Smart";
import Input from "./Input";

class ToDoList extends React.Component {
    state = {
        title: 'To Do List',
        list_toStart : [
            {id: 1, val: 'bb'},
            {id: 2, val: '45'}
            ],
        title_toStart : 'To Start',
        list_inProgress : [
            {id: 3, val: 'zz'},
            {id: 4, val: '41'}
        ],
        title_inProgress : 'In Progress',
        list_Done : [],
        title_Done : 'Done',

        cptID : 5,

        ID_drag : 0,
        title_from : ''
    }

    handleDrag = event => {
        this.setState({ID_drag : event.target.id});
        this.setState({title_from: event.target.parentNode.previousSibling.innerHTML});
    }
    handleDragOver = event => {
        event.preventDefault();
        event.stopPropagation();
    }
    handleDrop = event => {
        event.preventDefault();
        event.stopPropagation();
        const id = this.state.ID_drag;
        const from = this.state.title_from;
        const target = event.target.previousSibling.innerHTML;
        let index,elem;
        switch (from) {
            case this.state.title_toStart:
                console.log('start - progress');
                index = this.state.list_toStart.findIndex((elem) => elem.id === parseInt(id));
                elem = this.state.list_toStart[index];
                const list_toStart_copy = [...this.state.list_toStart];
                list_toStart_copy.splice(index, 1);
                this.setState({list_toStart : list_toStart_copy});
                switch (target) {
                    case this.state.title_inProgress:
                        const list_inProgress_copy = [...this.state.list_inProgress];
                        list_inProgress_copy.push(elem);
                        this.setState({list_inProgress : list_inProgress_copy});
                        break;
                    case this.state.title_Done:
                        const list_Done_copy = [...this.state.list_Done];
                        list_Done_copy.push(elem);
                        this.setState({list_Done : list_Done_copy});
                }
                break;
            case this.state.title_inProgress:
                index = this.state.list_inProgress.findIndex((elem) => elem.id === parseInt(id));
                elem = this.state.list_inProgress[index];
                const list_inProgress_copy = [...this.state.list_inProgress];
                list_inProgress_copy.splice(index, 1);
                this.setState({list_inProgress : list_inProgress_copy});
                switch (target) {
                    case this.state.title_toStart:
                        const list_toStart_copy = [...this.state.list_toStart];
                        list_toStart_copy.push(elem);
                        this.setState({list_toStart : list_toStart_copy});
                        break;
                    case this.state.title_Done:
                        const list_Done_copy = [...this.state.list_Done];
                        list_Done_copy.push(elem);
                        this.setState({list_Done : list_Done_copy});
                }
                break;
            case this.state.title_Done:
                index = this.state.list_Done.findIndex((elem) => elem.id === parseInt(id));
                elem = this.state.list_Done[index];
                const list_Done_copy = [...this.state.list_Done];
                list_Done_copy.splice(index, 1);
                this.setState({list_Done : list_Done_copy});
                switch (target) {
                    case this.state.title_inProgress:
                        const list_inProgress_copy = [...this.state.list_inProgress];
                        list_inProgress_copy.push(elem);
                        this.setState({list_inProgress : list_inProgress_copy});
                        break;
                    case this.state.title_toStart:
                        const list_toStart_copy = [...this.state.list_toStart];
                        list_toStart_copy.push(elem);
                        this.setState({list_toStart : list_toStart_copy});
                }
        }
    }

    handleAdd = val => {
        const list_toStart_copy = Array.from(this.state.list_toStart);
        const id = this.state.cptID;
        list_toStart_copy.push({id: id, val: val});
        this.setState({list_toStart: list_toStart_copy});
        const cptID_new = id + 1;
        this.setState({cptID: cptID_new});
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
                    <Smart title={this.state.title_toStart}
                           list={this.state.list_toStart}
                           drag={this.handleDrag}
                           dragOver={this.handleDragOver}
                           drop={this.handleDrop}
                    />
                    <Smart title={this.state.title_inProgress}
                           list={this.state.list_inProgress}
                           drag={this.handleDrag}
                           dragOver={this.handleDragOver}
                           drop={this.handleDrop}
                    />
                    <Smart title={this.state.title_Done}
                           list={this.state.list_Done}
                           drag={this.handleDrag}
                           dragOver={this.handleDragOver}
                           drop={this.handleDrop}
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
