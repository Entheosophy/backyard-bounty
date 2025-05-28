// generateStructure.js
import fs from 'fs';
import path from 'path';

const IGNORE = [
  'node_modules',
  '.git',
  '.next',
  '.DS_Store',
  'public',
  'dist',
  'build',
  'project-structure.txt',
  'package-lock.json',
  '.env.local',
  '.vscode',
];

function generateTree(dir, depth = 0) {
  const indent = '  '.repeat(depth);
  let tree = '';

  const entries = fs.readdirSync(dir).filter(entry => !IGNORE.includes(entry));

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry);
    const isDir = fs.statSync(fullPath).isDirectory();

    tree += `${indent}├── ${entry}\n`;
    if (isDir) {
      tree += generateTree(fullPath, depth + 1);
    }
  });

  return tree;
}

const rootDir = path.resolve('.');
const output = `Project Structure:\n\n${generateTree(rootDir)}`;

fs.writeFileSync('project-structure.txt', output);
console.log('✅ project-structure.txt created.');

// node generateStructure.js
