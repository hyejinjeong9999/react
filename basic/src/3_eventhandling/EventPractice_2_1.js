import React, {Component} from "react";

/**
 *
 * 메서드 바인딩은 생성자 메서드에서 하는 것이 정석이다
 * 새 메서드를 만들 때마다 constructor도 수정해야 되서 불편함이 크다
 * 간단하게 바벨의 transform-class-properties 문법을 사용해서 화살표 함수형태로 메서드를 정의한다
 */


class EventPractice_2_1 extends Component {

    state = {message: ''}

    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });

    }

    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    text="text"
                    name="message"
                    placeholder={"아무거나 입력해보세용"}
                    value={this.state.message}
                    onChange={this.handleChange}
                />

                <button onClick={this.handleClick}>
                    제출
                </button>


            </div>
        )
    }
}

export default EventPractice_2_1