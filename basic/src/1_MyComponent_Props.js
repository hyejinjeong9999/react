import React from "react";
import PropTypes from "prop-types";


/**
 * 2.
 *[props]
 * properties를 줄인 표현으로 컴포넌트 속성을 설정할 때 사용하는 요소
 *
 * props값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있었다
 *
 * [children]
 * 리액트 컴포넌트를 사용할 때 컴포넌트 태그 사이에 내용을 보여주는 props
 *
 */


/**
 *
 * 부모 컴포넌트(App) 에서 받아온 값으로 name이라는 props를 렌더링하기
 * props 값은 컴포넌트 함수의 파라미터로 받아와 사용할 수 있다.
 *
 */


//
// const MyComponent_Props = props => {
//     return (
//         <div>
//             제 이름은 {props.name} 입니다 <br/>
//             children 값은 {props.children} 입니다
//         </div>
//     )
//
// }


    //비구조화 할당
const MyComponent_Props = props => {
        const {name,favoriteNumber, children} = props;

        return (
            <div>
                제 이름은 {name} 입니다 <br/>
                children 값은 {children} 입니다

                <br/>

                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        )

    }

//기본값 설정하기
MyComponent_Props.defaultProps = {
    name: '기본 이름'
}

//props 검증
//name은 무조건 string 형태로 전달해야된다
//proptypes 구문을 import 해야함
// /favoriteNumber : 지정하지 않았을 떼 경고를 보낸다
MyComponent_Props.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}


export default MyComponent_Props;

