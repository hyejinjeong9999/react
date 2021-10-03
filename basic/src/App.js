import React, {Component} from "react";
import ScrollBox from "./4_dom/ScrollBox";

// import Say from "./2_Component/Say"
// import Counter from "./2_Component/Counter"
// import EventPractice from "./3_EventHandling/EventPractice";
// import EventPractice_2 from "./3_EventHandling/EventPractice_2";
// import EventPractice_2_1 from "./3_EventHandling/EventPractice_2_1";
// import EventPractice_3 from "./3_EventHandling/EventPractice_3";
// import EventPractice_4 from "./3_eventhandling/EventPractice_4";
// import EventPractice_4_1 from "./3_eventhandling/EventPractice_4_1";
// const App = () => {
//     // return <MyComponent1/>;
//     // return <MyComponent_Props name={"React"}/>;
//     // return <MyComponent_Props name = {"React"} favoriteNumber={1}>리액트</MyComponent_Props>;
//     // return <MyComponent_Props_ClassVer name = {"React"} favoriteNumber={1}>리액트</MyComponent_Props_ClassVer>;
//     // return <Counter/>;
//     // return <EventPractice/>;
//     // return <EventPractice_2_1/>;
//     // return <EventPractice_3/>;
//     // return <EventPractice_4/>;
//     // return <EventPractice_4_1/>;
//     // return <ValidationSample_usingCallback/>;
//     return <ScrollBox/>
// };


/**
 * ScrollBox 에서 맨 밑으로 버튼을 누르면 스크롤 맨 밑으로 가게 함
 */
class App extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => this.scrollBox = ref}/>
                {/*
                onclick = {this.scrollBox.scrollBotton} 형식은 왜 안될까??
                컴포넌트가 처음 렌더링 될 때는 this.scrollBox 값이 undefined이므로
                this.scrolledBox.scrollToBottom 값을 읽어오는 과정에서 오류가 발생한다

                새로운 함수를 만들어서 내부에서 scrollToBottom 메서드를 실행하면
                이미 한번 렌더링을 해서 this.scrollBox를 설정한 시점이기 때문에
                오류가 나지 않는당
                */}
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    맨 밑으로
                </button>

                <button onClick={() => this.scrollBox.scrollToTop()}>
                    맨 위로
                </button>

                <button onClick={() => this.scrollBox.scrollToCenter()}>
                    중간으로
                </button>
            </div>
        )
    }
}

export default App;
