import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void; // 이건 함수의 타입을 정의한거고
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {}, // 이건 진짜 함수를 정의한거임.
  removeTodo: (id: string) => {},
}); // 초기값인 인수 한개를 넣어줘야함. 여기에 TodosContext의 형태를 정의했음. 그치만 타입도 정의해야함. 제네릭 타입 <>으로.

// 컨텍스트를 제공해주는 컴포넌트. 컨텍스트의 상태(state)를 관리하는 역할을 함.
// :React.FC는, 여기에 함수형 컴포넌트를 저장한다는 표시임.
const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText); // new Todo()를 사용하고, 인수로는 todoText를 넣어 생성자에게 전달.

    setTodos((prevTodos) => prevTodos.concat(newTodo)); // Concat()을 사용하면 새로운 배열 생성.
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId)); // 해당 아이디가 같은 것을 지우려는거니깐 같지 않는것만 남겨놓으면 삭제히는게 되는셈임.
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
// children은 기본 프로퍼티라서 사용하기 위해 props에 추가로 정의할 필요가 없음

export default TodosContextProvider;
