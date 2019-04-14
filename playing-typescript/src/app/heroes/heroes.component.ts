import { Component, OnInit } from "@angular/core";
import { Hero } from "src/models/hero";
import { HeroService } from "../hero.service";
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css", "../app.component.css"]
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  heroes: Hero[];
  hero: Hero = {
    id: 1,
    name: "Meo Meo"
  };
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
