import { Header } from "./components/Header";
import { Tabs } from "./components/Tabs";
import { TodoList } from "./components/TodoList";
import { TodoInput } from "./components/TodoInput";
import { useEffect, useState } from "react";

function App() {
  /* const todos = [
   { input: 'Hello! Add your first todo!', complete: true },
   { input: 'Get the groceries!', complete: false },
   { input: 'Learn how to web design', complete: false },
   { input: 'Say hi to gran gran', complete: true },
   ]
 */
  const [todos, setTodos] = useState([
    { input: "Hello! Add your first todo!", complete: true },
  ]);
  const [selectedTab, setSelectedTab] = useState("All");

  const handelAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handelSaveTodos(newTodoList);
  };
  const handelCompletedTodo = (index) => {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo["complete"] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handelSaveTodos(newTodoList);
  };
  const handelDeleteTodo = (index) => {
    let newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    setTodos(newTodoList);
    handelSaveTodos(newTodoList);
  };
  const handelSaveTodos = (currentTodos) => {
    localStorage.setItem("todo-app",JSON.stringify({todos:currentTodos}))
  }
  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) return;
    console.log("hii");
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos); 
  }, []);

 
  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handelCompletedTodo={handelCompletedTodo}
        handelDeleteTodo={handelDeleteTodo}
        selectedTab={selectedTab}
        todos={todos}
      />
      <TodoInput handelAddTodo={handelAddTodo} />
    </>
  );
}

export default App;
