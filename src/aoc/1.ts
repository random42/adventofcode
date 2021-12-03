import { pipeline } from 'stream';
import * as readline from 'readline'
const log = console.error.bind(console);

export async function d1(input: NodeJS.ReadableStream) {
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