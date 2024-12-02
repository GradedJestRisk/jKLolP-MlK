import type {IRoomRepository, Room} from "../service/room.type.js";
import * as sqlite3 from "sqlite3";
class RoomRepositorySqlite implements IRoomRepository {
    private db: sqlite3.Database
    constructor() {
        this.db = new sqlite3.Database("rooms.db")
    }
    async getAll(): Promise<Room[]> {

    }
}