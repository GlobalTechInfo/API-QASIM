<h3 align="center">
  
  <p align="center"><img src="https://img.shields.io/badge/WLCM%20TO -API QASIM-green?colorA=%23ff0000&colorB=%23017e40&style=flat-square">  
  
</h3>

### Instalation :
```bash
> npm i api-qasim
```
**Or**

```bash
> yarn add api-qasim
```

**Import In Common js**
```js
const Qasim = require('api-qasim');

```
**Import In ESM Module**
```js
import pkg from 'api-qasim';
const { ringtone } = pkg;
```
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


## Following Functions/Endpoints Are Working

<details>
<summary>𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘 𝗧𝗢 𝗩𝗜𝗘𝗪</summary>

```js
Qasim.googleImage('query');  // search query for downloading image from google


Qasim.gitclone('git url');   // Some Github Repository Url


Qasim.igdl('Instagram url'); // Instagram Post Url, e.g link of reel,image, video etc.


Qasim.fbdl('facebook url');  // Facebook Post Url e.g reel, image, video etc.


Qasim.mediafire('mediafire url');  // url of some file on mediafire


Qasim.wallpapercraft('query');  // wallpaper search query e.g 'sky'


Qasim.wallpaper('query');   //wallpapers search query e.g 'technology'


Qasim.styletext('teks');   // text that you wana convert in various styles e.g 'hello'


Qasim.ringtone('title');  // title of the ringtone that you wana search e.g 'Shape of You'


Qasim.mediaumma('url');   // some media url from mediaumma website


Qasim.wikimedia('query');  // search query for images from Wikimedia e.g 'Laptop'


Qasim.tiktokDl('url');     // url of tiktok media, complete tiktok scraper


Qasim.xdown('url');       // url of twitter media, complete twitter scraper


Qasim.stickersearch('query');  // query for sticker search e.g 'Babar Azam'


Qasim.trendtwit('country');  // Trending Twitter Tags. use Country e.g 'Pakistan'


Qasim.zerochan('query');     // some anime name e.g 'itachi'


Qasim.bitly('url');     //  url that you wana convert/shorten to bit.ly


Qasim.webtoons('query');  // some search query e.g 'ignite'


Qasim.facebook('url');  // works well with reels


Qasim.ssweb('url');     // url of the page from where you wana get screenshot


Qasim.pinterest('query');  // image search query e.g 'Electronics'


Qasim.gempa();   // Earthquake info only for Indonesia


Qasim.cariresep('url');  // Food Recipes web url e.g https://resepkoki.id/resep-nasi-daun-jeruk-praktis-untuk-menu-sehari-hari


Qasim.tinyurl('url');    // Link shortener , url that you wana shorten


Qasim.apkmirror('querry');   // some apk search query e.g 'whatsapp'


Qasim.weather('city'); // weather info query e.g 'Lahore'


Qasim.apksearch('query');     // some apk search query e.g 'facebook'


Qasim.happymod('query');      // some apk search query e.g 'Telegram'


Qasim.mangatoon('search');  // some anime name e.g 'nezoku'


Qasim.quotesanime();


Qasim.artinama('query');    // some name for india only


Qasim.wattpad('query');    // wattpad search query e.g 'japan'


Qasim.playstore('search');   // some apk search query e.g 'whatsapp'


Qasim.wikisearch('query');    // wikipedia search query e.g 'heroku'


Qasim.konachan('query');    // anime search query e.g 'neko'

```
</details>

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
