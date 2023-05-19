import {BoardListTabComponent, BoardListComponent} from "../../components/board/BoardListComponent";
import {BoardTabProvider} from "../../contexts/BoardTabContext";
import { BoardTitle } from "../../styles/board";

function List() {
    

    return (
        <BoardTabProvider>
            <BoardTitle>게시판</BoardTitle>
            <div>
                <BoardListTabComponent/>
                <BoardListComponent/>
            </div>
        </BoardTabProvider>
    );
}

export default List;
