// Import the functions from your main module (index.js)
const { fbvdl, happymod, tiktok, pinterest, wallpaper, styletext, ringtone, mediaumma, wikimedia, quotesanime } = require('./index'); // Ensure this path is correct

// Test Function
async function testFunctions() {
  try {
    // Test Facebook Video Download
    let fbResponse = await fbvdl('https://www.facebook.com/share/v/15YWozp9UG/');
    console.log('FBVDL Test Response:', fbResponse);

    // Test Happymod
    let happymodResponse = await happymod('whatsapp');
    console.log('Happymod Test Response:', happymodResponse);

    // Test TikTok
    let tiktokResponse = await tiktok('https://vm.tiktok.com/ZS6YrMmbu');
    console.log('TikTok Test Response:', tiktokResponse);

    // Test Pinterest
    let pinterestResponse = await pinterest('nature');
    console.log('Pinterest Test Response:', pinterestResponse);

    // Test Wallpaper
    let wallpaperResponse = await wallpaper('beach');
    console.log('Wallpaper Test Response:', wallpaperResponse);

    // Test Styletext
    let styletextResponse = await styletext('Hello World');
    console.log('Styletext Test Response:', styletextResponse);

    // Test Ringtone
    let ringtoneResponse = await ringtone('Nokia');
    console.log('Ringtone Test Response:', ringtoneResponse);

    // Test Media Umma
    let mediaummaResponse = await mediaumma('https://www.ummamedia.co.za/2024/11/05/tight-us-presidential-race-sees-final-push-as-harris-trump-rally-voters-in-swing-states/');
    console.log('Media Umma Test Response:', mediaummaResponse);

    // Test Wikimedia
    let wikimediaResponse = await wikimedia('Albert Einstein');
    console.log('Wikimedia Test Response:', wikimediaResponse);

    // Test Quotesanime
    let quotesanimeResponse = await quotesanime();
    console.log('Quotesanime Test Response:', quotesanimeResponse);

  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Run the test
testFunctions();
                                            
