import {Metadata} from "next";
import CarsComponent from "@/components/cars/CarsComponent";



export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Cars page title",

    }
}
const CommentsPage = () => {
    return (
        <div>
           <CarsComponent/>
            cars page
        </div>
    );
};

export default CommentsPage;