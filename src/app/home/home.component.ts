import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private renderer:Renderer2, private elem:ElementRef) { }

  target;

  ngOnInit(): void {
    this.target = this.elem.nativeElement.querySelectorAll('section');
    for(let i=0; i<this.target.length; i++){
      for(let j=0; j<this.target[i].querySelectorAll('*').length; j++){
        if(this.target[i].querySelectorAll('*')[j].tagName !== "H3"){
          this.renderer.setStyle(this.target[i].getElementsByTagName("*")[j], 'opacity', '0');
          this.observer.observe(this.target[i].getElementsByTagName("*")[j]);
        }
      }
    }
  }

  ngAfterViewInit(): void {
  
  }

  options = {
    root: null,
    rootMargin: '0px',
    threshold: .05
  }

  observer = new IntersectionObserver( (entries, observer) => {
    entries.forEach( (entry, i) => {
      if(entry.isIntersecting){
        this.renderer.setStyle(entry.target, 'animation', 'keep .8s ease-out backwards .' + i*i + 's');
        this.renderer.setStyle(entry.target, 'opacity', '1');
      }
    })
  }, this.options)
 
}