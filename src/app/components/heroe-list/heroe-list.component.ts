import {Component, OnInit} from '@angular/core';
import {Heroe} from "../../models/heroe.model";
import {HeroeService} from "../../services/heroe.service";

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.css']
})
export class HeroeListComponent implements OnInit {

  heroes?: Heroe[];
  currentHeroe: Heroe = {};
  currentIndex = -1;
  name = '';

  constructor(private heroeService: HeroeService) {
  }

  ngOnInit(): void {
    this.retrieveHeroes();
  }

  retrieveHeroes(): void {
    this.heroeService.getAll()
      .subscribe(
        data => {
          this.heroes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  refreshList(): void {
    this.retrieveHeroes();
    this.currentHeroe = {};
    this.currentIndex = -1;
  }

  setActiveHeroe(heroe: Heroe, index: number): void {
    this.currentHeroe = heroe;
    this.currentIndex = index;
  }

  removeAllHeroes(): void {
    this.heroeService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        }
      );
  }

  searchName(): void {
    this.currentHeroe = {};
    this.currentIndex = -1;

    this.heroeService.findByName(this.name)
      .subscribe(
        data => {
          this.heroes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
