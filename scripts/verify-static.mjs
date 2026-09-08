import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const output = new URL('../dist/client/index.html', import.meta.url);
await access(output);
const html = await readFile(output, 'utf8');

assert.match(html, /Tokonomics/);
assert.match(html, /Optimize the/);
assert.match(html, /Evidence, not theatre/);
assert.match(html, /PM artifact library/);
assert.doesNotMatch(html, /Your site is taking shape/);

console.log('Static portfolio export verified.');
