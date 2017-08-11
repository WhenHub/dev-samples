class When {
  constructor(
    public startDate: Date,
    public endDate: Date){}
}

export class Event {
  constructor(public name: string,  public id: string, public scheduleId: string,  public description: string,  public startDate: string, public media: Array<Event>, public when: When) { }
}
