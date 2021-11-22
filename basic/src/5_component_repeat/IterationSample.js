import React from "react";

//version1
// const IterationSample = () => {
//     return (
//         <ul>
//             <li>눈사람</li>
//             <li>얼음</li>
//             <li>눈</li>
//             <li>바람</li>
//         </ul>
//
//     )
// }
// export default IterationSample;

/**
 * <li> 태그가 많아진다면 ??
 * 반복되는 코드를 효율적으로 사용할 필요가 있다 => map
 */

/**
 * MAP
 * js 배열 객체의 내장 함수인 map을 이용해 반복되는 컴포넌트를 렌더링 할 수 있다.
 * map 함수는 파라미터로 전달된 함수를 사용해 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성한다
 */

/**
 * [Map 문법]
 * arr.map(callback,[this.Arg])
 *
 * callback : 새로운 배열의 요소를 생성하는 함수로 파라미터
 *  1. currentValeu : 현재 처리하고 있는 요소
 *  2. index : 현재 처리하고 있는 요소의 index
 *  3. array : 현재 처리하고있는 원본 배열
 *
 * thisArg(선택항목) : callback 함수 내부에서 사용할 this 레퍼런스스
 *
 *  */

//version2
/**
 *
 * 이거 실행시키면 콘솔에서
 * key prop가 없다고 경고를 함
 * key가 뭘까?
 * */
// const IterationSample = () => {
//     const names = ['눈사람', '얼음', '눈', '바람'];
//     const nameList = names.map(name=> <li>{name}</li>);
//     return (
//         <ul>
//             {nameList}
//         </ul>
//
//     )
// }
// export default IterationSample;

/**
 * key ?
 * 컴포넌트 배열을 렌더링 했을 때 어떤 원소에 변동이 있는지 알아내려고 사용
 * 유동적인 데이터를 다룰 때 원소를 새로 생성, 제거, 수정 할 수 있다
 * key가 없을 땐 virtural Dom을 비료하는 과정에서 리스트를 순차적으로 비교해 변화를 감지함
 * key가 있다면 key값을 이용해 어떤 변화가 일어났는지 더욱 빠르게 알 수 있다.
 *
 *
 * key 설정
 * map 함수의 인자로 전달되는 함수 내부에 컴포넌트 props를 설정하듯 설정하면 된다
 * key값은 언제나 유일해야 한다
 * 데이터가 가진 고윳값을 key값으로 설정해야 한다
 *
 * ex) 게시판 게시물 - 게시물 번호
 *
 * 만약 고유 번호가 없다면?
 * map 함수에 전달되는 콜백 함수의 인수인 index 값을 사용한다다
 */

const IterationSample = () => {
    const names = ['눈사람', '얼음', '눈', '바람']
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    return <ul>{nameList}</ul>
}
export default IterationSample;
