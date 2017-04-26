import { Component, OnInit } from '@angular/core';


import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd,ActivatedRouteSnapshot} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  moduleName: string;

  constructor(location: Location,private router: Router) {
    // router.events.subscribe((val) => {
    //   if(location.path() != ''){
    //     this.moduleName = location.path();
    //   } else {
    //     this.moduleName = 'Home'
    //   }
    // });
  }
  
  private getDeepestTitle(routeSnapshot: ActivatedRouteSnapshot) {
    var title = routeSnapshot.data ? routeSnapshot.data['title'] : '';
    if (routeSnapshot.firstChild) {
      title = this.getDeepestTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.moduleName = this.getDeepestTitle(this.router.routerState.snapshot.root);
      }
    });
  }
}
