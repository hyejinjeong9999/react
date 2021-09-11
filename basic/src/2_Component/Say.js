import React, {useState} from "react";

/**
 * 함수형 컴포넌트에서 useState 사용하기
 *  리액트 16.8 이전에는 함수형 컴포넌트에서 useState를 사용할 수 없었지만
 *  16.8 이후부터 useState를 사용할 수 있게 되었다.
 */

/**
 * 배열 비구조화 할당
 */

// //before
// const array = [1,2];
// const one = array[0];
// const two = array[1];
//
// //비구조화 할당 후
// const array = [1,2];
// const [one,two] = array;


const Say = () => {
    /**
     * useState함수의 인자에는 상태의 초깃값을 넣어준다
     클래스형 컴포넌트에서는 state 초깃값은 객체 형태를 넣어주어야 하지만
     useState에서는 반드시 객체가 아니어도 상관없다
     *
     * useState 배열의 첫번째 원소는 현재 상태이고 두번째 원소는 상태를 바꾸어주는 함수 (setter함수)
     *
     */


    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('하이하이');
    const onClickLeave = () => setMessage('바이바이');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color: 'red'}} onClick={() => setColor('red')}>빨간색</h1>
            <h1 style={{color: 'green'}} onClick={() => setColor('green')}>초록색</h1>
            <h1 style={{color: 'blue'}} onClick={() => setColor('blue')}>파란색</h1>


        </div>

    )
}

export default Say;