import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageservice: MessageService) { }

  getMessage()
  {
    return this.messageservice.messages;
  }
  reset()
  {
 this.messageservice.clear()

 this.messageservice.addMessage('Just cleared the message')
 console.log('Cleared all the messages')
  }
  ngOnInit(): void {
    this.messageservice.addMessage('Initiated employees');
    this.messageservice.addMessage('These are the employee details')
  }

}
