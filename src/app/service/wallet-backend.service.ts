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
    return this.httpClient.get("http://localhost:8020/v1/wallet/"+id);
  }

  addWallet(newWallet:Wallet):Observable<any>{
    let url:string = "http://localhost:8020/v1/wallet/";
    return this.httpClient.post(url,newWallet,{responseType:'json'});

  }
  updateWallet(wallet:Wallet):Observable<any>{
    return this.httpClient.put("http://localhost:8020/v1/wallet/",wallet);
  }

  getAllWallets():Observable<any>{
    return this.httpClient.get("http://localhost:8020/v1/wallet/wallets");
  }

  deleteWallet(id?:number):Observable<any>{
    return this.httpClient.delete("http://localhost:8020/v1/wallet/"+id);

  }

  addFunds(id?:number,balance?:number):Observable<any>{
    return this.httpClient.patch("http://localhost:8020/v1/wallet/addFund/"+id+"?balance="+balance,Wallet);
    
  }

  withdrawFunds(id?:number,balance?:number):Observable<any>{
    return this.httpClient.patch("http://localhost:8020/v1/wallet/withdrawFund/"+id+"?balance="+balance,Wallet)
  }

  tranferFunds(fromId?:number,toId?:number, balance?:number):Observable<any>{
    return this.httpClient.patch("http://localhost:8020/v1/wallet/tranferFunds/{fromId}/{toId}?fromId="+fromId+"&toId="+toId+"&amount="+balance,Wallet);
  }


}
