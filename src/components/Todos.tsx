// 프로퍼티 전달 통로 역할을 하는 컴포넌트
import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

// 이렇게 React.FC라고 타입을 정의함으로써 이 함수가 함수형 컴포넌트 (Functional Component)로 동작한다는 걸 명확히 함
// React.FC는 제네릭 타입임. type FC<P = {}> = FunctionComponent<P>;
// class 이름은 아래처럼 타입으로도 사용할 수 있다. Todo
// items에 받을 값을 Todo 배열로 바꿉니다. Todo 클래스로 만든 배열이요, 즉
// items는 객체로 채워진 배열이고 그 객체는 Todo 클래스의 정의에 부합하는 객체입니다
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  console.log(todosCtx);
  return (
    // itmes는 [] , item은 그 안의 각 {}임.
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          // bind( 이 키워드가 호출될 함수 안에서 가르키는 값 , 호출될 함수가 매개변수로 받을 값)
        ></TodoItem>
      ))}
    </ul>
  );
};
export default Todos;
