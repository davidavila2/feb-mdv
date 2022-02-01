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
  items$: Observable<Item[]>
  selected: Item;

  constructor(private service: ItemsService) { }

  ngOnInit(): void {
    this.getItems();
  };

  getItems(): void {
    this.items$ = this.service.getItems();
  }

  select(item: Item): void {
    this.selected = item;
  }

  create(item: Item): void {
    this.service.createItem(item).subscribe(() => {
      this.getItems();
      this.select({} as Item);
    });
  };

  update(item: Item): void {
    this.service.updateItem(item).subscribe(() => {
      this.getItems();
      this.select({} as Item);
    });
  };

  delete(item: Item): void {
    this.service.deleteItem(item).subscribe(() => {
      this.getItems();
      this.select({} as Item);
    });
  };

  save(item: Item): void {
    item.id ? this.update(item) : this.create(item);
  }

  cancel(): void {
    this.selected = {} as Item;
  }
}
