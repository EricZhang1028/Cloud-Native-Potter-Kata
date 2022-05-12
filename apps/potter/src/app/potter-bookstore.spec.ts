import { TestBed } from '@angular/core/testing';
import { PotterBookstore } from './potter-bookstore';

describe('PotterBookstore', () => {

  let pb: PotterBookstore;

  beforeEach(() => {
    pb = new PotterBookstore();
  });

  it('should create an instance', () => {
    expect(new PotterBookstore()).toBeTruthy();
  });

  test('buyOneBook', () => {
    expect(pb.buy(1)).toBe(100);
  });

});
