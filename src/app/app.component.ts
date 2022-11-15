import { Component, OnInit } from '@angular/core';
import { FoodService } from './services/food.service';
import { PersistanceService } from './services/persistance.service';
import {
  MachineProduct,
  MachineProductVote,
  RootObject,
} from './interfaces/food.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  foods: MachineProductVote[] = [];

  constructor(
    private foodService: FoodService,
    private persistanceService: PersistanceService
  ) {}

  checkNewProducts(existingProd: MachineProduct[], newProd: MachineProduct[]) {
    return existingProd.filter((product: MachineProduct) => {
      return !newProd.includes(product);
    });
  }

  filterFoodsOnly(products: MachineProduct[]): MachineProduct[] {
    return products.filter(
      (product: MachineProduct) =>
        product.subsidyTypes[0] !== 'SggSnack' &&
        product.subsidyTypes[0] !== 'SggDrink'
    );
  }

  resetVoting(): void {
    this.foods.map((product: MachineProductVote) => (product['vote'] = false));
    this.persistanceService.setLocal(this.foods);
  }

  handleDecision(data: { decision: boolean; index: number }): void {
    const { decision, index } = data;
    this.foods[index].vote = decision;
    this.persistanceService.setLocal(this.foods);
  }

  fetchPollFoods(): void {
    this.foodService.pollFoods(5000).subscribe((response: RootObject) => {
      if (!response) return;

      const { machineProducts } = response.data;

      if (this.foods.length > 0) {
        const freshProducts = this.filterFoodsOnly(machineProducts);

        const newProducts = [
          ...this.checkNewProducts(this.foods, freshProducts),
        ];

        if (newProducts.length === 0) return;

        this.foods = [...newProducts, ...this.foods];
        this.persistanceService.setLocal([...newProducts, ...this.foods]);

        return;
      }

      this.foods = this.filterFoodsOnly(machineProducts);
      if (this.persistanceService.getLocal().length === 0) {
        this.persistanceService.setLocal(this.foods);
      }
    });
  }

  ngOnInit() {
    this.fetchPollFoods();
  }
}
