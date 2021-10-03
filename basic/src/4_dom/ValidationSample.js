import React, {Component} from "react";
import './ValidationSample.css'

/**
 * 이 예제에서는 state를 사용해서 필요한 기능을 구현했지만
 * 가끔 state 만으로 해결할 수 없는 기능이 있다
 *
 * 특정 input에 포커스 주기
 * 스크롤 박스 조작하기
 * canvas 요소에 그림 그릭
 *
 * 이때는 DOM에 직접적으로 접근해야되는데 이를 위해 ref를 사용한다다
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