import {Component} from "react";

class Component_Counter extends Component {
    /**
     *
     * 컴포넌트에 state를 설정할 때는 다음과 같이 constructor 메서드를 작성해서 설정한다
     *
     * 컴포넌트의 생성자 메서드로
     * 클래스형 컴포넌트에서 constructor를 작성할 때 만드시 super(props)를 호출해주어야 한다
     * 이 함수가 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component 클래스가 지닌 생성자 함수를 호출해준다
     *
     * 그 다음 this.state 값에 초깃값을 설정해 주었다
     * 컴포넌트의 state객체 형식이어야 한다다
     */
    // constructor(props) {
    //     super(props);
    //     //state의 초깃값 설정하기
    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     }

    /**
     * constructor 메서드를 선언하지 않고도 state 초깃값을 설정할 수 있다
     */
    state = {
        number: 0,
        fixedNumber: 0
    }


    /**
     * render 함수에서 현재 state를 조회할때는 this.state를 조회하면 된다
     * button 안에 onClick이라는 값을 props로 넣어주었는데
     * 이는 버튼이 클릭될 때 호출시킬 함수를 설정할 수 있게 해준다 (이벤트 설정)
     *
     * 이벤트로 설정할 함수를 넣어줄 때 화살표 함수 문법을 사용한다
     * this.setState라는 함수가 state 값을 바꿀 수 있게 해준다다     *
     */
    render() {
        const {number, fixedNumber} = this.state //state를 조회할 때는 this.state로 조회한다
        //state 안에 fixedNumber라는 값을 추가한 후 버튼이 클릭될 때 fixNumber 값은 변화시키지 않음
        return (
            <div>
                <h1>{number}</h1>
                <h1>바뀌지 않는 값 : {fixedNumber}</h1>

                <button
                    onClick={() => {


                        //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
                        //this.setState를 사용해 state에 새로운 값을 넣을 수 있다
                        // this.setState({number: number + 1})
                        //메서드를 두번사용하면 값이 변경되지 않는다
                        //this.setState를 사용할 때 객체 대신에 함수를 인자로 넣어주는 것이다

                        this.setState(
                            {
                                number: number + 1
                            },
                            () => {
                                alert("selectState 호출")
                                alert(this.state.number)
                            }
                        )
                    }}

                    //위 코드와 아래 코드는 완전히 똑같은 기능을 한다
                    //아래 코드는 함수에서 바로 객체를 반환한다는 의미다
                    //화살표 함수에서 바로 객체를 반환하도록 했기 때문에 prevState =>({})와 같은 형태로 이루어진다
                    // this.setState(prevState => ({
                    //     number: prevState.number + 1
                    // })

                >
                    +1
                </button>
            </div>
        )

    }
}

export default Component_Counter;