import React, {Component} from "react";

/**
 * input이 여러개일 때 event 객체를 활용한다
 * e.target.name 값을 사용하면 된다
 * onChange 이벤트 핸들러에서 e.target.name 값을 사용하면 된다.
 *e.target.name 해당 인풋의 name을 가리킨다
 *
 *
 */


class EventPractice_3 extends Component {

    state = {
        username:'',
        message: ''}

    handleChange =(e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    handleClick =()=> {
        alert(this.state.username + ":" + this.state.message);
        this.setState({
            username:'',
            message: ''
        })
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    text="text"
                    name="username"
                    placeholder={"사용자명"}
                    value={this.state.username}
                    onChange={this.handleChange}
                />
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

export default EventPractice_3