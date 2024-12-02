export interface User{
    name: string;
    isAdmin: boolean
}
export interface IRoomRepository {
    getAll: ()=> Promise<Room[]>
}
type Price = number
export type Room ={
    number: number;
    floor: number;
    price: Price
}