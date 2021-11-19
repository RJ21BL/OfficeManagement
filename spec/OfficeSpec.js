describe('Office', function() {
  // var office;
  // var room1;
  // var room2;
  // var room3;

  beforeEach(function() {
    office = new Office();
    room1 = new MeetingRoom('Energise');
    room2 = new MeetingRoom('Sleepy');
    room3 = new MeetingRoom('Quiet');
  });
  
  it('has no meeting room in the office by default', function() {
    expect(office.listRooms()).toEqual([]);
  });
});
