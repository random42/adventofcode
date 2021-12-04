import { Readable } from 'stream';
import cloneable from 'cloneable-readable';
import * as readline from 'readline';
import _ from 'lodash';
// import bitwise from 'bitwise';

const log = console.error.bind(console);

async function _d3(
  input: Readable,
) {
  let stats: Array<[number, number]> = [];
  const rl = readline.createInterface({
    input,
  });
  // let t = 0;
  for await (const line of rl) {
    // t++;
    for (let i = 0; i < line.length; i++) {
      stats[i] = stats[i] || [];
      const bit = line.charAt(i);
      stats[i][bit] = stats[i][bit] || 0;
      stats[i][bit]++;
    }
  }
  let gamma: string | number = stats.map(s => s[0] >= s[1] ? '0' : '1').join('')
  gamma = parseInt(gamma, 2);
  let epsilon: string | number = stats.map(s => s[0] <= s[1] ? '0' : '1').join('');
  epsilon = parseInt(epsilon, 2);
  return gamma * epsilon
}

export async function d3(input: Readable) {
  const stream = cloneable(input);
  return Promise.all([
    _d3(stream),
  ]);
}
