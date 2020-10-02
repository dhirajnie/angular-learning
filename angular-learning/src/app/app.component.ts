import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  indexMarkedForDeletion: Set<number> = new Set();

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

  onchange(event, index) {


    console.log('on change')
    if (event.target.checked) {
      this.indexMarkedForDeletion.add(index);
    }
    else {
      this.indexMarkedForDeletion.delete(index);
    }
    let array = Array.from(this.indexMarkedForDeletion);
    console.log("Size" + this.indexMarkedForDeletion.size)
    console.log(array.sort());

    console.log(this.indexMarkedForDeletion)
  }
}
