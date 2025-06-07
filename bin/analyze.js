#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import analyze from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = process.argv[2];
const fullPath = path.resolve(__dirname, '..', filePath);
const content = fs.readFileSync(fullPath, 'utf-8');

analyze(content);