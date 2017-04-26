import { Colleactable } from '../model/colleactable.model';

export class ColleactableService{
    private colleactables: Colleactable[] =[
      {description:'my first book',type:"book"},
      {description:'my Photo',type:"photo"},
      {description:'best brand shirt',type:"clothes"},
      {description:'best brand pant',type:"clothes"},
  ];
  private collection:Colleactable[] =[];

  getColleactables(){
      return this.colleactables;
  }

  getCollection(){
      return this.collection;
  }

  addToCollection(item:Colleactable ){
     if(this.collection.indexOf(item) !==-1){
         return;
     }
     this.collection.push(item);
  }

  removeFromCollection(item:Colleactable ){
     this.collection.splice(this.collection.indexOf(item),1);
  }

}