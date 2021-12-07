import React, {useState} from 'react';

/**
 * 동적인 배열을 렌더링 해보기
 *  index 값을 key로 사용하면 리렌더링이 비효율적임 => 고윳값 만들기
 */


const IterationSample_2 = () => {
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음'},
        {id: 3, text: '눈'},
        {id: 4, text: '바람'}

    ])

    const [inputText,SetInputText] = useState('');
    const[nextId,setNextId] = useState(5); //새로운 항목을 추가할 때 사용할 id

    const namesList = names.map(name => <li key={name.id}>{name.text}</li>);
    return <ul>{namesList}</ul>;
};

export default IterationSample_2();

