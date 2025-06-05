import {Metadata} from "next";
import {CommentsComponent} from "@/components/comments/CommentsComponent";


export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Comments page title",

    }
}
const CommentsPage = () => {
    return (
        <div>
            <CommentsComponent/>
          comments page
        </div>
    );
};

export default CommentsPage;