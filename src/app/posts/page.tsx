import {Metadata} from "next";


export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Posts page title",

    }
}
const PostsPage = () => {
    return (
        <div>
          posts page
        </div>
    );
};

export default PostsPage;