### Instalation :
```bash
> npm i api-qasim
```
**Or**

```bash
> yarn add api-qasim
```
### Example Usage FB VIDEO

```js
const { fbvdl } = require('api-qasim');

// Now, use the 'fbvdl' function to download a Facebook video
const url = 'https://www.facebook.com/videoid';
fbvdl(url)
  .then(result => {
    console.log('Downloaded Video Links:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  ```
**Example Output**
```
{
  "result": {
    "creator": "Qasim Ali 🦋",
    "url": "https://www.facebook.com/exampleuser/videos/1234567890123456",
    "title": "My Amazing Video",
    "time": "2024-12-21 10:30:00",
    "hd": "https://www.getfvid.com/download/hdvideo.mp4",
    "sd": "https://www.getfvid.com/download/sdvideo.mp4",
    "audio": "https://www.getfvid.com/download/audio.mp3"
  }
}

```
-------

### Example Usage Twitter

```js
const { twitter } = require('api-qasim');

const url = 'https://x.com/DailyUrduPoint/status/1869340074971967576?s=19';

twitter(url)
  .then(result => {
    console.log('Twitter Results:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  ```
**EXAMPLE OUTPUT**

```
{
  "creator": "Qasim Ali",
  "found": true,
  "media": [
    {
      "url": "https://video.twimg.com/ext_tw_video/1869339984085594112/pu/vid/avc1/720x720/ClxCXcpzmewB1yvp.mp4",
      "type": "video"
    }
  ],
  "date": "Wed Dec 18 11:12:59 +0000 2024",
  "likes": 63,
  "replies": 3,
  "retweets": 12,
  "authorName": "UrduPoint اردوپوائنٹ",
  "authorUsername": "DailyUrduPoint"
}
```
-------

### Example Usage HappyMods
```js
const { happymod } = require('api-qasim');

// Using the 'happymod' function
const query = 'Telegram'; // Example query
happymod(query)
  .then(result => {
    console.log('Apps Found on HappyMod:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

**EXAMPLE OUTPUT**
```
[
  {
    title: 'Telegram Mod Apk 11.5.5 More',
    icon: 'https://i.git99.com/upload/android/icon/2024/12/20/dfa36d83b42da1ca381e849fd77f1ce0.jpg',
    link: 'https://www.happymod.com//telegram-747-1-mod/org.telegram.messenger/',
    rating: '5.0',
    creator: 'Qasim Ali 🦋',
    status: true
  },
  {
    title: 'Telegram X Mod Apk 0.24.10.153664 More',
    icon: 'https://i.git99.com/upload/android/icon/2024/01/14/b591722ae73a650b5b3f336cd4746022.jpg',
    link: 'https://www.happymod.com//telegram-x-mod/org.thunderdog.challegram/',
    rating: '3.9',
    creator: 'Qasim Ali 🦋',
    status: true
  },
]
```
-------
### Example Usage Pinterest
```js
const { pinterest } = require('api-qasim');

const query = 'cats';

