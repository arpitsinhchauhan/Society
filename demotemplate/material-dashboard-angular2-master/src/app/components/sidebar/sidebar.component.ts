import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Maintanance',  icon:'payment', class: '' },
    { path: '/table-list', title: 'User',  icon:'person', class: '' },
    { path: '/typography', title: 'Payment',  icon:'print', class: '' },
    { path: '/icons', title: 'Events',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Vehicle_details',  icon:'motorcycle', class: '' },
    { path: '/notifications', title: 'Rules',  icon:'notifications_active', class: '' },
    { path: '/upgrade', title: 'Feedback',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
