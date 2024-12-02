from .room_repository_interface import RoomRepositoryInterface
from .room_repository import RoomRepository


class Service:
    def __init__(self, room_repository_class: RoomRepositoryInterface = RoomRepository):
        self.room_repository = room_repository_class()

    def get_rooms(self, role: str):
        if role is "admin":
            return self.room_repository.get_rooms()
        else:
            raise Exception("Non admin can't access this ressource")
