import { Component, OnInit } from '@angular/core';
import { User } from '../../users'
import { MatDialogRef } from "@angular/material/dialog";
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  email:string = "";
  password:string = "";
  users: Array<any>;

  constructor(public logonDialog: MatDialogRef<LogonComponent>,
  	private userService: UserService) {
  	this.users = new Array<any>();
  }

  ngOnInit(): void {
  }

  cadastrar() {
  	this.userService.getAllUsers().subscribe((data) => {
  		console.log(data);
  		this.users = data;
  	})

  	for (let user of this.users) {
  		if (user.email === this.email) {
  			window.alert("Email já cadastrado");
        this.email = "";
  		} else if (user.password === this.password) {
  			window.alert("Senha já cadastrada");
        this.password = "";
  		}
  	}

    if (this.email !== "" && this.password !== "" && this.email[0] !== " " && this.password[0] !== " " && this.password.length >= 5) {
      this.userService.addUser(new User(this.email, this.password)).subscribe((data) => {
        console.log(data);
        window.alert("Cadastrado com sucesso. Agora, entre em sua conta.");
        this.logonDialog.close({event:"close"});
      })
    } else if (this.email === "" || this.password === "" || this.email[0] === " " || this.password[0] === " ") {
      window.alert("Email ou senha invalidos.");
    } else if (this.password.length < 5) {
      window.alert("A senha deve ter pelo menos 5 caracteres.");
    }

  	console.log("ACCOUNT CREATED");
  }

}
