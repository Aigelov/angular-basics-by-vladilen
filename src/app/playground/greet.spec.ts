import {greet} from './greet';

describe('greet', () => {
  it(
    'should include name in return message',
    () => {
      const result = greet('Angular');
      expect(result).toContain('Angular');
    }
  );
});
