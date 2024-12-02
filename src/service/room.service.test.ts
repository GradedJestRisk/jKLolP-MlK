import {beforeAll, describe, expect, it} from "vitest";
import type {IRoomRepository, User} from "./room.type.js";
import {RoomService} from "./room.service.js";

describe("Room Service | unit", () => {
    const adminUser: User = {
        name: "admin",
        isAdmin: true
    }
    const nonAdminUser: User = {
        name: "non-admin",
        isAdmin: false
    }
    describe("list()", () => {
        describe("When repository is empty", () => {
            it("should exist and return an empty list", async () => {
                const roomRepository: IRoomRepository = {
                    async getAll() {
                        return []
                    }
                }
                const roomService = new RoomService(roomRepository)
                expect(await roomService.list(adminUser)).toEqual([])
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
                expect(await roomService.list(adminUser)).toEqual(rooms)
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
                    expect(await roomService.list(adminUser)).toEqual(rooms)
                })
            })
            describe("User is not admin", () => {
                it("should throw an error", async () => {
                    const roomService = new RoomService(roomRepository)
                    await expect(roomService.list(nonAdminUser)).rejects.toThrow("User is not admin")
                })
            })
        })
    })


})