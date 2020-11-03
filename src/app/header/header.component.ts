  import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer:Renderer2, private elem:ElementRef) { }

  target;
  header1 = 'header-1';

  ngOnInit(): void {
    this.target = document.querySelector('header');
    this.observer.observe(this.target);
  }

  options = {
      root: null,
      rootMargin: '0px',
      threshold: .5
  }
 
  observer = new IntersectionObserver( (entries) => {
    for(let entry of entries){
        if(!entry.isIntersecting){
            this.header1 += ' header-2';
        }
        else {
          this.header1 = 'header-1';
        }
    }
    
  }, this.options);
  
}