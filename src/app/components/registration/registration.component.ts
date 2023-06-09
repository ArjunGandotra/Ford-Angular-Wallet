import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/model/wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  wallet:Wallet = new Wallet();
  datePipe: any;
  msg: any;
  errormsg:any;
  constructor(private walletservice:WalletService, private walletBackendService:WalletBackendService) {}

  submitForm(){

    this.walletservice.addWallet(this.wallet);
    console.log(this.wallet);

    let wltPost: Observable<any> = this.walletBackendService.addWallet(this.wallet);
    wltPost.subscribe(
      {
        next:(data) =>{
          
          this.wallet = data;
          console.log(data);
        },

        error:(error) =>{
          console.log(error.error);
          this.msg= "";
          this.errormsg= JSON.stringify(error.error);
        },
        complete:() =>{
          this.msg = "Wallet Created Successfully";
          this.errormsg = "";
          console.log("Request Completed...");
        }
      }
    )
    

  }


  
}