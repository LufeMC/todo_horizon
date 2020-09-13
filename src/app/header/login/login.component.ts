import { Component, OnInit } from '@angular/core';
import { User } from '../../users'
import { MatDialogRef } from "@angular/material/dialog";
import { UserService } from '../../service/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  users: Array<any>;

  constructor(public loginDialog: MatDialogRef<LoginComponent>,
  	private userService: UserService) {
  	this.users = new Array<any>();
  }

  ngOnInit(): void {
  }

  entrar() {
  	this.userService.getAllUsers().subscribe((data) => {
  		console.log(data);
  		this.users = data;
  	})

    console.log(this.email);
    console.log(this.password);

  	for (let user of this.users) {
  		if (user.email === this.email && user.password === this.password) {
        console.log(user);
  			this.userService.updateUser(this.email);
        this.loginDialog.close({event:"close"});
        window.alert("Você está dentro!");
  		}
  	}

  	window.alert("Email ou senha incorreta");
  }

}
