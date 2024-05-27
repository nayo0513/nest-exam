import { User } from './users.model';

describe('Model', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
