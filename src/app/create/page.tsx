import {Metadata} from "next";

import {CreateCarsComponent} from "@/components/create-cars/CreateCarsComponent";
import FormComponent from "@/components/form-component/FormComponent";


export const generateMetadata = async (): Promise<Metadata> => {

    return {
        title: "Create car page",

    }
}


export default async function CreatCarPage() {

      return (
        <div>
            <h4>Create Car Page</h4>
            <FormComponent/>
            <CreateCarsComponent/>
        </div>
    );
}

