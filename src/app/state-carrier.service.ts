import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateCarrierService {
  constructor() {}
  cache = {};

  clearCache() {
    this.cache = {};
  }
}
