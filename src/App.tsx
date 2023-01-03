// 함수는 모두 여기서 관리해서 props로 내려보낼것임.

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodosContextProvider from "./store/todos-context";

function App() {
  // 배열 안에서 Todo 클래스를 사용해 객체를 만들거임.
  // const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  // 위처럼 하지않고 state를 사용할거임.
  // useState() 함수는 원래 제네릭 함수임. 우리가 이 state에 정말로 저장하려고 하는 데이터의 타입을 지정할 수 있도록 함.
  // (처음엔 빈배열이지만) 추가될 항목의 형태는 우리가 만든 Todo 클래스의 형태여야 한다는 정의임. (이 state를 통해 관리할 데이터의 타입은 Todo로 구성된 배열이라고 정의)

  // const [todos, setTodos] = useState<Todo[]>([]);

  // todoText에 값을 넘겼으니, 이제 아래같은 형태가 되는거임.
  // todos = [
  //   {
  //     id: 1,
  //     text: "Learn React",
  //   },
  //   {
  //     id: 2,
  //     text: "Learn TypeScript",
  //   },
  // ];

  // const addTodoHandler = (todoText: string) => {
  //   const newTodo = new Todo(todoText); // new Todo()를 사용하고, 인수로는 todoText를 넣어 생성자에게 전달.

  //   setTodos((prevTodos) => prevTodos.concat(newTodo)); // Concat()을 사용하면 새로운 배열 생성.
  // };

  // const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId)); // 해당 아이디가 같은 것을 지우려는거니깐 같지 않는것만 남겨놓으면 삭제히는게 되는셈임.
  // };

  // 위 코드들 다 todos-context.tsx로 보냈음.

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
