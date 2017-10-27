import { MessageService } from '../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Message, MessageType } from './../models/message.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  display = 'none';
  messageError: boolean;
  message: Message;


  constructor(private messageService: MessageService,
              private router: Router) { }

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
    this.router.navigate(['/'])
  }



}
