import { useState } from "react";
import BoardListComponent from "../../components/BoardListComponent";
import { BoardTitle, BoardTab, BoardTabList } from "../../styles/board";

function List() {
    const [category, SetCategory] = useState("");

    return (
        <div>
            <BoardTitle>게시판</BoardTitle>
            <div>
                <BoardTab>
                    <BoardTabList>전체</BoardTabList>
                    <BoardTabList>문학</BoardTabList>
                    <BoardTabList>경제경영</BoardTabList>
                    <BoardTabList>자기계발</BoardTabList>
                    <BoardTabList>경영혁신</BoardTabList>
                    <BoardTabList>컴퓨터</BoardTabList>
                </BoardTab>
                <BoardListComponent category={category}/>
            </div>
        </div>
    );
}

export default List;
