import { Readable } from 'stream';
import cloneable from 'cloneable-readable';
import * as readline from 'readline';
import _ from 'lodash';
import bitwise from 'bitwise';

const log = console.error.bind(console);

async function _d3(
  input: Readable,
) {
  let stats: Array<[number, number]> = [];
  const rl = readline.createInterface({
    input,
  });
  let t = 0;
  for await (const line of rl) {
    t++;
    if (!stats.length) {
      stats = new Array(line.length).fill([0, 0]);
    }
    for (let i = 0; i < line.length; i++) {
      line.length
      const bit = line.charAt(i);
      stats[i][+bit]++;
      if (t === 1) log(line, i, bit, stats[i])
      // log(line, i, bit, stats[i]);
    }
    // if (t > 10) break
  }
  log(stats)
  let gamma: string | number = stats.map(s => s[0] >= s[1] ? '0' : '1').join()
  log(gamma)
  gamma = parseInt(gamma, 2);
  let epsilon: string | number = stats.map(s => s[0] <= s[1] ? '0' : '1').join();
  log(epsilon)
  epsilon = parseInt(epsilon, 2);
  return gamma * epsilon
}

export async function d3(input: Readable) {
  const stream = cloneable(input);
  return Promise.all([
    _d3(input),
  ]);
}
