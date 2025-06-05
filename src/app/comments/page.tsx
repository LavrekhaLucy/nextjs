import {Metadata} from "next";


export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Comments page title",

    }
}
const CommentsPage = () => {
    return (
        <div>
          comments page
        </div>
    );
};

export default CommentsPage;