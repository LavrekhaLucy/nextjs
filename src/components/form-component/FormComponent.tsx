'use client'
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import './FormComponent.css'
import {carsValidator} from "@/validator/carsValidator";
import {useEffect, useState} from "react";
import {ICar} from "@/models/ICar";
import {getAllCars} from "@/services/api.service";


type FormData = {
         brand: string;
         year: number;
         price: number;
     };
     export default function FormComponent() {

         const {register, handleSubmit, formState: {errors, isValid}, reset} = useForm<FormData>({
             resolver: joiResolver(carsValidator)

         });

         const [cars, setCars] = useState<ICar[]>([]);
         const loadCars = async () => {
             const data = await getAllCars();
             setCars(data);
         };

         useEffect(() => {
             loadCars();
         }, []);

         console.log(cars)

         const customHandler = async (data: FormData) => {

             const res = await fetch('/api/create', {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify(data)
             });

             if (!res.ok) {
                 const errorData = await res.json();
                 console.log(errorData.error.join(', '));
                 return;
             }

             reset({ brand: '', year:0, price: 0 });

             const updatedCars = await getAllCars();
             setCars(updatedCars);
         };


                     return (
                 <div>
                     <form onSubmit={handleSubmit(customHandler)}>
                         <label className=" block text-sm font-medium text-gray-700 mb-1">
                             <input type='text' {...register('brand')} placeholder='Brand'/>
                             {errors.brand && <div>{errors.brand.message}</div>}
                         </label>


                         <label className=" block text-sm font-medium text-gray-700 mb-1">
                             <input type='number' {...register('year')} placeholder='Year'/>
                             {errors.year && <div>{errors.year.message}</div>}
                         </label>


                         <label className=" block text-sm font-medium text-gray-700 mb-1">
                             <input type='number' {...register('price')} placeholder='Price'/>
                             {errors.price && <div>{errors.price.message}</div>}
                         </label>


                         <button type='submit' disabled={!isValid}>Save</button>

                     </form>


                 </div>
             );
         };



