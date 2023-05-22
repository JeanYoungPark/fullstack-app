import { withAuth } from "../../hocs/withAuth";
import { BoardViewComponent } from "../../components/board/BoardViewComponent";

export const view = withAuth(() => {
    return (
        <BoardViewComponent />
    );
});