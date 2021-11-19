describe('MeetingRoom', function() {
  var meetingRoom;

  describe('listing all rooms', function() {
    it('lists rooms', function() {
      meetingRoom = new MeetingRooms();
      // meetingRooms.listRooms();
      expect(meetingRoom.listRooms(rooms)).toEqual(true);
    });
  });
});