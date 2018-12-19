//this referes to the core component of angular framework
import { Component } from '@angular/core';
//decorater to configure the component
@Component({
    //to use this particular component
    //selector is unique
    selector:'app-header',
    //navigating to html component
    templateUrl:'./header.component.html'
})
//every component is a class in angular
export class HeaderComponent {
    title="The Header!";
    // number=500;
    // bool=true;
    
    // message(){
    //     return 'Hello GOod Day!'
    // }
// constructor is methods executer 
    constructor(){

    }
    disp(event){
      console.log(event.target.value)
    }
    onClick(data){
        console.log(data.value)
    }
     
}