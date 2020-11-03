import { compileNgModule } from '@angular/compiler';
import { Component, ElementRef, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  
  constructor(private elem:ElementRef) { }

  ngOnInit(): void {
    this.autoPlay;
  }

  slides = {
    showSlide1: true,
    showSlide2: false,
    showSlide3: false,
    showSlide4: false,
    showSlide5: false,
    showSlide6: false,
    showSlide7: false,
    showSlide8: false
  }

  public navigateSlide(parentNav, navIndex){
    let index = Array.from(parentNav.childNodes).indexOf(navIndex.target); // get index of navigation buttons from its parent's
    let currentNav = document.querySelector('.current-nav');

    this.pausePlay();

    currentNav.classList.remove('current-nav');
    navIndex.target.classList.add('current-nav');
    let key = Object.keys(this.slides);

    for(let i=0; i<key.length; i++){
      this.slides[key[i]] = false;
      if(key[i] === Object.keys(this.slides)[index]){
        this.slides[key[i]] = true;
      }
    }
  }

  public showNextSlide(){
    let slides = this.elem.nativeElement.querySelector('.slides').children;
    let navs = this.elem.nativeElement.querySelector('.nav-buttons').children;
    
    let currentElement, currentIndex;

    for(let i=0; i< this.elem.nativeElement.querySelector('.slides').childElementCount; i++){
      if(slides[i].classList.contains('current-slide')){
        currentElement = slides[i];
        currentIndex = i;
        break;
      }
    }
    
    if(currentElement.nextElementSibling){
      navs[currentIndex].classList.remove('current-nav')
      navs[currentIndex+1].classList.add('current-nav')
      for(let key in this.slides){
        this.slides[key] = false;
        if(key === Object.keys(this.slides)[currentIndex+1]){
          this.slides[key] = true;
        }
      }
    }
    else {
      for(let key in this.slides){
        this.slides[key] = false;
      }
      navs[currentIndex].classList.remove('current-nav')
      navs[0].classList.add('current-nav')
      this.slides.showSlide1 = true;
    }
  }

  public next(parentSlides, parentNav){
    // let currentSlide = document.querySelector('.current-slide')
    // let slides = parentSlides.children
    // let navs = parentNav.children;
    this.pausePlay();
    this.showNextSlide();
  }

  public prev(parentSlides, parentNav){
    let slides = parentSlides.childNodes
    let currentElement, currentIndex;
    let navs = parentNav.childNodes;

    this.pausePlay();

    for(let i=0; i<parentSlides.childElementCount; i++){
      if(slides[i].classList.contains('current-slide')){
        currentElement = slides[i];
        currentIndex = i;
        break;
      }
    }
    
    if(currentElement.previousElementSibling){
      for(let key in this.slides){
        navs[currentIndex].classList.remove('current-nav')
        navs[currentIndex-1].classList.add('current-nav')
        this.slides[key] = false;
        if(key === Object.keys(this.slides)[currentIndex-1]){
          this.slides[key] = true;
        }
      }
    }
  }

  autoPlay = setInterval( () => this.showNextSlide() , 4500); 

  public pausePlay(){
    clearInterval(this.autoPlay);
    this.autoPlay = setInterval( () => this.next('', '') , 4500); 
  }

  //emit value in sequence every 1 second
  // source = interval(1000);
  // subscribe = this.source.subscribe(val => {
  //   this.next('', '')
  // });

}
