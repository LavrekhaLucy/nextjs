import {Metadata} from "next";


export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Create cars page title",

    }
}
const CreatePage = () => {
    return (
        <div>

           create  cars page
        </div>
    );
};

export default CreatePage;