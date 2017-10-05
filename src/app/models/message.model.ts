export enum MessageType {
  error,
  message
}



export class Message {
  constructor(public type: MessageType, public title: string, public message: string ) {}
}
