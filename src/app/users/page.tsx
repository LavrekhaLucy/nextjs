import {Metadata} from "next";


export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "User page title",

    }
}
const UserPage = () => {
    return (
        <div>
          users page
        </div>
    );
};

export default UserPage;