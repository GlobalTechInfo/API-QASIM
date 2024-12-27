### Instalation :
```bash
> npm i api-qasim
```
**Or**

```bash
> yarn add api-qasim
```
### Usage

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
