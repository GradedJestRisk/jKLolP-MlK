import type {IRoomRepository, Room, User} from "./room.type.js";


export class RoomService{
    constructor(private readonly roomRepository: IRoomRepository){}

    async list(user: User): Promise<Room[]>{
        if(!user.isAdmin){
            throw new Error("User is not admin")
        }
        return this.roomRepository.getAll()
    }
}