import { BoardPostForm } from "../../styles/board";

export const BoardFormComponent = () => {
    return (
        <BoardPostForm>
            <form>
                <input type="text" placeholder="제목" />
                <textarea placeholder="내용" />
                <input type="file" />
                <button type="submit">저장</button>
                <button type="button">취소</button>
            </form>
        </BoardPostForm>
    );
}
