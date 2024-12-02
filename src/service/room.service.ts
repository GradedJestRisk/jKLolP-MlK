type Price = number
type Room ={
    number: number;
    floor: number;
    price: Price
}

export interface IRoomRepository {
    getAll: ()=> Promise<Room[]>
}
export class RoomService{
    constructor(private readonly roomRepository: IRoomRepository){}

    list(): Promise<Room[]>{
        return this.roomRepository.getAll()
    }
}