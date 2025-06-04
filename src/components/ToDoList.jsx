import { useState } from "react";

const ToDoList = () => {
    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState([])
    const handleAdd = () => {
        if(inputText.trim() === "") return;
        const newItem = {
            id: Date.now(), //todoList?.length + 1
            text: inputText.trim(),
            completed: false
        }
        setTodoList((prev) => [...prev, newItem])
        setInputText("")
    }
    const handleCompleted = (id) => {
        setTodoList(todoList.map((todo) => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            } else return todo
        }))
        
    }
    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id))
    }

    return (
        <div className="pad">
            <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" />
            <button onClick={() => handleAdd()}>Add</button>
            <ul>
                {todoList?.map((todo) => {
                    return <li key={todo?.id}>
                        <input type="checkbox" onChange={() => handleCompleted(todo.id)} checked={todo?.completed} />
                        <span className={todo?.completed ? "strike" : ""}>{todo?.text}</span>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                        </li>
                })}
            </ul>
        </div>
    )
}

export default ToDoList;