import { useParams } from "react-router-dom";
import { BoardPostFormTextarea, BoardPostBtnWrap, BoardPostBtns } from "../../styles/board";

interface BoardFormComponentProps {
    service: string;
}

export const BoardFormComponent = (props: BoardFormComponentProps) => {
    const { service } = props;
    const { id } = useParams();
    console.log(props);
    const location = service === "save" ? '/board' : `/board/${id}`;

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
                <BoardPostBtns>저장</BoardPostBtns>
                <BoardPostBtns href={location}>취소</BoardPostBtns>
            </BoardPostBtnWrap>
        </form>
    );
}
  