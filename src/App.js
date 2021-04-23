import React from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

export default function App() {
    return (
        <div className="App">
            <h1 className="App-heading">Todo List Web App</h1>
            <p className="App-subHeading">Developed by: <strong><i>Abdul Basit Mehtab</i></strong> & Powered by: <strong><i>Firebase</i></strong></p>
            <br />
            <Form />
            <TodoList />
        </div>
    );
}