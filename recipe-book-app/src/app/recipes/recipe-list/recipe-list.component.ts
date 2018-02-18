import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test recipe', 'https://2.bp.blogspot.com/--RGaiiyvRlY/VYMrMRcfcdI/AAAAAAAAR9I/i0ygYffttvg/s1600/Recipe.gif'),
    new Recipe('Test Recipe', 'This is a test recipe', 'https://2.bp.blogspot.com/--RGaiiyvRlY/VYMrMRcfcdI/AAAAAAAAR9I/i0ygYffttvg/s1600/Recipe.gif')
  ];
  constructor() { }

  ngOnInit() {
  }

}
