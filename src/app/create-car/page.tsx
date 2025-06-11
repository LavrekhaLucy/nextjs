import {Metadata} from "next";
import FormComponent from "@/components/form-component/FormComponent";
import {CarsListComponent} from "@/components/create-cars/CarsListComponent";


export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Create cars page",

    }
}


export default async function CreatCarPage() {


    return (
        <div>
            <h4>Creat Car Page</h4>
            <FormComponent />
            <CarsListComponent/>
        </div>
    );
}
