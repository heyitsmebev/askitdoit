import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#fff',
            padding: '20px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
               <p>
                <input type="checkbox" onChange=
                {this.props.markComplete.bind (this, id)} /><span style={ftStyle}>{ title }</span>
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
               </p> 
            </div>
        )
    }
}

//{' '} means space between text and checkbox. 
//PropTypes 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#EDF0F5',
    color: '#272727',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

const ftStyle = {
    padding: '5px 9px',
}
export default TodoItem
