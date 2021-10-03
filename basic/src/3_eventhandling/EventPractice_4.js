import React, {Component, useState} from "react";

/**
 * EventPractice3
 * 함수형 컴포넌트로 구현해보기
 */


const EventPractice_4 = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    // e.target.name를 사용하지 않고 onChange관련 함수를 만들어서 사용
    // 인풋이 두개뿐이면 괜찮지만 인풋으 ㅣ개수가 많아지면 e.target.name을 활용하는 것이 더 좋다

    const onClick = () => {
        alert(username + ': ' + message);
        setUsername('');
        setMessage('');
    }

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                text="text"
                name="username"
                placeholder={"사용자명"}
                value={username}
                onChange={onChangeUsername}
            />
            <input
                text="text"
                name="message"
                placeholder={"아무거나 입력해보세용"}
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />

            <button onClick={onClick}>
                제출
            </button>


        </div>
    )

}


export default EventPractice_4