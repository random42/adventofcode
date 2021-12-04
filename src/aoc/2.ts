import { Readable } from 'stream';
import cloneable from 'cloneable-readable';
import * as readline from 'readline';
import _ from 'lodash';

const log = console.error.bind(console);

async function _d2(
  input: Readable,
  pos: number[],
  commands: {
    [name: string]: (pos: number[], v: any) => void;
  },
) {
  const p = _.cloneDeep(pos);
  const rl = readline.createInterface({
    input,
  });
  for await (const line of rl) {
    const [cmd, v] = line.split(' ');
    commands[cmd](p, +v);
  }
  // return p.reduce((x, y) => x * y, 1);
  return p[0] * p[1];
}

export async function d2(input: Readable) {
  const stream = cloneable(input);
  return Promise.all([
    _d2(stream.clone(), [0, 0], {
      forward: (pos, v) => {
        pos[0] += v;
      },
      up: (pos, v) => {
        pos[1] -= v;
      },
      down: (pos, v) => {
        pos[1] += v;
      },
    }),
    _d2(stream, [0, 0, 0], {
      forward: (pos, v) => {
        pos[0] += v; // hor
        pos[1] += v * pos[2]; // depth
      },
      up: (pos, v) => {
        pos[2] -= v; // aim
      },
      down: (pos, v) => {
        pos[2] += v; // aim
      },
    }),
  ]);
}
