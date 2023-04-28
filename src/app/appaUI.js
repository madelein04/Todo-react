import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter, TodoItem, TodoList, TodoSearch, CreateTodoButtom } from "../components";
import { Modal } from "../modal";
import { TodoForm } from '../todoForm';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        todos,
    } = React.useContext(TodoContext);
    console.log(
        { todos },
        { searchedTodos }

    );
    return (
        <div className="conteiner">
            <div className='column1'>
                <TodoCounter />
                <TodoSearch />

                {
                    <TodoList>
                        {error && <p>Desespérate, hubo un error...</p>}
                        {loading && <p>Estamos cargando, no desesperes...</p>}
                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>

                }
                {!!openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>

                )}
            </div>
            <div className='column2'>
                <div className='formTODO'>
                    <TodoForm />
                </div>
                <CreateTodoButtom
                    setOpenModal={setOpenModal}
                />
            </div>
        </div>
    );
};



export { AppUI };