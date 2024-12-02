import type {IRoomRepository, Room} from "../service/room.type.js";

export class RoomRepositoryInMemory implements IRoomRepository {
    private rooms: Room[] = []
    async getAll(): Promise<Room[]> {
        return this.rooms
    }

    async add(room: Room): Promise<void>{
        this.rooms.push(room)
    }
}