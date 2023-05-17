import { BoardHeader, BoardSearch } from "../styles/board";

interface ChildProps {
    category: string;
  }
  
function BoardListComponent(props: ChildProps) {
    return (
        <div>
            <BoardHeader>
                <h2>신간 게시판</h2>
                <div>
                    <BoardSearch type="text" placeholder="Search" />
                    <button type="button">검색</button>
                </div>
            </BoardHeader>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>카테고리</th>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>작성시간</th>
                        <th>조회수</th>
                        <th>좋아요</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>소설</td>
                        <td>10월 26일 자기계발 신간 리스트</td>
                        <td>관리자</td>
                        <td>40분전</td>
                        <td>1</td>
                        <td>2</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BoardListComponent;
