from deis_rolm.room_repository_interface import RoomRepositoryInterface


class RoomRepositoryStub(RoomRepositoryInterface):

    def __init__(self, data: dict):
        self.data = data

    def get_rooms(self):
        return self.data
