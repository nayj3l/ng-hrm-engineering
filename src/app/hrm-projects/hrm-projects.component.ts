import { ViewFlags } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import projects from './projects.json'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-hrm-projects',
  templateUrl: './hrm-projects.component.html',
  styleUrls: ['./hrm-projects.component.scss']
})
export class HrmProjectsComponent implements OnInit {

  projects = [];

  constructor(
    private router:Router,
    private routerActive:ActivatedRoute) {
   }

  ngOnInit(): void {
    for(let val of Object.values(projects)){
      val['url'] = val['Project-Name'].toLowerCase().replace(/[\W]+/g, '-');
      this.projects.push(val);
    }
  }

  // navigate(param){
  //   console.log(this.projects)
  //   this.router.navigate([param], {relativeTo: this.routerActive});
  // }

}
