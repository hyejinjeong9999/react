import React, {Component} from "react";
import './ValidationSample.css'

/**
 *
 * 1. 콜백 함수를 통한 REF 설정
 *
 * ref를 만드는 가장 기본적인 방법은 콜백 함수를 사용하는 것이다
 * ref를 달고자 하는 요소에 ref라는 콜백 함수를 rops로 전달하면 된다
 * 이 콜백 함수는 ref 값을 파라미터로 전달받는다
 * 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정해 준다
 *
 * 예시
 * <input ref{(ref) => {this.input=ref}} />
 *
 * 이렇게 하면 앞으로this.input은 input 요소의 DOM을 가르킨다
 * ref의 이름은 자유롭게 지정 가능하다
 * DOM 타입과 관계 없이 this.asfasdf = ref 처럼 마음대로 지정 가능..
 *
 */

/**
 * 2. createRef를 통한 ref 설정
 *
 * 리액트에 내장되어 있는 createRef라는 함수를 사용
 * 더 적은 코드로 쉽게 사용 가능하다
 * 16.3v 부터 도입함
 */

//createRef
class RefSample extends Component {

    /**
     * createRef를 사용해 ref를 만들어주려면
     * 컴포넌트 내부에서 멤버 변수로 React.createRef() 를 담아 주어야 한다
     *
     * 해당 멤버 변수를 ref를 달고자 하는 요소에 ref props로 넣어주면 된다
     *
     * 설정한 뒤 나중에 ref를 설정해준 DOM에 접근하려면 this.input.current를 조회하면 된다
     * 뒷부분에 current를 넣어주어야 하는거 잊지 말기기
    */
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (

            <div>
                <input ref={this.input}/>
            </div>

        )

    }

}

export default RefSample;