import { Readable } from 'stream';
import cloneable from 'cloneable-readable';
import * as readline from 'readline';
import _ from 'lodash';
import bit from 'bitwise';

const log = console.error.bind(console);

async function _d0(
  input: Readable,
) {
  const rl = readline.createInterface({
    input,
  });
  for await (const line of rl) {
  }
}

export async function d0(input: Readable) {
  const stream = cloneable(input);
  return Promise.all([
  ]);
}
