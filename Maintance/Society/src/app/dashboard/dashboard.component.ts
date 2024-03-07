import { Component, ComponentFactoryResolver, EventEmitter, Output, ViewContainerRef } from '@angular/core';
import { AccountComponent } from '../account/account/account.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // @Output() SideNavToggle = new EventEmitter();
  // isExpanded = true;
  // showSubmenu: boolean = false;
  // isShowing = false;
  // showSubSubMenu: boolean = false;
  showSubmenu: boolean = false;

  toggleSidenav(): void {
    this.showSubmenu = !this.showSubmenu;
  }

  onToggleClose(): void {
    // Implement the behavior to close the sidenav here if needed
  }


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  // openSidenav() {
  //   this.SideNavToggle.emit();
  // }

  // @Output() closeSideNav = new EventEmitter();


  // onToggleClose() {
  //   this.closeSideNav.emit();
  // }

  // ngOnInit() {
  // }

  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.isShowing = true;
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.isShowing = false;
  //   }
  // }
  loadComponent() {
    // Load 'YourComponent' dynamically within the <router-outlet>
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AccountComponent);
    this.viewContainerRef.clear();
    const componentRef = componentFactory.create(this.viewContainerRef.parentInjector);
    this.viewContainerRef.insert(componentRef.hostView);
  }

  
}


