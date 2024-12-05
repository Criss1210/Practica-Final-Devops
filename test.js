const fs = require('fs');

test('El archivo index.html contiene "Hola Mundo"', () => {
    const html = fs.readFileSync('./index.html', 'utf8');
    expect(html).toContain('<h1>Hola Mundo</h1>');
});