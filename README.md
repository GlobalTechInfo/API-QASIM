# api-qasim

> Universal SDK for [QasimDev REST API](https://api.qasimdev.dpdns.org) — supports Node.js (CJS/ESM), TypeScript, and Browser.

[![npm version](https://img.shields.io/npm/v/api-qasim)](https://www.npmjs.com/package/api-qasim)
[![npm downloads](https://img.shields.io/npm/dm/api-qasim)](https://www.npmjs.com/package/api-qasim)
[![license](https://img.shields.io/npm/l/api-qasim)](LICENSE)
[![Node.js](https://img.shields.io/node/v/api-qasim)](https://nodejs.org)

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Usage by Environment](#usage-by-environment)
- [File Upload (POST Endpoints)](#file-upload-post-endpoints)
- [API Reference](#api-reference)
  - [AI](#ai)
  - [Apps](#apps)
  - [URL Shorteners](#url-shorteners)
  - [Downloads](#downloads)
  - [Image Makers](#image-makers)
  - [Music](#music)
  - [Random Images](#random-images)
  - [News](#news)
  - [Stalker](#stalker)
  - [Search](#search)
  - [Tools](#tools)
  - [Photo Effects (Photooxy)](#photo-effects-photooxy)
  - [Photo Effects (Ephoto360)](#photo-effects-ephoto360)
  - [Information](#information)
  - [Crypto](#crypto)
  - [Image Effects (POST)](#image-effects-post)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [TypeScript Support](#typescript-support)

---

## Installation

```bash
npm install api-qasim
```

---

## Quick Start

```js
const API = require('api-qasim');

const api = new API({ apiKey: 'your-api-key' });

const result = await api.KimiAi({ prompt: 'Hello!' });
console.log(result);
```

---

## Configuration

```js
const api = new API({
  apiKey: 'your-api-key',       // Optional. Default: qasim-dev (free)
  baseURL: 'https://...',       // Optional. Default: https://api.qasimdev.dpdns.org
  fullResponse: false,          // Optional. Return full response object. Default: false
  timeout: 45000                // Optional. Timeout in ms. Default: 45000
});
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `apiKey` | `string` | `qasim-dev` | API key override |
| `baseURL` | `string` | `https://api.qasimdev.dpdns.org` | Base URL override |
| `fullResponse` | `boolean` | `false` | Return full response with metadata |
| `timeout` | `number` | `45000` | Request timeout in milliseconds |

---

## Usage by Environment

### Node.js (CommonJS)

```js
const API = require('api-qasim');

const api = new API({ apiKey: 'your-api-key' });
const result = await api.Weather({ city: 'London' });
```

### Node.js (ESM)

```js
import API from 'api-qasim';

const api = new API({ apiKey: 'your-api-key' });
const result = await api.Weather({ city: 'London' });
```

### TypeScript

```ts
import API, { APIConfig } from 'api-qasim';

const config: APIConfig = { apiKey: 'your-api-key' };
const api = new API(config);

const result = await api.Weather({ city: 'London' });
```

### Browser (CDN)

```html
<script src="https://cdn.jsdelivr.net/npm/api-qasim@4.0.1/dist/browser/global.min.js"></script>
<script>
  const api = new API({ apiKey: 'qasim-dev' });
  api.Weather({ city: 'London' }).then(console.log);
</script>
```

### Browser (ESM)

```js
import API from 'https://cdn.jsdelivr.net/npm/api-qasim@4.0.1/dist/browser/index.mjs';

const api = new API({ apiKey: 'your-api-key' });
```

---

## File Upload (POST Endpoints)

POST endpoints (image effects) require FormData with a file.

### Node.js

```js
const API = require('api-qasim');
const FormData = require('form-data');
const fs = require('fs');

const api = new API({ apiKey: 'your-api-key' });

const formData = new FormData();
formData.append('file', fs.readFileSync('image.jpg'), {
  filename: 'image.jpg',
  contentType: 'image/jpeg'
});

const result = await api.Grayscale(formData);
// result = "data:image/png;base64,..."

// Save to file
const base64Data = result.split(',')[1];
fs.writeFileSync('output.png', Buffer.from(base64Data, 'base64'));
```

> **Note:** `form-data` is a peer dependency for Node.js file uploads. Install it with `npm install form-data`.

### Browser

```js
const formData = new FormData();
formData.append('file', fileInput.files[0]);

const result = await api.Grayscale(formData);
// result = { blob, url, base64, contentType }

// Display in image tag
document.querySelector('img').src = result.url;

// Or download
const a = document.createElement('a');
a.href = result.url;
a.download = 'output.png';
a.click();
```

---

## API Reference

### AI

| Method | Params | Description |
|--------|--------|-------------|
| `KimiAi({ prompt })` | `prompt: string` | Kimi AI chat |
| `MistralAi({ text })` | `text: string` | Mistral AI |
| `CodestralAi({ text, model })` | `text: string`, `model: string` | Codestral (code AI) |
| `Deepseek({ prompt })` | `prompt: string` | DeepSeek AI |
| `QwenAi({ text })` | `text: string` | Qwen AI |
| `CerebrasAi({ text })` | `text: string` | Cerebras AI |
| `GroqAi({ text })` | `text: string` | Groq AI |

```js
const result = await api.KimiAi({ prompt: 'What is the capital of France?' });
```

---

### Apps

| Method | Params | Description |
|--------|--------|-------------|
| `An1Search({ query })` | `query: string` | Search APKs on An1 |
| `An1Dl({ url })` | `url: string` | Download APK from An1 |
| `ApkpureSearch({ query })` | `query: string` | Search APKs on APKPure |
| `ApkpureDl({ query })` | `query: string` | Download APK from APKPure |
| `AptoideSearch({ query })` | `query: string` | Search APKs on Aptoide |
| `AptoideDl({ url })` | `url: string` | Download APK from Aptoide |

```js
const result = await api.ApkpureSearch({ query: 'whatsapp' });
```

---

### URL Shorteners

| Method | Params | Description |
|--------|--------|-------------|
| `Reurl({ url })` | `url: string` | Shorten with Reurl |
| `Itsl({ url })` | `url: string` | Shorten with ItsSSL |
| `Cuqin({ url })` | `url: string` | Shorten with Cuqin |
| `Surl({ url })` | `url: string` | Shorten with Ssur |
| `Vurl({ url })` | `url: string` | Shorten with Vurl |
| `Vgd({ url })` | `url: string` | Shorten with V.gd |
| `Clean({ url })` | `url: string` | Shorten with CleanURI |
| `Tiny({ url })` | `url: string` | Shorten with TinyURL |
| `Unshort({ url })` | `url: string` | Unshorten a URL |

```js
const result = await api.Tiny({ url: 'https://example.com/very/long/url' });
```

---

### Downloads

| Method | Params | Description |
|--------|--------|-------------|
| `TikTok({ url })` | `url: string` | Download TikTok video |
| `Instagram({ url })` | `url: string` | Download Instagram media |
| `Facebook({ url })` | `url: string` | Download Facebook video |
| `Twitter({ url })` | `url: string` | Download Twitter/X media |
| `Pinterest({ url })` | `url: string` | Download Pinterest media |
| `Reddit({ url })` | `url: string` | Download Reddit media |
| `Snapchat({ url })` | `url: string` | Download Snapchat media |
| `Threads({ url })` | `url: string` | Download Threads media |
| `Twitch({ url })` | `url: string` | Download Twitch clip |
| `Sharechat({ url })` | `url: string` | Download Sharechat media |
| `Snackvideo({ url })` | `url: string` | Download Snack Video |
| `Mediafire({ url })` | `url: string` | Download from Mediafire |
| `Gitclone({ url })` | `url: string` | Clone a GitHub repo |
| `IMDbVideo({ url })` | `url: string` | Download IMDb video |
| `IFunny({ url })` | `url: string` | Download iFunny media |
| `Getty({ url })` | `url: string` | Download Getty image |
| `Videezy({ url })` | `url: string` | Download from Videezy |
| `Vidsplay({ url })` | `url: string` | Download from Vidsplay |
| `WallBest({ text, page? })` | `text: string` | Search WallBest wallpapers |
| `WallCraft({ text })` | `text: string` | Search WallCraft wallpapers |
| `WallHaven({ query?, sorting?, page?, purity?, categories? })` | — | Search Wallhaven |
| `Wikimedia({ title })` | `title: string` | Get Wikimedia images |

```js
const result = await api.TikTok({ url: 'https://www.tiktok.com/@user/video/123' });
```

---

### Image Makers

| Method | Params | Description |
|--------|--------|-------------|
| `TextToPic({ text })` | `text: string` | Convert text to image |
| `Quoted({ text, name, profile })` | — | Generate quote card |
| `Carbon({ code, bg? })` | `code: string` | Generate Carbon code image |

```js
const result = await api.Carbon({ code: 'console.log("hello")', bg: '#1e1e2e' });
```

---

### Music

| Method | Params | Description |
|--------|--------|-------------|
| `Spotify({ url })` | `url: string` | Download Spotify track |
| `SearchScloud({ q, limit? })` | `q: string` | Search SoundCloud |
| `ScloudDl({ url })` | `url: string` | Download SoundCloud track |
| `GeniusSearch({ query })` | `query: string` | Search Genius lyrics |
| `GeniusLyrics({ url })` | `url: string` | Get lyrics from Genius |
| `DeezerSearch({ track?, artist?, album? })` | — | Search Deezer |
| `DeezerDl({ id })` | `id: string` | Download Deezer track |
| `JamendoSearch({ query, type?, limit? })` | `query: string` | Search Jamendo |
| `JamendoTracks({ artist_name, limit?, type? })` | `artist_name: string` | Get Jamendo tracks |

```js
const result = await api.GeniusSearch({ query: 'Bohemian Rhapsody' });
```

---

### Random Images

| Method | Description |
|--------|-------------|
| `Couple()` | Random couple wallpaper |
| `Islamic()` | Random Islamic image |
| `Tech()` | Random tech image |
| `Game()` | Random gaming image |
| `Mountain()` | Random mountain image |
| `CyberSpace()` | Random cyberspace image |
| `Coding()` | Random coding image |
| `Coffee()` | Random coffee image |

```js
const result = await api.Islamic();
```

---

### News

| Method | Params | Description |
|--------|--------|-------------|
| `GoogleNews({ query? })` | `query?: string` | Google News |
| `Bbc()` | — | BBC News |
| `Cnn()` | — | CNN News |
| `Aljazeera()` | — | Al Jazeera News |
| `Sky()` | — | Sky News |
| `SkySports({ sport })` | `sport: string` | Sky Sports News |
| `Trt()` | — | TRT World News |
| `Dawn()` | — | Dawn News |
| `Cgtn()` | — | CGTN World News |
| `GeoUrdu()` | — | Geo Urdu News |
| `Geo()` | — | Geo News |
| `Neo()` | — | Neo News |
| `Express()` | — | Express News |

```js
const result = await api.GoogleNews({ query: 'technology' });
const headlines = await api.Bbc();
```

---

### Stalker

| Method | Params | Description |
|--------|--------|-------------|
| `GithubUser({ username })` | `username: string` | GitHub profile info |
| `TiktokUser({ username })` | `username: string` | TikTok profile info |
| `PinterestUser({ username })` | `username: string` | Pinterest profile info |
| `TelegramUser({ username })` | `username: string` | Telegram profile info |
| `ThreadsUser({ username })` | `username: string` | Threads profile info |
| `RedditUser({ username })` | `username: string` | Reddit profile info |
| `ScloudUser({ username })` | `username: string` | SoundCloud profile info |
| `DribbbleUser({ username })` | `username: string` | Dribbble profile info |
| `MastodonUser({ username, instance? })` | `username: string` | Mastodon profile info |

```js
const result = await api.GithubUser({ username: 'torvalds' });
```

---

### Search

| Method | Params | Description |
|--------|--------|-------------|
| `BingSearch({ query })` | `query: string` | Bing web search |
| `BingImage({ query })` | `query: string` | Bing image search |
| `GoogleImage({ query })` | `query: string` | Google image search |
| `ImgurSearch({ query })` | `query: string` | Imgur search |
| `FlickrImage({ query })` | `query: string` | Flickr image search |
| `YTSearch({ query, limit? })` | `query: string` | YouTube search |
| `ImdbSearch({ query })` | `query: string` | IMDb search |
| `PinSearch({ query })` | `query: string` | Pinterest search |
| `Wattpad({ query })` | `query: string` | Wattpad search |
| `Stickers({ query, page?, limit? })` | `query: string` | Sticker search |
| `TimeSearch({ location })` | `location: string` | Search time by location |

```js
const result = await api.YTSearch({ query: 'lo-fi music', limit: 10 });
```

---

### Tools

| Method | Params | Description |
|--------|--------|-------------|
| `Screenshot({ url })` | `url: string` | Take website screenshot |
| `SSFull({ url, format?, fullSize? })` | `url: string` | Full page screenshot |
| `Translate({ text, from?, to? })` | `text: string` | Translate via Bing |
| `Translate2({ text, from?, to? })` | `text: string` | Translate via Google |
| `Dictionary({ term })` | `term: string` | Dictionary definition |
| `Ping({ url })` | `url: string` | Ping a URL |
| `Handwriting({ text })` | `text: string` | Convert text to handwriting |
| `TextStats({ text })` | `text: string` | Get text statistics |
| `UnitConvert({ from, to, value })` | — | Unit conversion |

```js
const result = await api.Translate({ text: 'Hello', from: 'en', to: 'ar' });
const result2 = await api.UnitConvert({ from: 'f', to: 'c', value: 100 });
```

---

### Photo Effects (Photooxy)

| Method | Params | Description |
|--------|--------|-------------|
| `Battlefield({ text1, text2 })` | `text1, text2: string` | Battlefield style effect |
| `TikTokEffect({ text1, text2 })` | `text1, text2: string` | TikTok style effect |
| `CustomPhoto({ url, text })` | `url, text: string` | Custom Photooxy effect |

---

### Photo Effects (Ephoto360)

| Method | Params | Description |
|--------|--------|-------------|
| `WolfGalaxy({ text1, text2 })` | `text1, text2: string` | Wolf Galaxy effect |
| `FreeFire({ text1, text2 })` | `text1, text2: string` | Free Fire banner |
| `ApexLegends({ text1, text2 })` | `text1, text2: string` | Apex Legends banner |
| `CustomEphoto({ url, text })` | `url, text: string` | Custom Ephoto effect |

---

### Information

| Method | Params | Description |
|--------|--------|-------------|
| `Weather({ city })` | `city: string` | Weather by city |
| `Country({ name })` | `name: string` | Country information |
| `Wikipedia({ query })` | `query: string` | Wikipedia summary |
| `IPLookup({ ip })` | `ip: string` | IP address info |
| `Universities({ country })` | `country: string` | Universities by country |
| `Trends({ country })` | `country: string` | Google Trends by country |
| `GithubRepo({ owner, repo })` | `owner, repo: string` | GitHub repo info |

```js
const result = await api.Weather({ city: 'Karachi' });
const wiki = await api.Wikipedia({ query: 'JavaScript' });
```

---

### Crypto

| Method | Params | Description |
|--------|--------|-------------|
| `CoinInfo({ id })` | `id: string` | Coin info (e.g. `btc-bitcoin`) |
| `CoinsList()` | — | List all available coins |

```js
const result = await api.CoinInfo({ id: 'btc-bitcoin' });
const coins = await api.CoinsList();
```

---

### Image Effects (POST)

All image effect methods accept a `FormData` object with a `file` field, plus optional parameters.

**Node.js response:** `"data:image/png;base64,..."`  
**Browser response:** `{ blob, url, base64, contentType }`

| Method | Optional Params | Description |
|--------|----------------|-------------|
| `Blur(formData, { radius? })` | `radius: number` | Blur image |
| `Sharpen(formData, { sigma? })` | `sigma: number` | Sharpen image |
| `Grayscale(formData)` | — | Convert to grayscale |
| `Sepia(formData)` | — | Apply sepia tone |
| `Invert(formData)` | — | Invert colors |
| `Normalize(formData)` | — | Normalize image |
| `Brightness(formData, { value? })` | `value: number` | Adjust brightness |
| `Contrast(formData, { value? })` | `value: number` | Adjust contrast |
| `Saturation(formData, { value? })` | `value: number` | Adjust saturation |
| `Hue(formData, { degrees? })` | `degrees: number` | Adjust hue |
| `Gamma(formData, { value? })` | `value: number` | Adjust gamma |
| `Tint(formData, { color? })` | `color: string` | Apply color tint |
| `Rotate(formData, { degrees? })` | `degrees: number` | Rotate image |
| `Flip(formData, { horizontal?, vertical? })` | — | Flip image |
| `Resize(formData, { width?, height? })` | `width, height: number` | Resize image |
| `Crop(formData, { x?, y?, width?, height? })` | — | Crop image |
| `Scale(formData, { factor? })` | `factor: number` | Scale image |
| `Contain(formData, { width?, height? })` | `width, height: number` | Contain in box |
| `Cover(formData, { width?, height? })` | `width, height: number` | Cover a box |
| `Threshold(formData, { max? })` | `max: number` | Apply threshold |
| `Median(formData, { size? })` | `size: number` | Median filter |
| `Pixelate(formData, { size? })` | `size: number` | Pixelate image |
| `Gaussian(formData, { radius? })` | `radius: number` | Gaussian blur |
| `Opacity(formData, { value? })` | `value: number` | Adjust opacity |
| `Fade(formData, { value? })` | `value: number` | Fade image |
| `Posterize(formData, { level? })` | `level: number` | Posterize image |
| `Fisheye(formData, { strength? })` | `strength: number` | Fisheye effect |
| `Vignette(formData, { intensity? })` | `intensity: number` | Vignette effect |
| `Color(formData, { action?, value? })` | `action: string` | Color adjustment |
| `Convolute(formData)` | — | Convolve/sharpen |
| `Dither(formData)` | — | Dither effect |
| `Circle(formData)` | — | Circular crop |

```js
// Node.js example
const FormData = require('form-data');
const fs = require('fs');

const formData = new FormData();
formData.append('file', fs.readFileSync('photo.jpg'), {
  filename: 'photo.jpg',
  contentType: 'image/jpeg'
});

const blurred = await api.Blur(formData, { radius: 5 });
const base64Data = blurred.split(',')[1];
fs.writeFileSync('blurred.png', Buffer.from(base64Data, 'base64'));
```

---

## Response Format

By default, the SDK returns the `data` field from the API response. To get the full response object:

```js
const api = new API({ apiKey: 'your-key', fullResponse: true });
// Returns: { success: true, data: {...}, timestamp: "..." }
```

You can also toggle it at runtime:

```js
api.setFullResponse(true);
```

---

## Error Handling

```js
try {
  const result = await api.Weather({ city: 'London' });
  console.log(result);
} catch (error) {
  if (error.message.includes('401')) {
    console.error('Invalid API key');
  } else if (error.message.includes('timeout')) {
    console.error('Request timed out');
  } else {
    console.error('Error:', error.message);
  }
}
```

---

## TypeScript Support

```ts
import API, { APIConfig, APIResponse } from 'api-qasim';

const config: APIConfig = {
  apiKey: 'your-api-key',
  fullResponse: false,
  timeout: 30000
};

const api = new API(config);

const weather = await api.Weather({ city: 'Dubai' });
```

---

## Utility Methods

```js
api.setAPIKey('new-api-key');
api.setFullResponse(true);
api.setTimeout(60000);
api.getFullResponse(); // returns boolean
```

---

## License

MIT © [Qasim Ali](https://github.com/GlobalTechInfo)
