import React, { useState } from 'react';
import firebase from '../utils/firebase';
import '../App.css';

export default function Form() {
    const [title, setTitle] = useState('');

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const createTodo = () => {
        const todoRef = firebase.database().ref('Todo');
        const todo = {
            title,
            complete: false,
        };

        if(todo.title !== '') {
            todoRef.push(todo);
        }
        else {
            alert('Please Enter Something in the Input!');
        }

        setTitle('');
    };

    return (
        <div>
            <input type="text" required="required" onChange={handleOnChange} value={title} className="inputbox" />
            <br /><br />
            <button onClick={createTodo} className="styledButton">Add Todo</button>
        </div>
    );
}