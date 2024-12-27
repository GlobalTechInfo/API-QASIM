### Instalation :
```bash
> npm i api-qasim
```
**Or**

```bash
> yarn add api-qasim
```
### Usage Import

**Common js**
```js
const Qasim = require('api-qasim');

```
**ESM Module**
```js
import pkg from 'api-qasim';

```
### Usage of functions

```js
const Qasim = require('api-qasim');

(async () => {
  try {
    // Using the ringtones function
    const ringtoneResult = await Qasim.ringtone('Shape of You');
    console.log('Ringtones:', ringtoneResult);

    // Using the apksearch function
    const apksearchResult = await Qasim.apksearch('Telegram');
    console.log('Android1 APK:', apksearchResult);

    // Using the weather info function
    const weatherResult = await Qasim.weather('Karachi');
    console.log('Weather of Karachi:', weatherResult);

  } catch (error) {
    console.error('Error:', error);
  }
})();


  ```
**Usage Individually**

```js
// Using the ringtones search function

const Qasim = require('api-qasim');

(async () => {
  try {
    
    const ringtoneResult = await Qasim.ringtone('nokia');
    console.log('Ringtones:', ringtoneResult);
  } catch (error) {
    console.error('Error:', error);
  }
})();

// Using the APK search function

const Qasim = require('api-qasim');

(async () => {
  try {

    const apksearchResult = await Qasim.apksearch('telegram');
    console.log('Android1 APK:', apksearchResult);
  } catch (error) {
    console.error('Error:', error);
  }
})();

// Using the weather info function

const Qasim = require('api-qasim');

(async () => {
  try {
    
    const weatherResult = await Qasim.weather('Karachi');
    console.log('Weather of Karachi:', weatherResult);
  } catch (error) {
    console.error('Error:', error);
  }
})();

```

## Following Functions/Endpoints Are Working

```js
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


**Going To Add Many More Functions In Future**
