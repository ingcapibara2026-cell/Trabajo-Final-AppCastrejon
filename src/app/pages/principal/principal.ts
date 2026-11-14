import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [RouterLink],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal implements AfterViewInit {
  @ViewChild('carrusel') carrusel!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const bootstrap = (window as any).bootstrap;
    if (bootstrap) {
      bootstrap.Carousel.getOrCreateInstance(this.carrusel.nativeElement, { ride: 'carousel' });
    }
  }
}
