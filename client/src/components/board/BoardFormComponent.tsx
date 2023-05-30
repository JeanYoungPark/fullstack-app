import { BoardPostFormTextarea, BoardPostBtnWrap, BoardPostBtns } from "../../styles/board";

interface BoardFormComponentProps {
    service: string;
}

export const BoardFormComponent = (props: BoardFormComponentProps) => {
    return (
        <form>
            <div>
                <label>제목</label>
                <input type="text" placeholder="제목" />
            </div>
            <div>
                <label>내용</label>
                <BoardPostFormTextarea placeholder="내용" />
            </div>
            <div>
                <input type="file" />
            </div>
            <BoardPostBtnWrap>
                <BoardPostBtns className="mgRight" type="submit">저장</BoardPostBtns>
                <BoardPostBtns className="mgLeft" type="button">취소</BoardPostBtns>
            </BoardPostBtnWrap>
        </form>
    );
}
  