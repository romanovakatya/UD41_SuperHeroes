import { Component, OnInit } from '@angular/core';
import {Heroe} from "../../models/heroe.model";
import {HeroeService} from "../../services/heroe.service";

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
  styleUrls: ['./add-heroe.component.css']
})
export class AddHeroeComponent implements OnInit {

  heroe: Heroe = {

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

  submitted = false;

  constructor(private heroeService: HeroeService) { }

  ngOnInit(): void {
  }

  saveHeroe(): void{
    const data = {
      name: this.heroe.name,
      short_name: this.heroe.short_name,
      alt_name: this.heroe.alt_name,
      role: this.heroe.role,
      new_role: this.heroe.new_role,
      type: this.heroe.type,
      release_date: this.heroe.release_date,
      rework_date: this.heroe.rework_date,
      attribute_id: this.heroe.attribute_id,
      translations: this.heroe.translations

    };

    this.heroeService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  newHeroe(): void{
    this.submitted = false;
    this.heroe = {
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
    }
  }
}
