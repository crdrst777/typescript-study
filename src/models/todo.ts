// 여기에는 Todo의 형태를 정의할것임.
// ‘type’ 또는 ‘interface’ 키워드를 사용할수도 있는데
// 여기선 class를 생성하고 객체를 만들어 사용할거임(바닐라처럼)

// 자바스크립트와는 다르게 생성자(constructor)를 쓸 필요가 없이, class에서(중괄호 안에서) 바로 추가할 수 있습니다
class Todo {
  // 프로퍼티
  id: string;
  text: string;

  // 오류 문구가 뜬다. -> 아래처럼 인스턴스화 해야한다.
  // 지금 이 프로퍼티들은 여기에 추가되고 타입도 지정되었지만 값이 할당되는 부분은 없다.
  // -> 생성자를 추가해 해당 필드에 값을 할당하자. 이 생성자에는 인수(todoText)가 필요할거임.
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}
// 이제 새로운 Todo를 만들면 ID는 자동으로 생성될거임.
// 이렇게 Todo 객체에 대한 정의, 즉 이 class의 정의를 타입스크립트 파일에 추가했다.

export default Todo;
