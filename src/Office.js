class Office {
  constructor() {
    this._rooms = []
  }
  listRooms() {
    return this._rooms;
  }
  addRooms(room) {
    this.listRooms().push(room)
    console.log(this.listRooms())
  }
  availability() {
    return this._rooms.filter(room => room.roomStatus() === true)
  }
}