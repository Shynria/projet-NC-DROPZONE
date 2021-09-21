import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vol-edition',
  templateUrl: './vol-edition.component.html',
  styleUrls: ['./vol-edition.component.css']
})
export class VolEditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sauts : any = [
    {
      hauteur: 1000,
      parachutistes: [
        {
          nom: "a",
          prenom: "b"
        },
        {
          nom: "Kasimir",
          prenom: "Hercule"
        },
        {
          nom: "Kasimir",
          prenom: "Hercule"
        },
        {
          nom: "Hercule",
          prenom: "Poirot"
        }
      ]
    },
    {
      hauteur: 10000,
      parachutistes: [
        {
          nom: "a",
          prenom: "b"
        },
        {
          nom: "Kasimir",
          prenom: "Hercule"
        }
      ]
    }
  ]
}
