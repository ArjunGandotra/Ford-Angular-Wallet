import { Injectable, OnInit } from '@angular/core';
import { Wallet } from '../model/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService{

  wallet:Wallet[] = [];


  constructor() {
    this.wallet.push(new Wallet(1, "kaju", 100000));
    this.wallet.push(new Wallet(2, "arjun", 200000));
    this.wallet.push(new Wallet(3, "shruti", 300000));
    this.wallet.push(new Wallet(4, "soham", 400000));
    this.wallet.push(new Wallet(5, "priyal", 500000));

   }
  

  getAllWallets():Wallet[]{
    return this.wallet;
    console.log(this.wallet);

  }

  addWallet(newWallet:Wallet):void{
    this.wallet.push(newWallet);
  }

  updateWallet():void{
    console.log("Wallet Updated");
  }
}
