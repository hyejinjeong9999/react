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

    /**
     * 객체 안에서 key를 [] 로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제 값이 key 값으로 사용된다
     *
     */
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

    /**
     *
     * onKeyPress 이벤트 핸들링
     *
     * 키를 눌렀을때 발생하는 KeyPress 이벤트 처리 해보기
     *
     */

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick()
            ;
        }
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
                    onKeyPress={this.handleKeyPress}
                />

                <button onClick={this.handleClick}>
                    제출
                </button>


            </div>
        )
    }
}

export default EventPractice_3