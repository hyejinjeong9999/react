import React, {Component} from "react";
import './ValidationSample.css'

/**
 * 리액트에 내장되어 있는 createRef 함수 사용하기
 * 리액트 16.3 부터 도입
 * 적은코드로 쉽게 ref 설정 가능
 */
class ValidationSample extends Component{
    state={
        password:'',
        clicked: false,
        validated: false
    }

    handleChange =(e) =>{
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick=()=>{
        this.setState({
            clicked:true,
            //password가 0000인지 확인한다
            validated: this.state.password === '0000'
        })
        this.input.focus()
        /**
         * 검증하기 버튼을 누른후 input박스에 다시 커서를 옮긴다
         */
    }

    render() {
        return(
            <div>
                {/*onChange 이벤트가 발생하면 handleChange를 호출해 state password 값을 업데이트 함

               input의 className값은 버튼을 누르기 전에는 비어있는 문자열을 전달함
               버튼을 누른 후에는 검증 결과에 따라 s uccess 또는 failure 값을 설정한다
               이 값에 따라 input 색상이 초록/빨강으로 나타난다다
               */}
                <input
                    ref={(ref)=>this.input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success': 'failure'):''}
                />
                {/*onClick 이벤트가 발생하면 handleButtonClick을 호출해서 clicked 값을 참으로 설정해
                valiedate 값을 검증 결과로 설정*/}
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export  default ValidationSample;