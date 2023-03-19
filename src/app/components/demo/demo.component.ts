import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})

export class DemoComponent {
  title = 'my-app';
  date = new Date();
  carImage = "../assets/images/car.jpg";
  name = "Ford";
  password = "";
  isVisible:boolean = true;
  a:number = 10;
  b:number = 5;
  choice:number = 1;
  countries = ["india","usa","uk", "japan", "china"];
  fun(){
    console.log("Welcome User.");
  }

  display(){
    window.alert(this.name + ":" + this.password);
  }
  wallets:{id:number,owner:string, balance:number}[] =[
  {id:1, owner:"kaju",balance:2000},
  {id:2, owner:"rathore",balance:1000},
  {id:3, owner:"bing",balance:5000} ]

  wallet:Wallets={id:0, name: "", balance: 0}

  displayUserForm(){
    console.log("displayUserForm()");
    console.log(this.wallet);

  }

}
export interface Wallets{
  id?: number;
  name?:string;
  balance?:number;

}
