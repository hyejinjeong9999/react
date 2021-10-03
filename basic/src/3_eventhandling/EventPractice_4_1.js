import React, {useState} from "react";

/**
 * EventPractice3
 * 함수형 컴포넌트로 구현해보기
 *
 * useState를 통해 사용하는 상태에 문자열이 아닌 객체를 넣어 전달해보기기
 *
 * e.target.name 값을 활용하려면 위와 같이 useState를 쓸 때 인풋 값들이 들어있는 form 객체를 사용하면 된다
 *
 * */



const EventPractice_4_1 = () => {

    const [form, setForm] = useState({
        username: '',
        message: ''
    });

    const {username, message}= form

    const onChange = e => {
        const nextForm = {
            ...form, //기본의 form내용을 이 자리에 복사한 뒤
            [e.target.name]: e.target.value //원하는 값을 덮어 씌운다
        };
        setForm(nextForm)
    }


    const onClick = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: ''
        })
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
                onChange={onChange}
            />
            <input
                text="text"
                name="message"
                placeholder={"아무거나 입력해보세용"}
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />

            <button onClick={onClick}>
                제출
            </button>


        </div>
    )

}


export default EventPractice_4_1