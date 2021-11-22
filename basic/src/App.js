import React, {Component} from "react";
import ValidationSample from "./4_dom/ValidationSample";
import ValidationSample_usingCallback from "./4_dom/ValidationSample_usingCallback";
import ScrollBox from "./4_dom/ScrollBox";
import IterationSample_2 from "./5_component_repeat/IterationSample_2";

const App = () => {
    // return <MyComponent1/>;
    // return <MyComponent_Props name={"React"}/>;
    // return <MyComponent_Props name = {"React"} favoriteNumber={1}>리액트</MyComponent_Props>;
    // return <MyComponent_Props_ClassVer name = {"React"} favoriteNumber={1}>리액트</MyComponent_Props_ClassVer>;
    // return <Counter/>;
    // return <EventPractice/>;
    // return <EventPractice_2_1/>;
    // return <EventPractice_3/>;
    // return <EventPractice_4/>;
    // return <EventPractice_4_1/>;
    // return <ValidationSample_usingCallback/>;
    // return <ScrollBox/>
    return <IterationSample_2/>
};


/**
 * ScrollBox 에서 맨 밑으로 버튼을 누르면 스크롤 맨 밑으로 가게 함
 * 컴포넌트에 ref 단 후 ref를 이용해 컴포넌트 내부 메서드 호출하기
 */
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <ScrollBox ref={(ref) => this.scrollBox = ref}/>
//                 {/*
//                 onclick = {this.scrollBox.scrollBotton} 형식은 왜 안될까??
//                 컴포넌트가 처음 렌더링 될 때는 this.scrollBox 값이 undefined이므로
//                 this.scrolledBox.scrollToBottom 값을 읽어오는 과정에서 오류가 발생한다
//
//                 새로운 함수를 만들어서 내부에서 scrollToBottom 메서드를 실행하면
//                 이미 한번 렌더링을 해서 this.scrollBox를 설정한 시점이기 때문에
//                 오류가 나지 않는당
//                 */}
//                 <button onClick={() => this.scrollBox.scrollToBottom()}>
//                     맨 밑으로
//                 </button>
//
//                 <button onClick={() => this.scrollBox.scrollToTop()}>
//                     맨 위로
//                 </button>
//
//                 <button onClick={() => this.scrollBox.scrollToCenter()}>
//                     중간으로
//                 </button>
//             </div>
//         )
//     }
// }

export default App;
