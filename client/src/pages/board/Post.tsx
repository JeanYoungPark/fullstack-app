import { withAuth } from "../../hocs/withAuth";

export const post = withAuth(() => {
    return <div>post</div>;
});
