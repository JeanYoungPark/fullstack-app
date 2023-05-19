import { withAuth } from "../../hocs/withAuth";

export const view = withAuth(() => {
    return <div>view</div>;
});