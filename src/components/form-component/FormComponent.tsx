// 'use client'
//
// import {useForm} from "react-hook-form";
// import {joiResolver} from "@hookform/resolvers/joi";
// import CarsValidator from "@/validator/carsValidator";
// import "./FormComponent.css"
// import {useRouter} from "next/navigation";
//
//
// type FormData = {
//          brand: string;
//          year: number;
//          price: number;
//      };
//
//
//
//      export default function FormComponent() {
//
//          const router = useRouter();
//          const { register, handleSubmit, formState: { errors, isValid}, reset } = useForm<FormData>({
//              resolver: joiResolver(CarsValidator)
//
//          });
//
//          const customHandler = async (data: FormData) => {
//              console.log('Submitting data:', data); // Для діагностики
//              const res = await fetch("/api/create", {
//                  method: "POST",
//                  headers: {"Content-Type": "application/json"},
//                  body: JSON.stringify(data)
//
//              });
//              console.log('Response status:', res.status);
//
//              if (!res.ok) {
//                  console.error("Error creating cars: ");
//                  return;
//              }
//
//              reset({brand: '', year: 0, price: 0});
//              router.refresh();
//
//         }


'use client'

import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import CarsValidator from "@/validator/carsValidator";
import {useRouter} from "next/navigation";
import {useState} from "react";

type FormData = {
    brand: string;
    year: number;
    price: number;
};

export default function FormComponent() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);
    console.log(isSubmitting)
    console.log(submitMessage)

    const {
        register,
        handleSubmit,
        formState: { errors, isValid},
        reset,

    } = useForm<FormData>({
        resolver: joiResolver(CarsValidator),
        mode: 'onChange', // Валідація при зміні значень
        defaultValues: {
            brand: '',
            year: undefined,
            price: undefined
        }
    });

    const customHandler = async (data: FormData) => {
        console.log('Submitting data:', data);
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            const res = await fetch("/api/create", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            console.log('Response status:', res.status);

            if (!res.ok) {
                const errorData = await res.json();
                console.error("Error creating car:", errorData);
                setSubmitMessage(`Помилка: ${errorData.error || 'Невідома помилка'}`);
                return;
            }

            const result = await res.json();
            console.log('Success:', result);
            setSubmitMessage('Автомобіль успішно створено!');

            // Очищуємо форму після успішного збереження
            reset({
                brand: '',
                year: undefined,
                price: undefined
            });

            router.refresh();

        } catch (error) {
            console.error('Network error:', error);
            setSubmitMessage('Помилка мережі. Спробуйте ще раз.');
        } finally {
            setIsSubmitting(false);
        }
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



// 'use client'
//
// import {useForm} from "react-hook-form";
// import {joiResolver} from "@hookform/resolvers/joi";
// import CarsValidator from "@/validator/carsValidator";
//
// type FormData = {
//     brand: string;
//     year: number;
//     price: number;
// };
//
// type Car = FormData & { id: number };
//
// interface FormComponentProps {
//     onCarAdded: (car: Car) => void; // Callback для оновлення списку
// }
//
// export default function FormComponent({ onCarAdded }: FormComponentProps) {
//     const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<FormData>({
//         resolver: joiResolver(CarsValidator)
//     });
//
//     const customHandler = async (data: FormData) => {
//         try {
//             const res = await fetch("/api/create", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(data)
//             });
//
//             if (!res.ok) {
//                 console.error("Error creating car");
//                 return;
//             }
//
//             const newCar = await res.json(); // Отримуємо створений автомобіль
//             reset({ brand: '', year: 0, price: 0 });
//
//             // Передаємо новий автомобіль у батьківський компонент
//             onCarAdded(newCar);
//
//         } catch (error) {
//             console.error("Network error:", error);
//         }
//     };

//
// 'use client'
//
// import { useRouter } from 'next/navigation';
// import {reset} from "next/dist/lib/picocolors";
//
// export default function FormComponent() {
//     const router = useRouter();
//
//     const customHandler = async (data: FormData) => {
//         try {
//             const res = await fetch("/api/create", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(data)
//             });
//
//             if (!res.ok) {
//                 console.error("Error creating car");
//                 return;
//             }
//
//             reset({ brand: '', year: 0, price: 0 });
//
//             // Оновлюємо сторінку без повного перезавантаження
//             router.refresh();
//
//         } catch (error) {
//             console.error("Network error:", error);
//         }
//     };
//
//
// }


//
//     return (
//         <div className="max-w-md mx-auto p-6">
//             <form onSubmit={handleSubmit(customHandler)} className="space-y-4">
//                 {/* Ваші поля форми */}
//                 <label className="block text-sm font-medium text-gray-700">
//                     Brand
//                     <input
//                         type='text'
//                         {...register('brand')}
//                         placeholder='Brand'
//                         className="mt-1 w-full h-10 px-3 border border-gray-300 rounded-md"
//                     />
//                     <div className="h-5 mt-1">
//                         {errors.brand && <div className="text-red-500 text-xs">{errors.brand.message}</div>}
//                     </div>
//                 </label>
//
//                 <label className="block text-sm font-medium text-gray-700">
//                     Year
//                     <input
//                         type='number'
//                         {...register('year', { valueAsNumber: true })}
//                         placeholder='Year'
//                         className="mt-1 w-full h-10 px-3 border border-gray-300 rounded-md"
//                     />
//                     <div className="h-5 mt-1">
//                         {errors.year && <div className="text-red-500 text-xs">{errors.year.message}</div>}
//                     </div>
//                 </label>
//
//                 <label className="block text-sm font-medium text-gray-700">
//                     Price
//                     <input
//                         type='number'
//                         {...register('price', { valueAsNumber: true })}
//                         placeholder='Price'
//                         className="mt-1 w-full h-10 px-3 border border-gray-300 rounded-md"
//                     />
//                     <div className="h-5 mt-1">
//                         {errors.price && <div className="text-red-500 text-xs">{errors.price.message}</div>}
//                     </div>
//                 </label>
//
//                 <button
//                     type='submit'
//                     disabled={!isValid}
//                     className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
//                 >
//                     Save
//                 </button>
//             </form>
//         </div>
//     );
// }