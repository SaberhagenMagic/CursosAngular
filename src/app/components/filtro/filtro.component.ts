import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styles: ['']
})
export class FiltroComponent implements OnInit {

  heroes: Heroe[];

  cadFiltro: string;

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService ) {
    this.activatedRoute.params.subscribe( _params => {
      this.cadFiltro = _params['cad'];
      this.heroes = this._heroesService.serchHeroes(_params['cad']);
  });

  }

  ngOnInit() {
  }

}
