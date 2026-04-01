import { Component, OnInit, signal } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemService } from '../../services/item.service';


@Component({
  selector: 'app-list-items',
  imports: [],
  standalone: true,
  templateUrl: './list-items.html',
  styleUrl: './list-items.css',
})
export class ListItems implements OnInit{

  items = signal<Item[]> ([]);

  constructor(private itemService: ItemService) { }
  
  // pedimos datos al service y los guardamos en items
  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.items.set(data);
    });
  }
}
