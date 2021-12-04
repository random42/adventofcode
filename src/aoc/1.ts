import { Readable } from 'stream';
import cloneable from 'cloneable-readable';
import * as readline from 'readline'
import _ from 'lodash';

const log = console.error.bind(console);

async function d1Part1(input: Readable) {
  const rl = readline.createInterface({
    input,
  });
  let curr, prev;
  let n = 0;
  for await (const line of rl) {
    curr = +line;
    if (prev !== undefined && curr > prev) {
      n++;
    }
    prev = curr;
  }
  return n;
}

async function d1Part2(input: Readable, len: number) {
  const rl = readline.createInterface({
    input,
  });
  const w = new Array<number>(len);
  w.fill(Infinity);
  let n = 0;
  // let t = 0;
  for await (const line of rl) {
    // t++;
    const x = +line
    if (!Number.isInteger(x)) log(x)
    for (let i = 0; i < len-1;i++) {
      w[i] = w[i] + x;
    }
    w.unshift(x);
    // if (t < 5) log(x, w)
    if (w[len-1] > w[len]) {
      n++;
    }
    w.pop();
  }
  return n;
}

export async function d1(input: Readable) {
  const stream = cloneable(input);
  return Promise.all([
    // d1Part1(stream.clone()),
    d1Part2(stream.clone(), 1),
    d1Part2(stream, 3),
  ]);
}
