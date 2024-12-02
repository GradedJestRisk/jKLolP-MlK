from .room_repository_interface import RoomRepositoryInterface


class Service:
    def __init__(self, room_repository: RoomRepositoryInterface):
        self.room_repository = room_repository

    def get_rooms(self, role: str):
        if role is "admin":
            return self.room_repository.get_rooms()
        else:
            raise Exception("Non admin can't access this ressource")
