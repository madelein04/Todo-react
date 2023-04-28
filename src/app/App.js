import '../components/css/todo.css';
import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './appaUI';



function App() {

  return (
    <TodoProvider>
      < AppUI />
    </TodoProvider>
  );
};

export default App;







