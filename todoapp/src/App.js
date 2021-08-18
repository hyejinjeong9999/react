import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    //기본으로 들어갈 값들
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true,

    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id: 3,
      text: '일정관리 앱 만들어보기',
      checked: false,
    },
  ]);
  //고윳값으로 사용될 id
  //ref를 사용해 변수 담기

  /**
   *   useState가 아닌 useRef를 쓰는 이유
   *   id값은 렌더링되는 정보가 아니기 때문
   *   id는 화면에 보이지도 않고 값이 바뀐다고 컴포넌트가 리렌더링 될 필요가 없기 때문
   */
  const nextId = useRef(4);

  //Insert
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더함
    },
    [todos],
  );

  //Remove
  //App컴포넌트에 id를 파라미터로 받아와서 같은 id를 가진 항목을 todo에서 지우는 함수
  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );


  //수정
  /**
   * 수정
   * 배열 내장 함수 map을 사용해서 특정 id를 가지고 있는 객체의 checked 값을 반전시켜줌
   * onToggle 함수에서 todo.id === id ? ... : ... 삼항연산자 이용
   * id가 다를 때는 유지, id가 같으면 checked로 변환
   */
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo =>
          todo.id === id ? {
            ...todo, checked: !todo.checked,
          } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    //TodoInsert에서 onInsert호출
    //TodoList에서 todos,onRemove,onToggle 호출
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>

  );
};

export default App;
