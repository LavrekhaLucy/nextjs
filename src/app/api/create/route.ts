// // import {sendCars} from "@/services/api.service";
// //
// // export async function POST(request: Request) {
// //     console.log('✅ API POST /api/create called'); // Для діагностики
// //
// //     const data = await request.json();
// //     console.log('Received data:', data);
// //
// //     const newCar = await sendCars(data.brand, data.year, data.price); // Передаємо окремо
// //     console.log('Created car:', newCar);
// //
// //     return Response.json(newCar);
// // }
//
// import { NextRequest, NextResponse } from 'next/server';
// import {sendCars} from "@/services/api.service";
//
// export async function POST(request: NextRequest) {
//     try {
//         const data = await request.json();
//
//         // Валідація даних
//         if (!data.brand || !data.year || !data.price) {
//             return NextResponse.json(
//                 { error: 'Всі поля обов\'язкові' },
//                 { status: 400 }
//             );
//         }
//
//         const newCar = await sendCars(data); // Передаємо окремо
//     console.log('Created car:', newCar);
//         // console.log('Отримані дані:', data);
//
//         // Приклад збереження (замініть на вашу логіку)
//         // const newCar = await saveCar(data);
//
//         return NextResponse.json(
//             {
//                 message: 'Автомобіль створено успішно',
//                 data: data
//             },
//             { status: 201 }
//         );
//
//     } catch (error) {
//         console.error('Помилка створення автомобіля:', error);
//         return NextResponse.json(
//             { error: 'Внутрішня помилка сервера' },
//             { status: 500 }
//         );
//     }
// }