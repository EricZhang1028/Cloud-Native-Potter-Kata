import { isExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
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

  // buy one 'Episode 1'
  test('buyOneEps1', () => {
    expect(pb.buy(1)).toBe(100);
  });

  // buy one 'Episode 1' and one 'Episode 2'
  test('buyOneEps1AndOneEps2', () => {
    let p1: number = pb.buy(1);
    let p2: number = pb.buy(2);
    expect(p1+p2).toBe(190);
  })

});
