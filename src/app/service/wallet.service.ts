import { Injectable, OnInit } from '@angular/core';
import { Wallet } from '../model/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService{

  wallet:Wallet[] = [];

  constructor() {
    this.wallet.push(new Wallet(1, "kaju", 10000));
    this.wallet.push(new Wallet(2, "arjun", 20000));
    this.wallet.push(new Wallet(3, "shruti", 30000));
    this.wallet.push(new Wallet(4, "soham", 40000));
    this.wallet.push(new Wallet(5, "priyal", 50000));

   }
  

  getAllWallets():Wallet[]{
    return this.wallet;
    console.log(this.wallet);

  }

  addWallet(newWallet:Wallet):void{
    this.wallet.push(newWallet);
  }
}

