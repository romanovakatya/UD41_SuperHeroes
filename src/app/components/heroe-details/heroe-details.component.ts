import { Component, OnInit } from '@angular/core';
import {Heroe} from "../../models/heroe.model";
import {HeroeService} from "../../services/heroe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.component.html',
  styleUrls: ['./heroe-details.component.css']
})
export class HeroeDetailsComponent implements OnInit {

  currentHeroe: Heroe = {

    name: '',
    short_name: '',
    alt_name: '',
    role: '',
    new_role: '',
    type: '',
    release_date: '',
    rework_date: '',
    attribute_id: 0,
    translations: ['']
  };

  message = '';

  constructor(
    private heroeService: HeroeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getHeroe(this.route.snapshot.params.id);
  }

  getHeroe(id: string): void {
    this.heroeService.get(id)
      .subscribe(
        data => {
          this.currentHeroe = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }

  updateHeroe(): void {
    this.message = '';

    this.heroeService.update(this.currentHeroe.id, this.currentHeroe)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ?
            response.message : "This superheroe was updated successfully!";
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteHeroe(): void {
    this.heroeService.delete(this.currentHeroe.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/books']);
        },
        error => {
          console.log(error);
        }
      )
  }
}
