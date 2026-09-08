import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');
const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');

test('keeps the case-study claim honest', () => {
  assert.match(page, /Quality-safe dollar saving/);
  assert.match(page, /\$0 proven/);
  assert.match(page, /Savings claim rejected/);
  assert.match(page, /Directional evidence, not a production claim/);
});

test('presents the paired pilot outcome', () => {
  assert.match(page, /14\/14/);
  assert.match(page, /11\/14/);
  assert.match(page, /−21\.43 pp/);
  assert.match(page, /context-insufficient/);
});

test('contains the complete fifteen-artifact portfolio map', () => {
  const artifactNumbers = page.match(/number: '\d{2}'/g) ?? [];
  assert.equal(artifactNumbers.length, 15);
  assert.match(page, /Evidence register/);
  assert.match(page, /Post-launch operating plan/);
});

test('preserves responsive and accessibility affordances', () => {
  assert.match(styles, /@media \(max-width: 760px\)/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(styles, /:focus-visible/);
  assert.match(page, /aria-label="Primary navigation"/);
});
