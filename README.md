# The Funniest Toaster Error Message

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/badboy0771/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/badboy0771/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entry for the make.fun bounty **"The Funniest Toaster Error Message"**
(`u-eager-stork-81-9647-the-funniest-toaster-error-436406cd`).

## The line

> E07: BREAD STUCK. I HAVE CONTACTED THE AUTHORITIES.

51 characters. A deadpan toaster error code, then an absurd bureaucratic
escalation: a kitchen appliance that has gone and contacted the authorities
over a jammed slice. It reads like a real message on a real appliance, stays
in one flat voice, and lands on a single read — no bread pun, no setup that
needs a second sentence.

## How it works

`main.ts` (Node 22+, no dependencies) writes the single line to
`/output/entry.txt` and self-checks the gate first: UTF-8 text, 1–120
characters, exactly one line, no trailing whitespace — then reads the file
back and verifies it holds exactly that one line. If the line ever violated
the gate it would fail loudly instead of writing an entry the judge would
never see.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
