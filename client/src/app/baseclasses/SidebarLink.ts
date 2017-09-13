
export class SidebarLink {
  public Title: string;
  public RouterURL: string;

  constructor(title: string, url: string) {
    this.Title = title;
    this.RouterURL = url;
  }
}
