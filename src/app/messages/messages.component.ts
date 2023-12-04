import { Component } from '@angular/core';
import { MessageService } from '../messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  // Sử dụng dịch vụ
  constructor(public messageService: MessageService) { }
}
