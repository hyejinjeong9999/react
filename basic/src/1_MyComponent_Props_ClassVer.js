import React, {Component} from "react";
import PropTypes from "prop-types";
import MyComponent_Props from "./1_MyComponent_Props";


/**
 *
 * 클래스형 컴포넌트 버전
 *
 * 클래스형 컴포넌트에서 props를 사용할 때는 render 함수에서 this.props를 조회하면 된다다 *
 */


class MyComponent2_ClassVer extends Component {

    /**
     * defaultProps와 propTypes를 설정할때 원래해도 해도 되고
     * class 내부에서 설정할 수도 있다
     */

    static defaultProps = {
        name: '기본 이름'
    };

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }


    render() {

        const {name, favoriteNumber, children} = this.props; // 비구조화 할당
        return (
            <div>
                제 이름은 {name} 입니다 <br/>
                children 값은 {children} 입니다
                <br/>
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        )
    }
}


// MyComponent2_ClassVer.defaultProps = {
//     name: '기본 이름'
// }
//
//
// MyComponent2_ClassVer.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
// }

export default MyComponent2_ClassVer;
