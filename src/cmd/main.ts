// require('../globals');
import assert from 'assert'
import axios from 'axios'
import fs from 'fs'
import { captureRejections } from 'events'
import path from 'path'
import { pipeline } from 'stream'
import aoc from '../aoc'

require('dotenv').config();
const log = console.error.bind(console);

async function main() {
  const [ n ] = process.argv.slice(2);
  
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err.toJSON());
    process.exit(1);
  });
