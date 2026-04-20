'use strict';
/**
 * build.js — generate .mjs (ESM) mirrors from CJS source files.
 * Each .js gets a thin .mjs wrapper that re-exports everything,
 * so bundlers can tree-shake ESM consumers without a full transpile step.
 */
const fs   = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '../src');

function generateMjs(jsPath) {
  const mjsPath = jsPath.replace(/\.js$/, '.mjs');
  const rel     = './' + path.basename(jsPath);
  const content = `// Auto-generated ESM wrapper — do not edit manually.\nexport * from '${rel}';\n`;
  fs.writeFileSync(mjsPath, content, 'utf8');
  console.log(`  generated → ${mjsPath.replace(SRC, 'src')}`);
}

function walkDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full);
    else if (entry.name.endsWith('.js') && !entry.name.endsWith('.mjs')) generateMjs(full);
  }
}

console.log('Generating .mjs wrappers …');
walkDir(SRC);
console.log('Done.');
