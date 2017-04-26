import { Component, OnInit } from '@angular/core';
import { Colleactable } from '../../model/colleactable.model';
import { ColleactableService } from '../../services/colleactable.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {
  colleactables: Colleactable[] =[];
  constructor(private colleactableService:ColleactableService) {}

  ngOnInit() {
    this.colleactables = this.colleactableService.getColleactables();
  }

  AddToCard(item:Colleactable){
    this.colleactableService.addToCollection(item);
  }

}
