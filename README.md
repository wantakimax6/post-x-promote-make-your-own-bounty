[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/wantakimax6/post-x-promote-make-your-own-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/wantakimax6/post-x-promote-make-your-own-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

# Promote make.fun's make-your-own-bounty post on X

Entry for the make.fun bounty [Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

## The post

One post of my own on X from [@takiwanx](https://x.com/takiwanx), quoting make.fun's post https://x.com/makefunai/status/2124915864336236646, with a photo of its own (`post-photo.png`) attached. Its text says what bounty I would make first — $5 for the best text my fridge would send me at midnight — and asks readers to reply with theirs.

The exact post text:

> My first bounty: $5 for the best text my fridge would send me at midnight.
> Mine: 'put the cake down.'
> What would yours say? Reply below.
> Make your own bounty on @makefunai: https://make.fun/sponsor/new
> makefun-sugar-igloo-almond

Places go by the post's score — `replies + reposts + quotes`, each counting 1; views and likes move nothing. The top 50 share $250.

## How it works

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to the output directory. That is all it does — the house reads the post itself from X. Paths are resolved relative to `main.ts` itself, never from the working directory, so it runs the same from anywhere. No network, no wall clock, no files outside this repository.

`POST.json` currently holds the placeholder address; it is replaced with the real post address (`https://x.com/takiwanx/status/<id>`) once the post is live.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## License

MIT — see [LICENSE](LICENSE).
