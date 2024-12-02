const getRooms = (role, repository) => {
    if (role === 'user') {
        return []
    }
    return repository.getRooms();
}

export {getRooms};