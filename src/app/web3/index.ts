import { InjectionToken } from '@angular/core';
import Web3 from 'web3';

export const WEB3 = new InjectionToken<Web3>('web3', {
  providedIn: 'root',
  factory: () => {
    try {
      return new Web3(
        'https://ropsten.infura.io/v3/98a343f00e164c0d9548f968e1792a9c'
      );
    } catch (err) {
      throw new Error(
        'Non-Ethereum browser detected. You should consider trying Mist or MetaMask!'
      );
    }
  }
});
