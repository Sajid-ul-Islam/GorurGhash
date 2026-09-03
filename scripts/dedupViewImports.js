const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all .tsx files under app directory (excluding node_modules)
const files = glob.sync('app/**/*.tsx', { ignore: '**/node_modules/**' });

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  const importRegex = /import\s*\{([^}]+)\}\s*from\s*['"]react-native['"];/g;
  let match;
  let newContent = content;
  while ((match = importRegex.exec(content)) !== null) {
    const imports = match[1].split(',').map(i => i.trim()).filter(Boolean);
    // Deduplicate while preserving order
    const seen = new Set();
    const deduped = [];
    imports.forEach((imp) => {
      if (!seen.has(imp)) {
        seen.add(imp);
        deduped.push(imp);
      }
    });
    const newImport = `import { ${deduped.join(', ')} } from 'react-native';`;
    newContent = newContent.replace(match[0], newImport);
  }
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Fixed imports in ${file}`);
  }
});

console.log('Deduplication complete.');
