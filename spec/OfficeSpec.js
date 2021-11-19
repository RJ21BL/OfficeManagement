describe('Office', function() {
  var office;
  var room1;
  var room2;
  var room3;

  beforeEach(function() {
    office = new Office();
    room1 = new Room('Energise');
    room2 = new Room('Sleepy');
    room3 = new Room('Quiet');
  });
  
  it('has no meeting room in the office by default', function() {
    expect(office.listRooms()).toEqual([])
  });
});