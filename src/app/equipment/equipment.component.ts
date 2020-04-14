import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  itemBeingEdited: object = null;

  items: object [] = [
    { name: "Habitable dome" },
    { name: "Drones" },
    { name: "Food Containers" },
    { name: "Oxygen tanks" }
  ];

  constructor() { }

  ngOnInit() {
  }

  inItems(name : string) {
    for(let i = 0; i < this.items.length; i++){
      if(this.items[i]["name"] === name){
        return true;
      }
    }
    return false;
  }

  add(itemName : string ){
    let errorMsg = "";
    if(itemName === ""){
      errorMsg = "Please enter an item.";
    }
    else if(this.inItems(itemName)){
      errorMsg = `${itemName} is already on the list.`;
    }
    else {
      this.items.push({name: itemName});
    }
    return errorMsg;
  }

  remove(item : object){
    let index = this.items.indexOf(item);
    this.items.splice(index,1);
  }

  edit(item : object){
    this.itemBeingEdited = item;
  }

  save(name : string, item: object ){
    let errorMsg = "";
    if(name === ""){
      errorMsg = "Please enter an item.";
    }
    else if(this.inItems(name)){
      errorMsg = `${name} is already on the list.`;
    }
    else{
      item["name"] = name;
      this.itemBeingEdited = null;
    }
    return errorMsg;
  }
}
