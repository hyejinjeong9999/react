import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/api/board";

class BoardService{

  //글목록 데이터를 가져오는 함수수
 getBoards(){
    return axios.get(BOARD_API_BASE_URL);
  }

  // axios의 post함수를 사용한 글 작성 함수
  createBoard(board) {
    return axios.post(BOARD_API_BASE_URL, board);
  }

  //글 상세보기 함수 추가; 경로 파라미터로 글 번호를 설정하여 통신한다.
  getOneBoard(no) {
    return axios.get(BOARD_API_BASE_URL + "/" + no);
  }


}

export default new BoardService();