import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(public projectService:ProjectService
    , private router:Router
    , private activatedRoute:ActivatedRoute) { }

  currentProject;
  projectList;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( params => {
      this.currentProject = params.get('id');
      this.updateUI();
    });
  }

  public updateUI(){
    this.projectService.getProjectList().subscribe(datum => {
      for(let [i, data] of Object.entries(datum)){
        if(this.currentProject === data.url){ // if yung url ay nasa list ng projects, print natin yung project list
          this.projectList = data['Project-List'];
          console.log(this.projectList)
        }
      }
    });
  }


}