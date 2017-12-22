export class MenuItem {
  constructor(
    public Title: string,
    public RouterURL: string,
    public BackgroundURL: string = "",
    public BackgroundBaseColor: string = "white",
    public TitleColor: string = "black"
  ) {
  }
}
