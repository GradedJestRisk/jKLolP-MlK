const getRooms = (role, repository) => {
    if (role === 'user') {
        return []
    }
    return repository.getRooms();
}

const updateRoomPrice = (basePrice, repository) => {
    repository.updateFloorPrice({ firstFloorPrice: 100, secondFloorPrice: 107 });
}

export {getRooms, updateRoomPrice};