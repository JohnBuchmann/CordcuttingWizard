import { EventEmitter } from '@angular/core';
import { Message } from './../models/message.model';

export class MessageService {
  successOrErrorOccurred = new EventEmitter<Message>();

  handleMessage(message: Message) {
    //const data = new Message(message.title, message.message);
    this.successOrErrorOccurred.emit(message);
  }
}
