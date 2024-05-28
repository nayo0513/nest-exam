import { Books } from './books.model';

describe('Books', () => {
  it('should be defined', () => {
    expect(new Books()).toBeDefined();
  });
});
