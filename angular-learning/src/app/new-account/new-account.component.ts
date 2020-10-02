import { Component, EventEmitter, Output } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

  constructor(private messageService: MessageService) {
    this.messageService.statusUpdated.subscribe((status) =>
      alert('new status ' + status)
    )
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    console.log('A server status changed, new status: ' + accountStatus);
  }
}
