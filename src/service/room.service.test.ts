import {beforeAll, describe, expect, it} from "vitest";
import {type IRoomRepository, RoomService} from "./room.service.js";

describe("Room Service | unit", () => {

    describe("list()", () => {
        describe("When repository is empty", () => {
            it("should exist and return an empty list", async () => {
                const roomRepository: IRoomRepository = {
                    async getAll() {
                        return []
                    }
                }
                const roomService = new RoomService(roomRepository)
                expect(await roomService.list()).toEqual([])
            })
        })
        describe("When repository is not empty", () => {
            it("should exist and return a list", async () => {
                const rooms = [{
                    number: 1,
                    floor: 0,
                    price: 50
                }]
                const roomRepository: IRoomRepository = {
                    async getAll() {
                        return rooms
                    }
                }
                const roomService = new RoomService(roomRepository)
                expect(await roomService.list()).toEqual(rooms)
            })
        })

        describe("List is displayed according to user profile", () => {
            const rooms = [{
                number: 1,
                floor: 0,
                price: 50
            }]
            let roomRepository: IRoomRepository
            beforeAll(()=>{
                 roomRepository = {
                    async getAll() {
                        return rooms
                    }
                }
            })
            describe("User is admin", () => {
                it("should return an existing list", async () => {
                    const roomService = new RoomService(roomRepository)
                    expect(await roomService.list()).toEqual(rooms)
                })
            })
            describe("User is not admin", () => {
                it("should throw an error", async () => {
                    const roomService = new RoomService(roomRepository)
                    expect(roomService.list()).rejects.toThrow(Error)
                })
            })
        })
    })


})