pinterest(query)
  .then(result => {
    console.log('Pinterest Search Results:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```
**EXAMPLE OUTPUT**
```
{
  "creator": "Qasim Ali",
  "status": true,
  "results": [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    ...
  ]
}
```
-------

### Example Usage TikTok
```js
// Importing the 'tiktok' function from your package
const { tiktok } = require('api-qasim');

const url = 'https://www.tiktok.com/@user/video/1234567890'; // The TikTok video URL

tiktok(url)
  .then(result => {
    console.log('TikTok Response:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

**EXAMPLE OUTPUT**
```
{
  "creator": "Qasim Ali 🦋",
  "status": true,
  "title": "Amazing Dance Moves",
  "taken_at": "Friday, December 21, 2024, 3:00:00 PM",
  "region": "US",
  "id": "1234567890123456789",
  "durations": "15",
  "duration": "15 Seconds",
  "cover": "https://www.tikwm.com/cover.jpg",
  "size_wm": "5.2 MB",
  "size_nowm": "4.8 MB",
  "size_nowm_hd": "8.0 MB",
  "data": [
    {
      "type": "watermark",
      "url": "https://www.tikwm.com/video_with_watermark.mp4"
    },
    {
      "type": "nowatermark",
      "url": "https://www.tikwm.com/video_without_watermark.mp4"
    },
    {
      "type": "nowatermark_hd",
      "url": "https://www.tikwm.com/video_hd.mp4"
    }
  ],
  "music_info": {
    "id": "12345",
    "title": "Cool Dance Beat",
    "author": "DJ Awesome",
    "album": "Dance Hits 2024",
    "url": "https://www.tikwm.com/music/cool_dance_beat.mp3"
  },
  "stats": {
    "views": "1,234,567",
    "likes": "345,678",
    "comment": "12,345",
    "share": "5,678",
    "download": "987"
  },
  "author": {
    "id": "9876543210",
    "fullname": "TikTokUser",
    "nickname": "@TikTokUser",
    "avatar": "https://www.tikwm.com/avatar.jpg"
  }
}

```
----------

### Example Usage StyleText
```js
const { styletext } = require('api-qasim');

const query = "Hello";

styletext(query)
  .then(result => {
    console.log('Converted Text Styles:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```
**EXAMPLE OUTPUT**
```
[
  {
    "name": "bold",
    "result": "𝗛𝗲𝗹𝗹𝗼",
    "creator": "Qasim Ali",
    "status": true
  },
  {
    "name": "italic",
    "result": "𝑯𝒆𝒍𝒍𝒐",
    "creator": "Qasim Ali",
    "status": true
  },
  {
    "name": "underline",
    "result": "𝑯𝑬𝑳𝑳𝑶",
    "creator": "Qasim Ali",
    "status": true
  }
]
```
-------
### Example Usage Ringtone
```js
const { ringtone } = require('api-qasim');

const query = "shape of you";

ringtone(query)
  .then(result => {
    console.log('Ringtone Results:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```
**EXAMPLE OUTPUT**
```
[
  {
    "title": "Shape of You Ringtone",
    "source": "https://meloboom.com/en/ringtone/shape-of-you/",
    "audio": "https://meloboom.com/audio/shape-of-you.mp3",
    "creator": "Qasim Ali 🦋",
    "status": true
  }
]
```
------
### Example Usage Wikimedia
```js
const { wikimedia } = require('api-qasim');

const query = "Eiffel Tower";

wikimedia(query)
  .then(result => {
    console.log('Wikimedia Results:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```
**EXAMPLE OUTPUT**
```
[
  {
    "title": "Eiffel Tower",
    "source": "https://commons.wikimedia.org/wiki/File:Eiffel_Tower.jpg",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Eiffel_Tower_from_the_Champ_de_Mars_2015.jpg/800px-Eiffel_Tower_from_the_Champ_de_Mars_2015.jpg",
    "creator": "Qasim Ali 🦋",
    "status": true
  }
]
```
--------
### Example Usage MediaUmma
```js
const { mediaumma } = require('api-qasim');

const url = "https://www.mediaumma.com/some-media-page";

mediaumma(url)
  .then(result => {
    console.log('MediaUmma Results:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```
**EXAMPLE OUTPUT**
```
{
  "title": "Amazing Media",
  "author": {
    "name": "John Doe",
    "profilePic": "https://www.mediaumma.com/profile/johndoe.jpg"
  },
  "caption": "This is an amazing piece of media content.",
  "media": [
    "https://www.mediaumma.com/media/video123.mp4"
  ],
  "type": "video",
  "like": "1200",
  "creator": "Qasim Ali 🦋",
  "status": true
}
```
-------
### Example Usage AnimeQuotes
```js
const { quotesanime } = require('api-qasim');
quotesanime()
  .then(result => {
    console.log('Anime Quotes:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```
**EXAMPLE OUTPUT**
```

[
  {
    "link": "https://otakotaku.com/quote/12345",
    "gambar": "https://otakotaku.com/images/quote12345.jpg",
    "karakter": "Naruto Uzumaki",
    "anime": "Naruto",
    "episode": "Ep. 123",
    "up_at": "2024-12-20",
    "quotes": "I never give up, even when the world is against me.",
    "creator": "Qasim Ali",
    "status": true
  }
]
```
--------
### Example Usage Wallpapers
```js
const { wallpaper } = require('api-qasim');

const query = 'nature';

wallpaper(query)
  .then(result => {
    console.log('Wallpaper Results:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```
**EXAMPLE OUTPUT**
```
{
  "creator": "Qasim Ali",
  "status": true,
  "results": [
    {
      "title": "Nature Wallpaper",
      "type": "HD",
      "source": "https://www.besthdwallpaper.com/nature/nature-wallpaper-1.html",
      "image": [
        "https://www.besthdwallpaper.com/images/nature1.jpg",
        "https://www.besthdwallpaper.com/images/nature1-1080.jpg",
        "https://www.besthdwallpaper.com/images/nature1-4k.jpg"
      ]
}
```
-----------

### Example Usage Bitly
```js
const { bitly } = require('api-qasim');

const url = 'https://github.com/GlobalTechInfo/ULTRA-MD';

bitly(url)
  .then(result => {
    console.log('Bitly Results:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```
**EXAMPLE OUTPUT**
```
{
  "creator": "Qasim Ali",
  "status": true,
  "result": "https://bit.ly/3VO4EnG"
}
```
-------

### Example Usage Tiny Url
```js
const { tiny } = require('api-qasim');

const url = 'https://github.com/GlobalTechInfo/ULTRA-MD';

tiny(url)
  .then(result => {
    console.log('Tiny URL Results:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });


```
**EXAMPLE OUTPUT**
```
{
  "creator": "Qasim Ali",
  "status": true,
  "result": "https://tinyurl.com/2cw7pc5f"
}
```
----------

