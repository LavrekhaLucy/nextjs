import {Metadata} from "next";



export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Cars page title",

    }
}
const CommentsPage = () => {
    return (
        <div>

            cars page
        </div>
    );
};

export default CommentsPage;