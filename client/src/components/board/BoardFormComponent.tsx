import { BoardPostFormTextarea, BoardPostFormBtnWrap } from "../../styles/board";

export const BoardFormComponent = () => {
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
            <BoardPostFormBtnWrap>
                <button className="mgRight" type="submit">저장</button>
                <button className="mgLeft" type="button">취소</button>
            </BoardPostFormBtnWrap>
        </form>
    );
}
