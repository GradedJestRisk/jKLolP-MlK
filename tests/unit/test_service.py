import pytest

from deis_rolm.service import Service
from room_repository_stub import RoomRepositoryStub


def test_get_rooms():
    # Given
    room_repository_stub = RoomRepositoryStub(
        data = [{"number": 1, "price": 50, "floor": 1}]
    )
    role = "admin"
    service = Service(room_repository_stub)

    # When
    rooms = service.get_rooms(role)

    # Then
    assert len(rooms) == 1, "Expected exactly 1 room."
    assert {"number": 1, "price": 50, "floor": 1} in rooms

def test_role():
    service = Service(RoomRepositoryStub)

    # Given
    role = "not_admin"

    # When / Then
    with pytest.raises(Exception, match="Non admin can't access this ressource") as exc_info:
        rooms = service.get_rooms(role)
