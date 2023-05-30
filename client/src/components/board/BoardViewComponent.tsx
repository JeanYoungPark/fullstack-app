import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BoardPostBtns, BoardPostBtnWrap } from "../../styles/board";

export const BoardViewComponent = () => {
    const { id } = useParams();

    useEffect(() => {
        axios.get(
            `http://localhost:5000/board/${id}`
        ).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <div>
            <h2>게시판 ID: {id}</h2>
            <p>내용</p>
            <BoardPostBtnWrap>
                <BoardPostBtns>삭제</BoardPostBtns>
                <BoardPostBtns href={`/board/modify/${id}`}>수정</BoardPostBtns>
            </BoardPostBtnWrap>
        </div>
    )
}
