import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  /*
  // the old values from the other file.
  <li>Jessica Watkins</li>
  <li>Raja Chari</li>
  <li>Jasmin Moghbeli</li>
  */

  memberBeingEdited: object = null;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  // How about a function to search the names
  inNames(name : string){
    //console.log(this.crew);
    //console.log(this.crew.map(function(x){return x["name"]}));
    // I really wanted to use a map here. Will have to explore that later
    //let names: string[] = this.crew.map(member => member["name"]);
    //return names.includes(name);

   for(let i = 0; i < this.crew.length; i++){
     if(this.crew[i]["name"] === name){
       return true;
     }
   }
   return false;
  }

  add(memberName: string, isFirst: boolean){
    let errorMsg = "";
    if(memberName === ""){
      errorMsg = "Please enter a name.";
    }
    else if(this.inNames(memberName)){
      errorMsg = `${memberName} is already part of the crew.`;
    }
    else {
      this.crew.push({
        name: memberName,
        firstMission: isFirst
      });
    }
    return errorMsg;
  }

  remove(member: object){
    let index = this.crew.indexOf(member);
    this.crew.splice(index,1);
  }

  edit(member: object){
    /*
    let errorMsg = "";
    //let memberName : string = member["name"];
    // Turns out, can't use dot, have to use brace notation.
    if(member["name"] === ""){
      errorMsg = "Please enter a name.";
      // TODO: What if blanking this could be another way to remove()?
    }
    else if(!this.inNames(member["name"])){
      this.memberBeingEdited = member;
    }  
    //else{}  // do nothing
    return errorMsg;
    */
   this.memberBeingEdited = member;
  }

  save(name: string, member: object){
    let errorMsg = "";
    if(name === ""){
      errorMsg = "Please enter a name.";
    }
    else if(this.inNames(name)){
      errorMsg = `${name} is already part of the crew.`;
    }
    else {
      member["name"] = name;
      this.memberBeingEdited = null;
    }
    return errorMsg;
  }

}
