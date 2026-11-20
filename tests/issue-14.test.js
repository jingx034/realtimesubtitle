import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findPhrase } from '../src/phrasebook.js';

test('issue 14: dinner phrase resolves in both directions', () => {
  assert.equal(findPhrase('Dinner will be served shortly.', 'en'), '婚宴即将开席。');
  assert.equal(findPhrase('婚宴即将开席。', 'zh'), 'Dinner will be served shortly.');
});
