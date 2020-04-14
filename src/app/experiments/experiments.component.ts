import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  taskBeingEdited : object = null;

  tasks: object [] = [
    { name: "Mars soil sample" },
    { name: "Plant growth in habitat" },
    { name: "Human bone density" }
  ];

  constructor() { }

  ngOnInit() {
  }

  inTasks(name : string) {
    for(let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i]["name"] === name){
        return true;
      }
    }
    return false;
  }

  add(taskName : string ){
    let errorMsg = "";
    if(taskName === ""){
      errorMsg = "Please enter a task to do.";
    }
    else if(this.inTasks(taskName)){
      errorMsg = `${taskName} is already on the list.`;
    }
    else {
      this.tasks.push({name: taskName});
    }
    return errorMsg;
  }

  remove(task : object){
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index,1);
  }

  edit(task : object){
    this.taskBeingEdited = task;
  }

  save(name : string, task: object ){
    let errorMsg = "";
    if(name === ""){
      errorMsg = "Please enter a task to do.";
    }
    else if(this.inTasks(name)){
      errorMsg = `${name} is already on the list.`;
    }
    else{
      task["name"] = name;
      this.taskBeingEdited = null;
    }
    return errorMsg;
  }
}
