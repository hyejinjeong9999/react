import React, { useState, useCallback } from 'react';

//import로 이미지를 가져올 수 있다
//사이트 : https://react-icons.github.io/react-icons/icons?name=im
import { ImPencil2 } from 'react-icons/im';

import './TodoInsert.scss';

//App에서 TodoInsert에 넣어준 onInsert 함수에 현재 useState를 통해 관리하고 있는 value 값을 파라미터로 넣어서 호출
const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);


  /**
   * onSubmit 함수가 호출되면 props로 받아온 onInsert함수에
   * 현재 value값을 파라미터로 넣어서 호출하고 현재 value값을 초기화한다
   *
   * onSubmit 이벤트는 브라우저를 새로고침시킨다.
   * 이때 e.preventDefault() 함수를 호출하면 새로고침을 막는다
   *
   * onSubmit 이벤트는 인풋에서 엔터만 눌렀을 때도 발생하기 때문에 onSubmit을 사용
   * onClick을 이용하면 onKeyPress 이벤트를 생성해서 Enter를 감지하는 로직을 따로만들어야함
   * => 즉, 엔터도 감지하기 위해 onSubmit을 이용했다다
  */

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(''); //value값 초기화

      //submit 이벤트는 브라우저에서 새로고침을 발생시킴
      //방지하기 위해 이 함수를 호출한다
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input paceholder="할 일을 입력하세요"
             value={value}
             onChange={onChange}
      />
      <button type="submit">
        <ImPencil2 />
      </button>
    </form>
  );
};

export default TodoInsert;