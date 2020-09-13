import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component'
import { LogonComponent } from './logon/logon.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openLogin() {
  	const dialogLogin = this.dialog.open(LoginComponent, {
	      maxHeight: '120%',
	      width: "200%"
	  });
  }

  openLogon() {
  	const dialogLogon = this.dialog.open(LogonComponent, {
	      maxHeight: '120%',
	      width: "200%"
	  });
  }

}
