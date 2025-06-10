import {Metadata} from "next";
import CarsComponent from "@/components/cars/CarsComponent";



export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Cars page",

    }
}
const CarsPage = () => {
    return (
        <div>
            <h4>Cars page</h4>
            <CarsComponent/>

        </div>
    );
};

export default CarsPage;