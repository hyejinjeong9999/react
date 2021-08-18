import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

/**
 * todos 배열 안에 들어 있는 객체에는 각 항목의 고유 id, 내용, 완료 여부를 알려주는 값이 포함되어 있다
 * 이 배열은 TodoList에 props로 전달된다.
 * 이 값을 받아서 TodoItem으로 변환하여 렌더링하는 것
 * 데이터는 통째로 todo를 받고 key는 고유값인 id를 받는다
 */
const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
    <div className='TodoList'>
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;