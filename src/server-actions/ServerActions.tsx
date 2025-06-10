'use server';

import {sendCars} from "@/services/api.service";
import {revalidatePath} from "next/cache";
import {carsValidator} from "@/validator/carsValidator";

export const SaveAction = async (formData: FormData) => {
    const carBrand = formData.get("brand");
    const year = formData.get("year");
    const price = formData.get("price");

    if (
        typeof carBrand !== "string" ||
        typeof year !== "string" ||
        typeof price !== "string"
    ) {
        throw new Error("Incorrect data");
    }

    const parsedYear = parseInt(year, 10);
    const parsedPrice = parseInt(price);


    if (!carBrand.trim()) {
        throw new Error("The 'Brand' field is required");
    }


    const input = {
        brand: carBrand.trim(),
        year: Number(parsedYear),
        price: Number(parsedPrice),
    };


    const { error, value } = carsValidator.validate(input, { abortEarly: false });

    if (error) {
             throw new Error("Data entered incorrectly");

    }

    await sendCars(value.brand, value.year, value.price);

    revalidatePath("/create");

};










