import React from "react";
import {useHistory,useParams} from "react-router-dom";
import styled from 'styled-components'

let 박스 = styled.div`
  padding : 50px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}
`;

function Detail(props) {

    let history = useHistory()
    let {id} = useParams();

    let findItem = props.shoes.find(function (shou){
        return shou.id == id
    })

    return (
        <div className="container">
            <박스>하이하이
                <제목 색상 = {'red'}>이건제목</제목>
            </박스>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findItem.title}</h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                    <button className="btn btn-secondary" onClick={()=>{
                    history.goBack()
                    }}>뒤로가기</button>

                </div>
            </div>
        </div>
    )
}

//export defailt 변수명 or 함수명
export default  Detail