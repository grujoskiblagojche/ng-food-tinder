import { Injectable } from '@angular/core';
import { MachineProductVote } from '../interfaces/food.interface';

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  constructor() {}

  public getLocal(): { id: string; vote: boolean }[] {
    return JSON.parse(localStorage.getItem('votes') as string) || [];
  }

  public setLocal(products: MachineProductVote[]): void {
    const votes = products.map((product: MachineProductVote) => {
      const votedObj = { id: product.id, vote: !!product.vote };
      return votedObj;
    });
    localStorage.setItem('votes', JSON.stringify(votes));
  }
}
