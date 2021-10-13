import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

const leftBarMenu = [
  { title: 'Dashboard', fragment: '/' },
  { title: 'Profile', fragment: '/profile' }
];
const rightBarMenu = [
  { title: 'Register', fragment: '/register' },
];

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(
    public route: Router
  ) { }

  public dropdownMenuVisible = false;
  public userImage: string;
  public isMenuCollapsed = true;
  public leftBarMenu = leftBarMenu;
  public rightBarMenu = rightBarMenu;

  ngOnInit(): void {
    this.userImage = 'assets/yoba.png';
  }
}
