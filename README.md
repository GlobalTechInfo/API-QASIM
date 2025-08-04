<h3 align="center">
  
  <p align="center"><img src="https://img.shields.io/badge/WELCOME%20TO -API QASIM-green?colorA=%23ff0000&colorB=%23017e40&style=flat-square">  

  [![npm package](https://img.shields.io/npm/v/api-qasim?logo=npm&style=flat-square)](https://www.npmjs.org/package/api-qasim)
<a href="https://github.com/GlobalTechInfo/API-QASIM/issues"><img title="Issues" src="https://img.shields.io/github/issues/GlobalTechInfo/API-QASIM?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/GlobalTechInfo/API-QASIM/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/GlobalTechInfo/API-QASIM?label=Issues&color=red&style=flat-square"></a>
  
</h3>

### Instalation :
```bash
> npm i api-qasim
```
**Or**

```bash
> yarn add api-qasim
```
-----

**Import In Common js**
```js
const Qasim = require('api-qasim');

```
**Import In ESM Module**
```js
import pkg from 'api-qasim';
const { ringtone } = pkg;
```
-----

### Example Usage cjs

```js
const Qasim = require('api-qasim');

(async () => {

     // === Google Image ===
    const searchQuery = "cat";  // Example search query
    let googleImageResponse = await Qasim.googleImage(searchQuery);  // Fetch image URLs for the search query
    console.log('Google Image Search Results:', googleImageResponse);  // Log image URLs

    // === GitHub Clone ===
    const gitUrl = "https://github.com/GlobalTechInfo/ULTRA-MD";  // Example GitHub URL
    let gitcloneResponse = await Qasim.gitclone(gitUrl);  // Fetch GitHub clone data
    console.log('GitHub Clone Data:', gitcloneResponse);  // Log GitHub clone response

    // === Facebook Usage ===
    const fbtext = "Facebook Url";
    let fbResponse = await Qasim.fbdl(fbtext);
    let fbData = fbResponse.data;
    console.log('Facebook Data:', fbData);

    // === Instagram Usage ===
    const instatext = "Instagram Url";
    let igResponse = await Qasim.igdl(instatext);
    let igData = igResponse.data;
    console.log('Instagram Data:', igData);

    // === Mediafire Dl ===
    const mediafireUrl = "Mediafire Url";
    let mediafireResponse = await Qasim.mediafire(mediafireUrl);
    let mediafireData = mediafireResponse;
    console.log('MediaFire Data:', mediafireData);
} catch (error) {
    console.error('Error:', error);
  }
}

();
```
--------
### Simplified Example Usage
```js
const Qasim = require('api-qasim');

(async () => {
  try {

    // === Ringtones Dl ===
    const ringtoneResult = await Qasim.ringtone('Nokia');
    console.log('Ringtones:', ringtoneResult);

    // === Apk Search ===
    const apksearchResult = await Qasim.apksearch('Telegram');
    console.log('Android1 APK:', apksearchResult);

    // === Weather Info ===
    const weatherResult = await Qasim.weather('Karachi');
    console.log('Weather of Karachi:', weatherResult);

  } catch (error) {
    console.error('Error:', error);
  }
})();

  ```
------

## Following Functions/Endpoints Are Working



**Usage Islamic Features**

```js

const Qasim = require('api-qasim');

// Use any of the functions, for example, NiatAshar:
Qasim.NiatAshar().then(result => {
  console.log(result);
}).catch(error => {
  console.error('Error:', error);
});

```
-------

**Islamic Features**


```js

Qasim.Tahlil();

Qasim.Wirid();

Qasim.AyatKursi();

Qasim.DoaHarian();

Qasim.NiatSalaht();

Qasim.NiatFajar();

Qasim.NiatZuhur();

Qasim.NiatAshar();

Qasim.NiatMaghrib();

Qasim.NiatIsha();

Qasim.BacaanSalaht();

Qasim.AsmaulHusna();

Qasim.QisaNabi();

```
-------

**Downloads Features**
```js
Qasim.ytsearch('query')  // search query for YouTube


Qasim.googleImage('query');  // search query for downloading image from google


Qasim.gitclone('git url');   // Some Github Repository Url


Qasim.igdl('Instagram url'); // Instagram Post Url, e.g link of reel,image, video etc.


Qasim.fbdl('facebook url');  // Facebook Post Url e.g reel, image, video etc.


Qasim.mediafire('mediafire url');  // url of some file on mediafire


Qasim.wallpapercraft('query');  // wallpaper search query e.g 'sky'


Qasim.wallpaper('query');   //wallpapers search query e.g 'technology'


Qasim.ringtone('title');  // title of the ringtone that you wana search e.g 'Shape of You'


Qasim.mediaumma('url');   // some media url from mediaumma website


Qasim.wikimedia('query');  // search query for images from Wikimedia e.g 'Laptop'


Qasim.tiktokDl('url');     // url of tiktok media, complete tiktok scraper


Qasim.xdown('url');       // url of twitter media, complete twitter scraper


Qasim.stickersearch('query');  // query for sticker search e.g 'Babar Azam'


Qasim.facebook('url');  // works well with reels


Qasim.pinterest('query');  // image search query e.g 'Electronics'


Qasim.Pinterest2('query');  // image search query e.g 'Cat'


Qasim.zerochan('query');     // some anime name e.g 'itachi'


Qasim.cariresep('url');  // Food Recipes web url e.g https://resepkoki.id/resep-nasi-daun-jeruk-praktis-untuk-menu-sehari-hari


Qasim.webtoons('query');  // some search query e.g 'ignite'


```
------

**Stalk Features**

```js

Qasim.githubStalk('user')  // Github Username e.g 'GlobalTechInfo'

Qasim.tiktokStalk('user')  // TikTok Username  e.g.  'discoverpakistantv'

Qasim.freefireStalk('userId')  // Free Fire User Id

Qasim.igStalk('userName')   // Instagram Username  e.g 'truepakistanofficial'

Qasim.npmStalk('query')  // npm package name e.g 'api-qasim'

```
-----

**Some Tools**

```js

Qasim.konachan('query');    // anime search query e.g 'neko'

Qasim.styletext('teks');   // text that you wana convert in various styles e.g 'hello'

Qasim.trendtwit('country');  // Trending Twitter Tags. use Country e.g 'Pakistan'

Qasim.bitly('url');     //  url that you wana convert/shorten to bit.ly

Qasim.ssweb('url');     // url of the page from where you wana get screenshot

Qasim.gempa();   // Earthquake info only for Indonesia

Qasim.tinyurl('url');    // Link shortener , url that you wana shorten

```
------

**Apk Search**

```js

Qasim.playstore('search');   // some apk search query e.g 'whatsapp'

Qasim.apkmirror('querry');   // some apk search query e.g 'whatsapp'

Qasim.apksearch('query');     // some apk search query e.g 'facebook'

Qasim.happymod('query');      // some apk search query e.g 'Telegram'

```

--------

**Information**

```js
Qasim.weather('city'); // weather info query e.g 'Lahore'

Qasim.mangatoon('search');  // some anime name e.g 'nezoku'

Qasim.quotesanime();

Qasim.artinama('query');    // some name for its meaning

Qasim.wattpad('query');    // wattpad search query e.g 'japan'

Qasim.wikisearch('query');    // wikipedia search query e.g 'heroku'


```

-------

**Random Wallpapers**

```js
Qasim.Game();

Qasim.Technology();

Qasim.Programming();

Qasim.Mountain();

Qasim.Islamic();

Qasim.CyberSpace();

```

-------

### 🧑‍💻 Connect with the Developer

<p align="center">
  <a href="https://github.com/GlobalTechInfo">
    <img src="https://img.shields.io/badge/GitHub-GlobalTechInfo-blue?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://t.me/GlobalTechOwner">
    <img src="https://img.shields.io/badge/Telegram-@GlobalTechOwner-1DA1F2?style=for-the-badge&logo=telegram&logoColor=white">
  </a>
  <a href="https://wa.me/message/923444844060">
    <img src="https://img.shields.io/badge/WhatsApp-Click%20Here%20to%20Message%20Me-25D366?style=for-the-badge&logo=whatsapp&logoColor=white">
  </a>
  <a href="https://youtube.com/@GlobalTechInfo">
    <img src="https://img.shields.io/badge/YouTube-@GlobalTechInfo-000000?style=for-the-badge&logo=youtube&logoColor=white">
  </a>
</p>

------

<h1 align="center"> MY WHATSAPP BOT </h1>

<p align="center">
<a href="https://github.com/GlobalTechInfo/MEGA-AI"><img title="Author" src="https://img.shields.io/badge/MEGA-AI-black?style=for-the-badge&logo=Github"></a>
<p/>

------
  
<p align="center">© GlobalTechInfo 2025</p>
