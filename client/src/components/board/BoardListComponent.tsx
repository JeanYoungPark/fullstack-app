import { useContext } from "react";
import { BoardTab, BoardTabList, BoardHeader, BoardSearchWrap, BoardSearch, BoardSearchBtn, BoardTable, BoardTableTh, BoardTableTd } from "../../styles/board";
import { BoardTabContext, BoardTabContextProps } from "../../contexts/BoardTabContext";

export const BoardListTabComponent = () => {
    const {activeTab, changeTab} = useContext<BoardTabContextProps>(BoardTabContext);

    return (
        <BoardTab>
            <BoardTabList className={activeTab === 'all' ? 'focus' : ''} onClick={() => changeTab('all')}>전체</BoardTabList>
            <BoardTabList className={activeTab === 'literature' ? 'focus' : ''} onClick={() => changeTab('literature')}>문학</BoardTabList>
            <BoardTabList className={activeTab === 'economic' ? 'focus' : ''} onClick={() => changeTab('economic')}>경제경영</BoardTabList>
            <BoardTabList className={activeTab === 'development' ? 'focus' : ''} onClick={() => changeTab('development')}>자기계발</BoardTabList>
            <BoardTabList className={activeTab === 'innovation' ? 'focus' : ''} onClick={() => changeTab('innovation')}>경영혁신</BoardTabList>
            <BoardTabList className={activeTab === 'computer' ? 'focus' : ''} onClick={() => changeTab('computer')}>컴퓨터</BoardTabList>
        </BoardTab>
    );
}

export const BoardListComponent = () => {
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
                        <BoardTableTd className='bold'>1</BoardTableTd>
                        <BoardTableTd>소설</BoardTableTd>
                        <BoardTableTd className='left bold'>10월 26일 자기계발 신간 리스트</BoardTableTd>
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