import logo from './logo.svg';
import './App.css';
import {useState} from "react";


function App() {

    let [글제목, 글제목변경] = useState(['다첫번째글11', '가두번째 글22', '바세번째 글']);
    let [number, setNumber] = useState([1,1,1]);
    let [modalSwitch, setModalSwitch] = useState(false);
    let [no, setNo] = useState(0);
    let [input, setInput] = useState("");

    function addLike(i) {
        let newArray = [...number]
        newArray[i] = parseInt(number[i])+Number(1);
        setNumber(newArray)
    }

    function 제목바꾸기() {
        let newArray = [...글제목]
        newArray[0] = '하하변경된 값'
        글제목변경(newArray)
    }

    function 제목정렬() {
        let newArray = [...글제목]
        newArray.sort()
        글제목변경(newArray)
    }

    function 글추가(text) {
        let newArray = [...글제목]
        newArray.unshift(text)
        글제목변경(newArray)
    }


    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 Blog</div>
            </div>

            <button onClick={제목바꾸기}>제목 번경
            </button>
            <button onClick={제목정렬}>제목 정렬
            </button>

            {
                글제목.map(function (a, i) {
                    return <div className='list' key={i}>
                        <h3 onClick={() => {
                            setNo(i)
                        }}>
                            {a}
                            <span onClick={() => addLike(i)}>
                            👍
                                {number[i]}    </span>


                        </h3>
                        <p>11월 26일</p>
                        <hr/>
                    </div>

                })
            }

            <button onClick={() => {
                setNo(0)
            }}>버튼1
            </button>
            <button onClick={() => {
                setNo(1)
            }}>버튼2
            </button>
            <button onClick={() => {
                setNo(2)
            }}>버튼3
            </button>

            <input onChange={(e) => {
                setInput(e.target.value)
            }
            }/>

            <div>
                <button onClick={() => setModalSwitch(!modalSwitch)}>모달버튼</button>
            </div>
            {
                modalSwitch === true
                    ? <Modal 글제목={글제목} no={no}></Modal>
                    : null
            }

            <h1>글쓰기창</h1>
            <div className="publish">
                <input onChange={(e) => setInput(e.target.value)}></input>
                <button onClick={()=>글추가(input)}>저장</button>
            </div>


        </div>
    );
}


function Modal(props) {
    return (
        <div className="modal">

            <h2>제목 {props.글제목[props.no]}</h2>
            <p>날짜</p>
            <p>상세내용용</p>
        </div>
    )

}

export default App;
