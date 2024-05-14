import { Component } from '@angular/core';
import { ManagerService } from '../../services/manager/manager.service';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss'
})
export class ManagerComponent {

  constructor(private managerService: ManagerService) { }


  changeOccurrence() {
    this.managerService.reset().subscribe({
      next: (res) => {
        console.log(res);
        alert(res.msg)
      }
    })
  }



}
