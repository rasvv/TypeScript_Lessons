declare module 'flat-rent-sdk' {
    export interface SearchParametrs {
        city: string,
        checkInDate: Date,
        checkOutDate: Date,
        priceLimit: number,
    }

    export interface FlatRentPlace {
        id: string,
        title: string,
        details: string,
        photos: string[],
        coordinates: [number, number],
        bookedDates: Date[],
        price: number,
        remoteness: number
    }

    export const database: FlatRentPlace[]

    export function cloneDate(date: Date): Date;

    export function addDays(date: Date, days: number): Date 

    export class FlatRentSdk {
        database: FlatRentPlace[]

        constructor();
        get(id: string): Promise<FlatRentPlace|null> 

        // return &&&????
        search(parameters: SearchParametrs): Object[] 
    
        book(flatId: number, checkInDate: Date, checkOutDate: Date): number 
    }
}