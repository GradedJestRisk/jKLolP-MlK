from deis_rolm.room_repository_interface import RoomRepositoryInterface


class RoomRepositoryStub(RoomRepositoryInterface):
    def get_rooms(self):
        return [{"number": 1, "price": 50, "floor": 1}]
