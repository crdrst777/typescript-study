// 사용자에게 입력창을 제공하고 입력받은 내용을 가져오는 컴포넌트
import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

// '() =>' 함수 타입. 괄호 안에는 인수 즉 매개변수를, 화살표 다음에는 반환 타입을 정의한다.
// onAddTodo: (text: string) => void
// ----> onAddTodo함수를 props로 받아올건데, 이 함수 타입의 매개변수 타입은 문자열(매개변수 이름은 아무거나해도됨), 반환값은 없음
const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  // React.FormEvent -> 폼 제출 이벤트 타입. 리액트 패키지에서 제공하는 타입.
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    // ref에는 항상 current 프로퍼티가 있고 여기에 실제 값이 들어있음
    // current 뒤에 ?를 쓴다면 그 이유는 타입스크립트에게 일단 값에 접근해보고, 접근이 가능하다면, 그때 입력된 값을 가져와 enteredText 저장하라고 알리는 것임.
    // 만약 접근이 불가능하면 아직 연결되지 않은 상태일 거고 null이 enteredText에 저장될거임.
    // current 뒤에 !를 쓰는것은 이 시점에는 값이 null이 아니라는, useRef와 요소가 연결되었다는게 확실하다는 것임.

    // 사용자가 입력한 텍스트를 검증
    if (enteredText.trim().length === 0) {
      // 공백을 제거했을때 아무값이 없는 경우
      // throw an error
      return;
    }
    // 입력된 내용을 todos 목록에 추가하기. App.tsx에서 함수를 가져올거임.
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      {/* htmlFor과 id로 해서 연결한거임 */}
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

// 이제 할거는 폼 제출(submission)을 처리하고 브라우저의 기본 동작을 막는것.
