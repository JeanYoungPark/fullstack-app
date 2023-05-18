import { BoardHeader, BoardSearchWrap, BoardSearch, BoardSearchBtn, BoardTable, BoardTableTh, BoardTableTd } from "../../styles/board";

interface ChildProps {
    category: string;
  }
  
function BoardListComponent(props: ChildProps) {
    return (
        <div>
            <BoardHeader>
                <h2>신간 게시판</h2>
                <BoardSearchWrap>
                    <BoardSearch type="text" placeholder="Search" />
                    <BoardSearchBtn type="button">검색</BoardSearchBtn>
                </BoardSearchWrap>
            </BoardHeader>
            <BoardTable>
                <thead>
                    <tr>
                        <BoardTableTh>No</BoardTableTh>
                        <BoardTableTh>카테고리</BoardTableTh>
                        <BoardTableTh>제목</BoardTableTh>
                        <BoardTableTh>글쓴이</BoardTableTh>
                        <BoardTableTh>작성시간</BoardTableTh>
                        <BoardTableTh>조회수</BoardTableTh>
                        <BoardTableTh>좋아요</BoardTableTh>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <BoardTableTd>1</BoardTableTd>
                        <BoardTableTd>소설</BoardTableTd>
                        <BoardTableTd>10월 26일 자기계발 신간 리스트</BoardTableTd>
                        <BoardTableTd>관리자</BoardTableTd>
                        <BoardTableTd>40분전</BoardTableTd>
                        <BoardTableTd>1</BoardTableTd>
                        <BoardTableTd>2</BoardTableTd>
                    </tr>
                </tbody>
            </BoardTable>
        </div>
    );
}

export default BoardListComponent;
