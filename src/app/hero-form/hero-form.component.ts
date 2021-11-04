import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  powers = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer'
  ];

  model: Hero = new Hero(
    0, '', this.powers[0], ''
  );

  submitted = false;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params.id);

    if (id > 0) {
      // UPDATE
      this.heroService.getHero(id)
        .subscribe(hero => this.model = hero);
    } else {
      // INSERT
      this.model = new Hero(
        0, '', this.powers[0], ''
      );
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.submitted) {
      if(this.model.id > 0) {
        // UPDATE
        this.heroService.updateHero(this.model)
          .subscribe(_ => this.goBack());
      } else {
        // INSERT
        this.heroService.addHero(this.model)
          .subscribe(_ => this.goBack());
      }
    }
  }

  goBack(): void {
    this.location.back();
  }
}
