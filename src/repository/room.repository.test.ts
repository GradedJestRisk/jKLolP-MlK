import {describe, expect, it} from "vitest";
import {RoomRepository} from "./room.repository.js";
import type {Room} from "../service/room.type.js";

describe("Room Repository | unit", () => {
    describe('getAll()', () => {
        it('should exist and return the existing list', async () => {
            const aRoom: Room = {
                number:1,
                floor: 0,
                price: 50
            }
            const roomRepo = new RoomRepository()
            await roomRepo.add(aRoom)

            expect(await roomRepo.getAll()).toEqual([aRoom])
        })
    });
})