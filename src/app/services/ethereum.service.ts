import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TransactionService } from './transaction.service';
import { Transaction } from '../models/transaction.model';
import { ToastController } from '@ionic/angular';
import Web3 from 'web3';
import api from './../api';

@Injectable({
  providedIn: 'root'
})
export class EthereumService {
  mnemonic = 'helo helo helo helo helo helo helo helo helo helo ';
  address = '0x501938d5c17442c9a54b522021702101d9415d14';
  privateKey =
    'FB7DC2E493FD50D5B8ED13FDB4902954CC1CCD3D890669F81AE088CDB2043ACD';
  mnemonicWords: string[];

  public web3: Web3;

  constructor(
    private toastController: ToastController,
    private http: HttpClient,
    private auth: AuthService,
    private trans: TransactionService
  ) {
    this.web3 = new Web3(
      'https://ropsten.infura.io/v3/98a343f00e164c0d9548f968e1792a9c'
    );
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Transaction broadcasted!',
      duration: 3000
    });
    toast.present();
  }

  async send(amount, toAddress) {
    const fromAccount = this.auth.presentUser.wallets[0].address;
    const fromPrivateKey = this.auth.presentUser.wallets[0].privateKey;
    const toAccount = toAddress;

    const data = await new api().SEND(
      fromAccount,
      fromPrivateKey,
      toAccount,
      amount
    );

    console.log('POST Request is successful ', data);
    if (data == '') {
      document.getElementById('result').innerHTML =
        'Error: Please check funds or try again later';
    } else {
      document.getElementById('result').innerHTML = 'Hash: ' + data;
      this.presentToast();
      this.auth.presentUser.Transactions.push(
        new Transaction(
          this.auth.presentUser.Transactions.length,
          'Eth',
          this.auth.presentUser.wallets[0].address,
          toAddress,
          'https://lh4.googleusercontent.com/njmacjXG5DhDcvSpCy6xd584sMRXIwoFxXliEZitBH4OqvK4IT_Zfi6DOuUQcsZNBeURhMtJoBhpLiiTqq6HL3yWmV9Kbpeq0LNbtxLANgAoYfk8rzJMsBYrzSKfTxyQp5Fw499f',
          amount,
          data,
          ''
        )
      );
      this.auth.updateUser();
      console.log('after trans');
    }
    this.trans.update();
  }

  async sendToken(amount, toAddress, tokenAddress, name) {
    const fromAccount = this.auth.presentUser.wallets[0].address;
    const fromPrivateKey = this.auth.presentUser.wallets[0].privateKey;
    const toAccount = toAddress;

    const data = await new api().SEND(
      fromAccount,
      fromPrivateKey,
      toAccount,
      tokenAddress,
      amount
    );

    console.log('POST Request is successful ', data);
    if (data == '') {
      document.getElementById('result').innerHTML =
        'Error: Please check funds or try again later';
    } else {
      document.getElementById('result').innerHTML = 'Hash: ' + data;
      this.auth.presentUser.Transactions.push(
        new Transaction(
          this.auth.presentUser.Transactions.length,
          name,
          this.auth.presentUser.wallets[0].address,
          toAddress,
          'https://www.tokenfactory.com/Tokens.png',
          amount,
          data,
          ''
        )
      );
      this.auth.updateUser();
      console.log('after trans');
    }
    this.trans.update();
  }

  async balance(account) {
    return await new api().BALANCE_OF(account);
  }

  async balanceOf(fromAddress, tokenAddress) {
    return await new api().BALANCE_OF(fromAddress, tokenAddress);
  }

  async newaccount() {
    const account = await new api().NEW();
    this.address = account.address;
    this.mnemonic = account.mnemonic;
    this.privateKey = account.privateKey;
    this.mnemonicWords = this.mnemonic.split(' ');
  }
}
