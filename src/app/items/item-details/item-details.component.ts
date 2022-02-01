import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/service/item';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent {
  @Input() set item(item: Item) {
    if (item) this.originalTitle = item.name;

    this.currentItem = Object.assign({}, item)
  };
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  originalTitle: string;
  currentItem: Item;
}
