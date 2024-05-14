import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialog,
} from '@angular/material/dialog';
import Manager from '../../models/Manager';
import ManagerDartaSource from './ManagersDartaSource';
import { AdministratorService } from '../../services/administrator/administrator.service';



@Component({
  selector: 'app-managers',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatTableModule, MatIconButton, MatIcon, MatIconModule, MatMenuModule, FormsModule, ReactiveFormsModule],
  templateUrl: './managers.component.html',
  styleUrl: './managers.component.scss'
})

export class ManagersComponent implements OnInit {
  manager = new Manager("", 1, 1)

  constructor(public dialog: MatDialog, private managerService: AdministratorService) { }

  displayedColumns: string[] = ['id', 'name', 'occurrence', 'symbol'];


  emailFormControl = new FormControl('');

  dataSource = new ManagerDartaSource(this.managerService.managers());

  refreshInputs() {
    this.manager = new Manager("", 1, 1)
  }




  private fetchAllManagers(name?: string) {
    this.managerService.getAllManagers(name).subscribe({
      next: (res: Manager[]) => {
        this.managerService.managers.set(res);
        this.dataSource.setData(this.managerService.managers())
      },
      error: (err) => {
        console.log(err);

      }
    })
  }
  private reset(id: number) {
    this.managerService.resetManager(id).subscribe({
      next: (res: boolean) => {
        this.fetchAllManagers();
      },
      error: (err) => {
        console.log(err);

      }
    })
  }


  ngOnInit(): void {
    this.fetchAllManagers();
    this.emailFormControl.valueChanges.subscribe({
      next: (value) => {
        if (value) {
          console.log(value);
          this.fetchAllManagers(value);
        } else this.fetchAllManagers();
      }
    })
  }





  openDialog(id: number): void {
    this.reset(id)
  }









}


