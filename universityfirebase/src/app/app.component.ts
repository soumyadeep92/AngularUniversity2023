import { Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, onValue } from 'firebase/database';
import { environment } from '../environments/environment';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
interface Item {
  text: string
};

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li *ngFor="let item of item$ | async">
      {{ item.text }}
    </li>
  </ul>
  `
})

export class AppComponent {
  title = 'universityfirebase';
  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'abcd1234');
    this.item$ = collectionData(itemCollection) as Observable<Item[]>;
    this.item$.subscribe(console.log)
  }
}
