import React, {Component} from "react";

/**
 * 임의의 메서드 만들기
 *
 * 이벤트에 실행할 자바 스크립트 코드를 전달하는 것이 아니라 함수 형태의 값을 전달한다!
 * 그래서 이벤트를 처리할 때 렌더링을 하는 동시에 함수를 만들어 전달해 줌
 * 그 대신 함수를 미리 준비해 전달하는 방법도 있다
 * 성능상의 차이는 거의 없지만 후자가 가독성이 높다
 *
 */


class EventPractice_2 extends Component {

    state = {message: ''}

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        });

    }

    handleClick() {
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

export default EventPractice_2