import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../service/item';
import { ItemsService } from '../service/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items$: Observable<Item[]> = this.service.getItems();

  constructor(private service: ItemsService) { }

  ngOnInit(): void {
  };

  create(item: Item): void {
    this.service.createItem(item);
  };

  update(item: Item): void {
    this.service.updateItem(item);
  };

  delete(item: Item): void {
    this.service.deleteItem(item);
  };
}
