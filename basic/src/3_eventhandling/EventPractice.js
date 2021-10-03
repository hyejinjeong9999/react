import React, {Component} from "react";

/**
 *
 * 이벤트 사용시 주의 사항*
 *
 * 1. 이벤트 이름은 카멜포기법으료 포기
 * onclick => onClick
 * onkyeup => onKeyUp
 *
 * 2.이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아닌 함수 형태의 값을 전달
 * HTML에서 이벤트를 설정할 땐 큰 따옴표 안에 실행할 코드를 넣었지만
 * 리액트에서는 함수 형태의 객체를 전달한다
 *
 * 3. DOM 요소에만 이벤트를 설정할 수 있다
 * div, button, input, form, span 등 DOM 요소에는 이벤트를 설정할 수 있지만
 * 우리가 직접 만든 컴포넌트에서는 이벤트를 자체적으로 설정할 수 없다
 *
 * <MyComponent onClick={doSomething}/>
 * MyComponent에 onClick값을 설정한다면 MyComponent를 클릭할 때 doSomething 함수를 실행하는 것이 아닌
 * 그냥 이름이 onClick인 props를 MyComponent에게 전달할 뿐
 *
 * 컴포넌트에 자체적으로 이벤트 설정은 불가능하지만 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 설정은 가능
 *
 * <div onClick={this.props.onClick}>
 *     {...}
 * </div>
 *
 * 4. 이벤트 종류
 *Clipboard, Composition, Keyboard, Focus, Form, Mouse, Selection, Touch, UI, Wheel, Media, Image
 * Animation, Tracsition
 * 참고 : https://reactjs.org/docs/events.html

 *

 */


class EventPractice extends Component {

    state = {message: ''}

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    text="text"
                    name="message"
                    placeholder={"아무거나 입력해보세용"}
                    value={this.state.message}
                    onChange={
                        /**
                         * e 객체는 SyntheticEvent로 웹 브라우저의 네이티브 이벤트를 감싸는 객체
                         * SyntheticEvent는 네이티브 이벤트와 달리 이벤트가 끝나고 나면 이벤트가 초기화 되므로 정보를 참조할 수 없다
                         * 0.5초 뒤에 e객체를 참고하면 e 객체 내부의 모든 값이 비워진다
                         *
                         * 만약 비동기적으로 이벤트 객체를 참조할 일이 있다면 e.persist 함수를 호출해 주어야 한다
                         *
                         */
                            (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />

                <button onClick={() => {
                    alert(this.state.message);
                    this.setState({
                        message: ' '
                    })
                }}>
                    제출
                </button>


            </div>
        )
    }
}

export default EventPractice