import { BoardPostForm } from "../../styles/board";

export const BoardFormComponent = () => {
    return (
        <BoardPostForm>
            <form>
                <input type="text" placeholder="제목"/>
                <textarea placeholder="내용" />
                <button type="submit">저장</button>
            </form>
        </BoardPostForm>
    );
}
