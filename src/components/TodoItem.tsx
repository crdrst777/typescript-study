// 홑화살괄호 구문을 활용하면 우리가 정의한 프로퍼티를 기존 props와 합칠 수 있죠
// 객체 타입으로 설정하겠습니다. 프로퍼티는 언제나 객체 타입이고, 우리는 이 객체를 원래 있는 props와 합칠 거니까요
// 이제 명확하게 표시해야 합니다. 어떤 타입의 프로퍼티를 받을 건지 말입니다

const todoItem: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default todoItem;
