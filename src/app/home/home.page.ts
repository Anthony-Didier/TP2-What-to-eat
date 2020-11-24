import { Component } from "@angular/core";
import { MealdbApiService } from "../mealdb-api.service";
import { MEALDB_ListItem, MEALDB_Category } from "../model";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  meals: MEALDB_ListItem[];
  categories: "";

  constructor(private mealdb: MealdbApiService) {
    this.selectedCategory();
  }

  loadData(e: any) {
    let category = e.target.value;
    this.mealdb
      .getMealsByCategory(category)
      .subscribe((meals: MEALDB_ListItem[]) => {
        this.meals = meals;
      });
  }

  selectedCategory() {
    this.mealdb.getCategories().subscribe((categories) => {
      console.log(categories);
      this.categories = categories;
    });
  }
}
