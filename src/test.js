const Qasim = require('./index');

async function test() {
  try {
    const fbtext = "https://www.facebook.com/share/v/1DrPPiFLKD/";  // Example Facebook URL
    let fbResponse = await Qasim.fbdl(fbtext);  // Fetch media data from Facebook
    let fbData = fbResponse.data;  // Extract media data
    console.log('Facebook Data:', fbData);

    const instatext = "https://www.instagram.com/p/DESQzXyR2ao/?igsh=aGE2MnlsMHFxbXZs";  // Example Instagram URL
    let igResponse = await Qasim.igdl(instatext);  // Fetch media data from Instagram
    let igData = igResponse.data;  // Extract media data
    console.log('Instagram Data:', igData);  // Log Instagram data

    const mediafireUrl = "https://www.mediafire.com/file/jdu6pvahngo353i/whatsapp+Beta+business+by+(+AsepOfc+)+2.24.22.5.apk/file";  // Example MediaFire URL
    let mediafireResponse = await Qasim.mediafire(mediafireUrl);  // Fetch media data from MediaFire
    let mediafireData = mediafireResponse;  // Extract media details
    console.log('MediaFire Data:', mediafireData);  // Log MediaFire data

    const searchQuery = "cat";  // Example search query
    let googleImageResponse = await Qasim.googleImage(searchQuery);  // Fetch image URLs for the search query
    console.log('Google Image Search Results:', googleImageResponse);  // Log image URLs

    // === GitHub Clone ===
    const gitUrl = "https://github.com/GlobalTechInfo/ULTRA-MD";  // Example GitHub URL
    let gitcloneResponse = await Qasim.gitclone(gitUrl);  // Fetch GitHub clone data
    console.log('GitHub Clone Data:', gitcloneResponse);  // Log GitHub clone response

  } catch (error) {
    console.error('Error:', error);  // Fixed the syntax error
  }
}

test();
