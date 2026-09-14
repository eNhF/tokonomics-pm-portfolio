import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');
const styles = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');

test('validates the v8.0.0 production success claims', () => {
  assert.match(page, /Quality-safe token reduction/);
  assert.match(page, /30%–50%/);
  assert.match(page, /GA release certified/);
  assert.match(page, /Phase 19 Unified Certification/);
});

test('presents the verified 100% quality parity outcome', () => {
  assert.match(page, /100% Quality Parity Achieved/);
  assert.match(page, /14\/14/);
  assert.match(page, /14 of 14 tasks succeeded with zero quality loss/);
  assert.match(page, /Fail-closed preservation safely prevents context insufficiency/);
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

test('presents the v8.0.0 release milestone and technical achievements', () => {
  assert.match(page, /v8\.0\.0 GA/);
  assert.match(page, /Phase 19 Certified/);
  assert.match(page, /3x–4x/);
  assert.match(page, /14 Languages/);
  assert.match(page, /10\.85 ms/);
});
