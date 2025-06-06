import React from 'react';
import {getAllCars} from "@/services/api.service";
import {CarComponent} from "@/components/car/CarComponent";

const CarsComponent = async() => {
    const cars = await getAllCars();
    console.log(cars);
    return (
        <div>

        {
            cars.map(car => <CarComponent  key={car.id} car={car} />)
}

        </div>
    );
};

export default CarsComponent;