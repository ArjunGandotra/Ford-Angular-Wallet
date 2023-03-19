import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wallet } from '../model/wallet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletBackendService {

  constructor(private httpClient:HttpClient) { }

  getWalletById(id:string|null):Observable<any>{
    return this.httpClient.get(""+id);
  }

  addWallet(newWallet:Wallet):Observable<any>{
    let url:string = "";
    return this.httpClient.post(url,newWallet,{responseType:'json'});

  }
  updateWallet(wallet:Wallet):Observable<any>{
    return this.httpClient.put("",wallet);
  }

  getAllWallets():Observable<any>{
    return this.httpClient.get("");
  }

  deleteWallet(id?:number):Observable<any>{
    return this.httpClient.delete(""+id);

  }

  addFunds(id?:number,balance?:number):Observable<any>{
    return this.httpClient.patch(""+id+"?balance="+balance,Wallet);
    
  }

  withdrawFunds(id?:number,balance?:number):Observable<any>{
    return this.httpClient.patch(""+id+"?balance="+balance,Wallet)
  }

  tranferFunds(fromId?:number,toId?:number, balance?:number):Observable<any>{
    return this.httpClient.patch(""+balance,Wallet);
  }


}