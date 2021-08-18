import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/all';
//조건부 스타일링을 위한 classnames
//html에서는 태그에 class를 붙이고 ' . '을 이용해서 css를 적용하지만
// React에서는 class가 예약어라 사용이 불가능하다.
//classNames는 className을 적용할 때 다양한 옵션을 붙여서 className을 적용할 수 있다.
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {

  const { id, text, checked } = todo;

  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox', { checked })}
           onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className='text'>{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
