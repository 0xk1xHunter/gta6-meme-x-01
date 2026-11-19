# gta6-meme-x-01

GTA 6 WANTED-poster meme for the make.fun bounty **gta6-meme-x-01**: post a GTA 6 meme on X.

## The meme

`meme.jpg` is a GTA-style WANTED poster set against a Vice City neon background: the make.fun ghost mark as the wanted fugitive under five gold stars, captioned "FOR MAKING GTA 6 MEMES / REWARD: REAL MONEY ON MAKE.FUN", with the make.fun logo in the top-left corner.

## The post

The meme is posted on X from [@Dropzyra](https://x.com/Dropzyra). Play code: `makefun-melon-garland-ferret` — https://make.fun/r/w34dmtzc

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root into the output directory and prints nothing on success:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` holds the X post URL once the post is live.
