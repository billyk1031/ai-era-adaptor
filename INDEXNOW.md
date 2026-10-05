# IndexNow

After GitHub Pages successfully deploys, the workflow verifies the live ownership
key and submits new, changed and removed page URLs to https://api.indexnow.org/indexnow.
The first run submits all sitemap pages. Later runs compare exported HTML with
the last successful submission saved in GitHub Actions cache. Public image or
download changes conservatively mark all pages as changed. If the cache expires,
all current pages are submitted again. No browser tracking or runtime service is added.

The key in `indexnow.json` must match `public/<key>.txt`. This ownership file is
public by design; it is not an account credential. No GitHub secret is required.

Local checks after building:

```sh
npm run test:indexnow
npm run indexnow -- --dry-run
```

To retry a failed notification, rerun the GitHub Pages workflow. Failed API calls
do not advance the cached history. A notification failure makes the workflow
fail even if the preceding website deployment succeeded. Read the individual
step results before assuming the website failed to publish.

HTTP 200 means received; HTTP 202 means accepted with key validation pending.
Neither guarantees crawling, indexing or ranking. Throttling and server errors
are retried up to four attempts. Other errors are surfaced immediately.

Protocol reference: https://www.indexnow.org/documentation
