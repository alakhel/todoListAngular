export class Todo {
  constructor(
    private id?: number,
    private title?: string,
    private content?: string,
    private state?: boolean,
    private bgColor?: string,
    private fontColor?: string
  ) {}
}
