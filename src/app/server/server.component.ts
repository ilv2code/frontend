import { Component } from "@angular/core";
//configuring the component
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
    servers = ['TestServer',' TestServer 2' ];
    serverName='';
    name='kavya';
    allowNew=false;
    serverCreationStatus="No Server was not created";
    serverCreated=false;
    constructor(){
       setTimeout(()=>{
           this.allowNew = true;
       },2000)
   }
   display(event){
       console.log(event.target.value)
   }
   onSubmit(data){
       console.log(data.value)
   }
   onCreateServer(){

       this.serverCreated=true;
       this.servers.push(this.serverName);
       this.serverCreationStatus="Server is Created!Name is"+this.serverName;
   }
   onUpdateServerName(event:Event){
       //as target is of input element we cannot simple write event.target.value
       //we can explicitly inform it as Html input element
     this.serverName = (<HTMLInputElement>event.target).value;
   }
}