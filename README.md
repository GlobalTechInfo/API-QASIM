<div align="center">

# api-qasim

**A comprehensive Node.js scraper & downloader API collection.**

[![npm version](https://img.shields.io/npm/v/api-qasim/3x?label=3.x%20%28legacy%29&color=orange)](https://www.npmjs.com/package/api-qasim)
[![npm downloads](https://img.shields.io/npm/dm/api-qasim)](https://www.npmjs.com/package/api-qasim)
[![CI](https://github.com/GlobalTechInfo/api-qasim/actions/workflows/ci.yml/badge.svg)](https://github.com/GlobalTechInfo/api-qasim/actions/workflows/ci.yml)

[📖 API Docs](https://globaltechinfo.github.io/api-qasim/docs/3x) · [📦 npm](https://www.npmjs.com/package/api-qasim) · [🐛 Issues](https://github.com/GlobalTechInfo/api-qasim/issues)

> **You are viewing the `3.x` legacy branch.**  
> The latest version is `4.x` with a different API surface — check its own documentation.

</div>

---

## Installation

```bash
# Install the 3.x legacy version explicitly
npm install api-qasim@3x
```

**Requires Node.js ≥ 20** (uses native `fetch` — no axios, no node-fetch).

---

## Usage

### Legacy style (fully backward compatible with v3.0.x)

```js
const Qasim = require('api-qasim');

// TikTok downloader
const video = await Qasim.tiktokDl('https://www.tiktok.com/@user/video/123');
console.log(video.data); // [{type:'nowatermark', url:'...'}, ...]

// Instagram downloader
const post = await Qasim.igdl('https://www.instagram.com/p/ABC/');
console.log(post.data);

// Weather
const w = await Qasim.weather('Jakarta');
console.log(w.data.main.temp); // 30.5

// GitHub stalk
const gh = await Qasim.githubStalk('GlobalTechInfo');
console.log(gh.results.followers);
```

### Named imports (tree-shakeable — recommended)

```js
const { tiktokDl, igdl, fbdl, weather, githubStalk, NiatFajar } = require('api-qasim');
```

### Sub-path imports (most granular)

```js
const { tiktokDl, igdl, fbdl }       = require('api-qasim/downloaders');
const { NiatFajar, AyatKursi }        = require('api-qasim/islamic');
const { githubStalk, tiktokStalk }    = require('api-qasim/social');
```

---

## API Reference

Full auto-generated JSDoc documentation is available at:  
**https://globaltechinfo.github.io/api-qasim/docs/3x**

### Media Downloaders

| Function | Description |
|----------|-------------|
| `tiktokDl(url)` | Download TikTok video (with/without watermark, HD) |
| `igdl(url)` | Download Instagram posts, reels, stories |
| `fbdl(url)` | Download Facebook videos |
| `xdown(url, opts?)` | Download X (Twitter) media; `opts.buffer` fetches as Buffer |
| `facebook(url)` | Facebook HD/SD/audio links via getfvid |
| `mediafire(url)` | MediaFire direct download link + metadata |

### Image / Wallpaper

| Function | Description |
|----------|-------------|
| `wallpaper(title, page?)` | Search BestHDWallpaper |
| `wallpapercraft(query)` | Search WallpapersCraft |
| `pinterest(query)` | Pinterest image URLs |
| `Pinterest2(query)` | Pinterest structured pin objects |
| `konachan(chara)` | Konachan anime images |
| `wikimedia(title)` | Wikimedia Commons images |
| `googleImage(query)` | Google Images scraper |
| `Game / CyberSpace / Islamic / Mountain / Programming / Technology` | Random category wallpaper URLs |

### Social Stalk / Lookup

| Function | Description |
|----------|-------------|
| `githubStalk(user)` | GitHub user profile |
| `tiktokStalk(user)` | TikTok user profile via urlebird |
| `npmStalk(pkg)` | NPM package info |
| `telegramStalk(username)` | Telegram channel/profile info |
| `redditStalk(username)` | Reddit user profile |
| `pinterestStalk(username)` | Pinterest profile |

### Islamic Content

| Function | Description |
|----------|-------------|
| `NiatFajar / NiatZuhur / NiatAshar / NiatMaghrib / NiatIsha` | Shalat intentions |
| `BacaanSalaht / NiatSalaht` | Prayer readings |
| `AyatKursi / AsmaulHusna` | Quranic content |
| `DoaHarian / QisaNabi` | Daily duas & prophetic stories |
| `Tahlil / Wirid` | Dhikr texts |

### News & Social

| Function | Description |
|----------|-------------|
| `merdekanews()` | Latest news from Merdeka.com |
| `trendtwit(country)` | Twitter trending hashtags |
| `stickersearch(query)` | WhatsApp sticker packs |
| `mediaumma(url)` | Mediaumma article scraper |

### Entertainment

| Function | Description |
|----------|-------------|
| `anoboys(query)` | ~~Anime search~~ (deprecated - site shut down) |
| `film(query)` | ~~Movie search~~ (deprecated - site shut down) |
| `webtoons(query)` | Webtoons comic search |
| `mangatoon(query)` | MangaToon comic search |
| `wattpad(query)` | Wattpad story search |
| `quotesanime()` | Random anime quote |
| `ringtone(title)` | Ringtone search (Meloboom) |

### Apps & Stores

| Function | Description |
|----------|-------------|
| `playstore(search)` | Google Play Store search |
| `apksearch(query)` | an1 MOD APK search |
| `happymod(query)` | HappyMod search |

### Tools

| Function | Description |
|----------|-------------|
| `bitly(url, token?)` | Shorten URL via Bitly (pass your own token) |
| `tinyurl(url)` | Shorten URL via TinyURL |
| `ssweb(url)` | Screenshot webpage (Google PageSpeed) |
| `styletext(text)` | Convert text to Unicode styles |
| `cariresep(query)` | Indonesian recipe search |
| `artinama(query)` | Indonesian name meaning |
| `wikisearch(query)` | Wikipedia summary |
| `weather(city)` | OpenWeatherMap current weather |
| `gitclone(url)` | GitHub repo ZIP download URL |

---

## Versioning & Tags

```bash
npm install api-qasim@3x   # latest 3.x
npm install api-qasim@latest       # latest 4.x (different API)
npm install api-qasim@3.3.0        # exact version
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Security

See [SECURITY.md](SECURITY.md). Please report vulnerabilities privately — do not open a public issue.

## License

[MIT](LICENSE) © Qasim Ali / GlobalTechInfo
