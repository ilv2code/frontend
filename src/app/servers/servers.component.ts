import { Component } from "@angular/core";

@Component({
    selector:'app-servers',
    templateUrl:'./servers.component.html',
    styles:[`
    .online{
        color:white;
        
    }`]
})
export class ServersComponent{
    serverId:number=10;
    serverStatus:string='Offline';

    constructor(){
            this.serverStatus=Math.random()>0.5?'Online':'Offline';
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus==='Online' ? 'green':'red';
    }
}
