import { MessageService } from '../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Message, MessageType } from './../models/message.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  display = 'none';
  messageError: boolean;
  message: Message;


  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.successOrErrorOccurred
      .subscribe(
        (message: Message) => {
          this.message = message;
          this.display = 'block';
          if (message.type === MessageType.message) {
            this.messageError = false;
          } else {
            this.messageError = true;
          }
        }
      );
  }

  onClickHandled() {
    this.display = 'none';
  }



}
