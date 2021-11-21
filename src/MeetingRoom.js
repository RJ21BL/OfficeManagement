class MeetingRoom {
  constructor() {
    this.available = true;
  }
  roomStatus() {
    return this.available;
  }
  enterRoom() {
    if(this.roomStatus() === false) {
      throw new Error('Occupied');
    };
    this.available = false;
  }
}