import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor(private messageService: MessageService) {

  }
  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    console.log('A server status changed, new status: ' + status);
    this.messageService.statusUpdated.emit(status);

  }
}
