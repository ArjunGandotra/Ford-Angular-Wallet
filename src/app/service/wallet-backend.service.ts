import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wallet } from '../model/wallet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WalletBackendService {

  constructor(private httpClient:HttpClient) { }

  addWallet(newWallet:Wallet):Observable<any>{
    let url:string = "";
    return this.httpClient.post(url,newWallet,{responseType:'json'});

  }

  getAllWallets():Observable<any>{
    return this.httpClient.get("");
  }

  deleteWallet(id?:number):Observable<any>{
    return this.httpClient.delete(""+id);

  }


}
