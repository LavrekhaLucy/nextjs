import {ICar} from "@/models/ICar";

export const getAllCars = async ():Promise<ICar[]> => {
    return  await fetch('http://185.69.152.209/carsAPI/v1/cars')
        .then((response) => response.json())

}

export const sendCars = async (brand: string, year: number): Promise<ICar[]> => {
    const response = await fetch('http://185.69.152.209/carsAPI/v1/cars', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({brand, year}),
    });


    const result = await response.json();

    return result;
};