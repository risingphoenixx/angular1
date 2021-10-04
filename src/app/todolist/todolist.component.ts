import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
//@Input() myData:Array<Task>=[];
newTask: string = "";
  todoList:any = [{id:0,title:'a default item',done:false},{id:1,title:'a completed default item',done:true}];
  isListEmpty = false;
index=-1;
  constructor() { }

  ngOnInit(): void {
  }
  onAddTodoText() {
      console.log(this.todoList[0]);
      console.log(this.todoList[1]);
      if (this.newTask!=""){
        console.log("adding the todoText - ", this.newTask);
        let len=this.todoList.length;
        let todoObj = {id:len, title:this.newTask,done: false};

        this.todoList.push(todoObj);
        console.log("added");
        this.newTask = "";
        this.isListEmpty=false;
      }
    }

    onClearTodoText() {
      console.log("clearing the todoList - ", this.todoList);
      this.todoList=[];
      this.newTask="";
      this.isListEmpty=true;
    }

    onCompletingTask(){
     /* if (this.todoList[todoId].done){
        this.todoList[todoId].done = false;
        //this.todoList[todoId].buttonText = "Done";
      }else{
        this.todoList[todoId].done = true;
        //this.todoList[todoId].buttonText = "Undone";
      }
  }*/
   this.todoList=this.todoList.filter((item:any) => !item.done);
   if(this.todoList.length==0)
   this.isListEmpty=true;

}
toggleTodoComplete(i:number){
    this.todoList[i].done=!(this.todoList[i].done);
}
}
