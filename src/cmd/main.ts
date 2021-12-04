// require('../globals');
import assert from 'assert';
import axios from 'axios';
import fs from 'fs';
import { captureRejections } from 'events';
import path from 'path';
import { pipeline } from 'stream';
import aoc from '../aoc';

require('dotenv').config();
const log = console.error.bind(console);
async function main() {
  let [n] = process.argv.slice(2);
  n = n || process.env.N!;
  const input = fs.createReadStream(`data/input/${n}`);
  const res = await aoc[`d${n}`](input);
  log(res);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
