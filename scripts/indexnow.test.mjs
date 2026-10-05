import assert from 'node:assert/strict';
import test from 'node:test';
import { changedUrls, submit, validateUrls } from './submit-indexnow.mjs';

test('reports added, edited and removed pages, skipping unchanged pages', () => {
  assert.deepEqual(changedUrls({ '/a': 'new', '/b': 'same', '/c': 'added' }, { '/a': 'old', '/b': 'same', '/d': 'removed' }), ['/a', '/c', '/d']);
  assert.deepEqual(changedUrls({ '/a': 'same' }, { '/a': 'same' }), []);
});

test('rejects URLs outside the canonical site and non-page URL variants', () => {
  validateUrls(['https://ai-era-adaptor.com/blog/'], 'https://ai-era-adaptor.com');
  for (const url of ['https://example.com/', 'http://ai-era-adaptor.com/', 'https://ai-era-adaptor.com/?x=1', 'https://ai-era-adaptor.com/#x', 'https://user@ai-era-adaptor.com/']) {
    assert.throws(() => validateUrls([url], 'https://ai-era-adaptor.com'));
  }
});

test('submits the payload and distinguishes received from validation pending', async () => {
  for (const status of [200, 202]) {
    const payload = { host: 'ai-era-adaptor.com', key: 'test1234', urlList: ['https://ai-era-adaptor.com/'] };
    assert.equal(await submit(payload, async (url, options) => {
      assert.equal(url, 'https://api.indexnow.org/indexnow');
      assert.equal(options.method, 'POST');
      assert.deepEqual(JSON.parse(options.body), payload);
      return new Response('', { status });
    }), status);
  }
});

test('retries throttling and server failures before success', async () => {
  const statuses = [429, 503, 200];
  const waits = [];
  assert.equal(await submit({}, async () => new Response('', { status: statuses.shift() }), async (ms) => waits.push(ms)), 200);
  assert.deepEqual(waits, [5000, 10000]);
});

test('fails on invalid ownership and after bounded retries', async () => {
  await assert.rejects(submit({}, async () => new Response('Invalid key', { status: 403 })), /HTTP 403/);
  let attempts = 0;
  await assert.rejects(submit({}, async () => { attempts++; return new Response('', { status: 503 }); }, async () => {}), /HTTP 503/);
  assert.equal(attempts, 4);
});
