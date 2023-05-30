import { withAuth } from "../../hocs/withAuth";
import { BoardFormComponent } from "../../components/board/BoardFormComponent";

export const post = withAuth(() => {
    return (
        <BoardFormComponent service="save" />
    );
});
