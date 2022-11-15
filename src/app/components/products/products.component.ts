import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersistanceService } from 'src/app/services/persistance.service';
import { MachineProductVote } from '../../interfaces/food.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  @Input() products?: MachineProductVote[];
  @Output() decisionEvent = new EventEmitter<{
    decision: boolean;
    index: number;
  }>();

  constructor(private persistanceService: PersistanceService) {}

  vote(decision: boolean, index: number): void {
    this.decisionEvent.emit({
      decision,
      index,
    });
  }

  checkVote(id: string): boolean {
    return !!this.persistanceService.getLocal().find((obj) => obj.id === id)
      ?.vote;
  }
}
