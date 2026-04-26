const fs = require('fs');
const path = require('path');

const editorsPagesDir = path.join(__dirname, 'client', 'src', 'pages', 'editors');

if (fs.existsSync(editorsPagesDir)) {
    const files = fs.readdirSync(editorsPagesDir);
    files.forEach(file => {
        if (file.endsWith('.jsx')) {
            const filePath = path.join(editorsPagesDir, file);
            let content = fs.readFileSync(filePath, 'utf8');
            // Replace /components/editor/ with /components/editors/
            const newContent = content.replace(/\/components\/editor\//g, '/components/editors/');
            if (content !== newContent) {
                fs.writeFileSync(filePath, newContent);
                console.log(`Fixed imports in ${file}`);
            }
        }
    });
} else {
    console.log('Editors pages directory not found.');
}
