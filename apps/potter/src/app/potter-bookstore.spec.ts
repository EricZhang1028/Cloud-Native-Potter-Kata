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
    pb.buy(0, 1);
    expect(pb.price).toBe(100);
  });

  // buy one 'Episode 1' and one 'Episode 2'
  test('buyOneEps1AndOneEps2', () => {
    pb.buy(0, 1);
    pb.buy(1, 1);
    expect(pb.price).toBe(190);
  })

  // buy one 'Episode 1' and two 'Episode 2'
  test('buyOneEps1AndOneEps2', () => {
    pb.buy(0, 1);
    pb.buy(1, 2);
    expect(pb.price).toBe(290);
  })

});
