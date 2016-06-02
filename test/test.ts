import test = require('blue-tape');

import noop = require('node-noop');

test('node-noop', (t) => {
  class A {
    fn: (a: string, b: number) => string[];
    constructor() {
      this.fn = noop;
    }
  }
  t.pass('noop can assigned to (a: string, b: number) => string[]');
  t.end();
});
