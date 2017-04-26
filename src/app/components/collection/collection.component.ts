import { Component, OnInit } from '@angular/core';

import { Colleactable } from '../../model/colleactable.model';
import { ColleactableService } from '../../services/colleactable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
 
  collections :Colleactable[] = [];
  constructor(private colleactableService:ColleactableService) {}

  removeFromCart(item:Colleactable){
    this.colleactableService.removeFromCollection(item);
  }

  ngOnInit() {
    this.collections = this.colleactableService.getCollection();
  }

 

}
