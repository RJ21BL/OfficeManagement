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
}