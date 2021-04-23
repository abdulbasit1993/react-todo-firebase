import React from 'react';
import firebase from '../utils/firebase';
import '../App.css';

export default function Todo({ todo }) {
    const deleteTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.remove();
    };

    const completeTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id);
        todoRef.update({
            complete: !todo.complete,
        });
    };

    return (
        <div className="todoDiv">
            <h1 className={todo.complete ? 'complete' : ''}>{todo.title}</h1>
            <button onClick={deleteTodo} className="styledButton extraBtnstyle">Delete</button>
            <button onClick={completeTodo} className="styledButton extraBtnstyle">Complete</button>
        </div>
    );
}
