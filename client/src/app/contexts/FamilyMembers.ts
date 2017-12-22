export class FamilyMemberContext {
  public Id: string;
  public FirstName: string;
  public LastName: string;
  public Dob: Date;
  public Sex: string;

  constructor(data) {
    this.Id = data.id;
    this.FirstName = data.first_name;
    this.LastName = data.last_name;
    this.Dob = new Date(data.dob);
    this.Sex = data.sex;
  }

  public valid() {
    return !!this.Id;
  }
}
