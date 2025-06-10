import {getAllCars} from "@/services/api.service";
import {CreateCarComponent} from "@/components/create-car/CreateCarComponent";
import React from "react";

export const CreateCarsComponent = async () => {
    const carsArray = await getAllCars();


    return (
        <div>
            {
                carsArray.map(car => <CreateCarComponent key={car.id} car={car} />)
            }
        </div>
    );
};