const fs = require('fs');
const path = require('path');
const glob = require('glob');

const files = glob.sync('app/**/*.tsx', { ignore: ['**/node_modules/**'] });
files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  // Replace import SafeAreaView with View, preserve other imports
  const importRegex = /import\s*\{([^}]*)SafeAreaView([^}]*)\}\s*from\s*['"]react-native['"];/;
  if (importRegex.test(content)) {
    content = content.replace(importRegex, (match, before, after) => {
      // Ensure View is present in the import list
      let newImports = `${before}View${after}`;
      // Clean up possible stray commas/spaces
      newImports = newImports.replace(/,,/g, ',').replace(/\{\s*,/g, '{').replace(/,\s*\}/g, '}');
      const importLine = `import { ${newImports.trim()} } from 'react-native';`;
      const relPath = path.relative(path.dirname(file), path.join('src', 'components', 'FullScreenContainer')).replace(/\\/g, '/');
      const importFS = `import FullScreenContainer from '${relPath.startsWith('.') ? relPath : './' + relPath}';`;
      return `${importLine}\n${importFS}`;
    });
  }
  // Replace JSX tags
  content = content.replace(/<SafeAreaView/g, '<FullScreenContainer');
  content = content.replace(/<\/SafeAreaView>/g, '</FullScreenContainer>');
  fs.writeFileSync(file, content, 'utf8');
});

console.log('Replaced SafeAreaView in', files.length, 'files');
