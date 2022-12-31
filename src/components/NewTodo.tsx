// 사용자에게 입력창을 제공하고 입력받은 내용을 가져오는 컴포넌트

const NewTodo: React.FC = () => {
  return (
    <form>
      <label>Todo text</label>
      <input type="text"></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
