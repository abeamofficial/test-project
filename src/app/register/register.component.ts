import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  nameTitle: any = 0;
  firstName: any;
  lastName: any;
  birthDate: any;
  pid: any;

  tel: any;
  email: any;

  address: any;

  gpax: any;
  school: any;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  submitForm() {
    let data = {
      nameTitle: this.nameTitle,
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      pid: this.pid,

      tel: this.tel,
      email: this.email,

      address: this.address,

      gpax: this.gpax,
      school: this.school,
    };

    this.dataService.submitRegiter(data).then((result) => {
      if (result) {
        this.router.navigate(['home']);
      } else {
        alert('กรุณากรอกข้อมูลให้ถูกต้อง');
      }
    });
  }
}
