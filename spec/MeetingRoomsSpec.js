describe('MeetingRooms', function() {
  let meetingRooms;

  describe('listing all rooms', function() {
    it('lists rooms', function() {
      meetingRooms = new MeetingRooms();
      expect(meetingRooms.listRooms()).toEqual(['Room1', 'Room2', 'Room3']);
    });
  });
});