import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  // 배열 안에서 Todo 클래스를 사용해 객체를 만들거임.
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

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

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
