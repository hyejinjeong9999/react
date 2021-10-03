import React, {Component} from "react";
import './ValidationSample.css'


class ScrollBox extends Component {
    scrollToBottom = () => {

        /**
         * 비구조화 할당 문법
         *
         * const scrollHeight = this.box.scrollHeight;
         * const clientHeight = this.box.clientHeight
         *
         *와 같은 의미
         */

        /**
         * scrollTop : 세로 스크롤바 위치 (0~350)
         * scrollHeight : 스크롤이 있는 박스 안의 div 높이 (650)
         * clientHeight : 스크롤이 있는 박스의 높이 (300)
         */
        const {scrollHeight, clientHeight} = this.box;

        this.box.scrollTop = scrollHeight - clientHeight;

    }
    scrollToTop = () => {
        this.box.scrollTop = 0;
    }

    scrollToCenter = () => {
        const clientHeight = this.box.clientHeight;
        this.box.scrollTop = clientHeight / 2
    }

    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white,black)'
        }
        return (
            <div
                style={style}
                ref={(ref) => {
                    this.box = ref
                }}>
                <div style={innerStyle}/>
            </div>
        )
    }
}

export default ScrollBox;