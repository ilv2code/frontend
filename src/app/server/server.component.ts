import { Component } from "@angular/core";
//configuring the component
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
    allowNew=false;
    constructor(){
       setTimeout(()=>{
           this.allowNew = true;
       },2000)
   }
}