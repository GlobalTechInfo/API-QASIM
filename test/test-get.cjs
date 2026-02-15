const API = require('../dist/index.cjs');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
let skippedTests = 0;

// Initialize API
const api = new API({
  apiKey: 'qasim-dev',
  fullResponse: false,
  timeout: 30000
});

// Helper function to run tests
async function runTest(name, testFn, skip = false) {
  totalTests++;
  
  if (skip) {
    console.log(`${colors.yellow}⊘ SKIP${colors.reset} ${name}`);
    skippedTests++;
    return;
  }

  try {
    await testFn();
    console.log(`${colors.green}✓ PASS${colors.reset} ${name}`);
    passedTests++;
  } catch (error) {
    console.log(`${colors.red}✗ FAIL${colors.reset} ${name}`);
    console.log(`  ${colors.red}Error: ${error.message}${colors.reset}`);
    failedTests++;
  }
}

// Helper to validate response
function validateResponse(response, shouldHaveData = true) {
  if (!response) {
    throw new Error('Response is null or undefined');
  }
  
  if (shouldHaveData && typeof response === 'object' && Object.keys(response).length === 0) {
    throw new Error('Response is empty object');
  }
  
  return true;
}

// Main test suite
async function runAllTests() {
  console.log(`\n${colors.bright}${colors.cyan}════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}           QasimDev API - TEST SUITE        ${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}════════════════════════════════════════════════════════${colors.reset}\n`);

  // ==================== AI TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ AI ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('KimiAi - Should return AI response', async () => {
    const response = await api.KimiAi({ prompt: 'Hello' });
    validateResponse(response);
  });

  await runTest('MistralAi - Should return AI response', async () => {
    const response = await api.MistralAi({ text: 'What is JavaScript?' });
    validateResponse(response);
  });

  await runTest('CodestralAi - Should return code response', async () => {
    const response = await api.CodestralAi({ text: 'Write hello world in python', model: 'codestral-2501' });
    validateResponse(response);
  });

  await runTest('Deepseek - Should return AI response', async () => {
    const response = await api.Deepseek({ prompt: 'Hi there' });
    validateResponse(response);
  });

  await runTest('QwenAi - Should return AI response', async () => {
    const response = await api.QwenAi({ text: 'What is Node.js?' });
    validateResponse(response);
  });

  await runTest('CerebrasAi - Should return AI response', async () => {
    const response = await api.CerebrasAi({ text: 'Explain quantum computing' });
    validateResponse(response);
  });

  await runTest('GroqAi - Should return AI response', async () => {
    const response = await api.GroqAi({ text: 'What is machine learning?' });
    validateResponse(response);
  });

  // ==================== APPS TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ APPS ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('An1Search - Should search apps', async () => {
    const response = await api.An1Search({ query: 'minecraft' });
    validateResponse(response);
  });

  await runTest('An1Dl - Should download app', async () => {
    const response = await api.An1Dl({ url: 'https://an1.com/example-app' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('ApkpureSearch - Should search apps', async () => {
    const response = await api.ApkpureSearch({ query: 'instagram' });
    validateResponse(response);
  });

  await runTest('ApkpureDl - Should download app', async () => {
    const response = await api.ApkpureDl({ url: 'https://apkpure/whatsapp' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('AptoideSearch - Should search apps', async () => {
    const response = await api.AptoideSearch({ query: 'telegram' });
    validateResponse(response);
  });

  await runTest('AptoideDl - Should download app', async () => {
    const response = await api.AptoideDl({ url: 'https://telegram.en.aptoide.com/app' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  // ==================== URL SHORTENER TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ URL SHORTENER ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('Reurl - Should shorten URL', async () => {
    const response = await api.Reurl({ url: 'https://www.google.com' });
    validateResponse(response);
  });

  await runTest('Itsl - Should shorten URL', async () => {
    const response = await api.Itsl({ url: 'https://www.github.com' });
    validateResponse(response);
  });

  await runTest('Cuqin - Should shorten URL', async () => {
    const response = await api.Cuqin({ url: 'https://www.npmjs.com' });
    validateResponse(response);
  });

  await runTest('Surl - Should shorten URL', async () => {
    const response = await api.Surl({ url: 'https://www.stackoverflow.com' });
    validateResponse(response);
  });

  await runTest('Vurl - Should shorten URL', async () => {
    const response = await api.Vurl({ url: 'https://www.reddit.com' });
    validateResponse(response);
  });

  await runTest('Vgd - Should shorten URL', async () => {
    const response = await api.Vgd({ url: 'https://www.youtube.com' });
    validateResponse(response);
  });

  await runTest('Clean - Should clean URL', async () => {
    const response = await api.Clean({ url: 'https://www.example.com' });
    validateResponse(response);
  });

  await runTest('Tiny - Should shorten URL', async () => {
    const response = await api.Tiny({ url: 'https://www.wikipedia.org' });
    validateResponse(response);
  });

  await runTest('Unshort - Should expand short URL', async () => {
    const response = await api.Unshort({ url: 'https://bit.ly/3nxQwZr' });
    validateResponse(response);
  });

  // ==================== DOWNLOAD TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ DOWNLOAD ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('Facebook - Should download video', async () => {
    const response = await api.Facebook({ url: 'https://www.facebook.com/watch/?v=1234567890' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('Gitclone - Should clone repo', async () => {
    const response = await api.Gitclone({ url: 'https://github.com/GlobalTechInfo/MEGA-MD' });
    validateResponse(response);
  });

  await runTest('Instagram - Should download media', async () => {
    const response = await api.Instagram({ url: 'https://www.instagram.com/reel/DUNYuFajOrR/?igsh=MTAzbzR1YzU3ZnppOA==' });
    validateResponse(response);
  });

  await runTest('Mediafire - Should download file', async () => {
    const response = await api.Mediafire({ url: 'https://www.mediafire.com/file/example' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('Pinterest - Should download video', async () => {
    const response = await api.Pinterest({ url: 'https://pin.it/1F3rbjszv' });
    validateResponse(response);
  });

  await runTest('TikTok - Should download video', async () => {
    const response = await api.TikTok({ url: 'https://vt.tiktok.com/ZSapQQph2/' });
    validateResponse(response);
  });

  await runTest('Twitter - Should download media', async () => {
    const response = await api.Twitter({ url: 'https://x.com/i/status/2018122906304118948' });
    validateResponse(response);
  });

  await runTest('Threads - Should download media', async () => {
    const response = await api.Threads({ url: 'https://www.threads.net/@user/post/ABC123' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('Twitch - Should download video', async () => {
    const response = await api.Twitch({ url: 'https://www.twitch.tv/videos/1234567890' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('WallBest - Should get wallpapers', async () => {
    const response = await api.WallBest({ text: 'abstract', page: '1' });
    validateResponse(response);
  });

  await runTest('WallCraft - Should get wallpapers', async () => {
    const response = await api.WallCraft({ text: 'sunset' });
    validateResponse(response);
  });

  await runTest('WallHaven - Should get wallpapers', async () => {
    const response = await api.WallHaven({ query: 'landscape', page: '1' });
    validateResponse(response);
  });

  await runTest('Wikimedia - Should get images', async () => {
    const response = await api.Wikimedia({ title: 'Mount Everest' });
    validateResponse(response);
  });

  await runTest('Snapchat - Should download', async () => {
    const response = await api.Snapchat({ url: 'https://www.snapchat.com/spotlight/W7_EDlXWTBiXAEEniNoMPwAAYbWVoeG5qaGxhAZtTQohZAZtTPYSgAAAAAQ?share_id=kqpXzzS2YOk&locale=en-US' });
    validateResponse(response);
  });

  await runTest('Sharechat - Should download', async () => {
    const response = await api.Sharechat({ url: 'https://sharechat.com/video/example' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('Snackvideo - Should download', async () => {
    const response = await api.Snackvideo({ url: 'https://www.snackvideo.com/video/example' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('Reddit - Should download', async () => {
    const response = await api.Reddit({ url: 'https://www.reddit.com/r/videos/comments/example/' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('Videezy - Should download', async () => {
    const response = await api.Videezy({ url: 'https://www.videezy.com/video/example' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('Vidsplay - Should download', async () => {
    const response = await api.Vidsplay({ url: 'https://vidsplay.com/video/example' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('IMDbVideo - Should download', async () => {
    const response = await api.IMDbVideo({ url: 'https://www.imdb.com/video/example' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('IFunny - Should download', async () => {
    const response = await api.IFunny({ url: 'https://ifunny.co/video/example' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('Getty - Should download', async () => {
    const response = await api.Getty({ url: 'https://www.gettyimages.com/detail/photo/example' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('GoogleImage - Should search images', async () => {
    const response = await api.GoogleImage({ query: 'sky' });
    validateResponse(response);
  });

  // ==================== IMAGE MAKER TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ IMAGE MAKER ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('TextToPic - Should create image from text', async () => {
    const response = await api.TextToPic({ text: 'Hello World' });
    validateResponse(response);
  });

  await runTest('Quoted - Should create quote image', async () => {
    const response = await api.Quoted({ 
      text: 'Life is beautiful', 
      name: 'John Doe', 
      profile: 'https://i.pravatar.cc/150?img=1' 
    });
    validateResponse(response);
  });

  await runTest('Carbon - Should create code screenshot', async () => {
    const response = await api.Carbon({ 
      code: 'console.log("Hello World");', 
      bg: 'rgba(171, 184, 195, 1)' 
    });
    validateResponse(response);
  });

  // ==================== MUSIC TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ MUSIC ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('Spotify - Should download track', async () => {
    const response = await api.Spotify({ url: 'https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('SearchScloud - Should search tracks', async () => {
    const response = await api.SearchScloud({ q: 'electronic music', limit: 5 });
    validateResponse(response);
  });

  await runTest('ScloudDl - Should download track', async () => {
    const response = await api.ScloudDl({ url: 'https://soundcloud.com/artist/track-name' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('GeniusSearch - Should search lyrics', async () => {
    const response = await api.GeniusSearch({ query: 'imagine dragons radioactive' });
    validateResponse(response);
  });

  await runTest('GeniusLyrics - Should get lyrics', async () => {
    const response = await api.GeniusLyrics({ url: 'https://genius.com/Imagine-dragons-radioactive-lyrics' });
    validateResponse(response);
  }, true); // Skip - needs valid URL

  await runTest('DeezerSearch - Should search music', async () => {
    const response = await api.DeezerSearch({ track: 'lose yourself', artist: 'eminem' });
    validateResponse(response);
  });

  await runTest('DeezerDl - Should download track', async () => {
    const response = await api.DeezerDl({ id: '3135556' });
    validateResponse(response);
  }, true); // Skip - may require auth

  await runTest('JamendoSearch - Should search tracks', async () => {
    const response = await api.JamendoSearch({ query: 'rock music' });
    validateResponse(response);
  });

  await runTest('JamendoTracks - Should get artist tracks', async () => {
    const response = await api.JamendoTracks({ artist_name: 'Broke For Free', limit: 5 });
    validateResponse(response);
  });

  // ==================== IMAGE TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ RANDOM IMAGE ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('Couple - Should return couple images', async () => {
    const response = await api.Couple();
    validateResponse(response);
  });

  await runTest('Islamic - Should return Islamic images', async () => {
    const response = await api.Islamic();
    validateResponse(response);
  });

  await runTest('Tech - Should return tech images', async () => {
    const response = await api.Tech();
    validateResponse(response);
  });

  await runTest('Game - Should return game images', async () => {
    const response = await api.Game();
    validateResponse(response);
  });

  await runTest('Mountain - Should return mountain images', async () => {
    const response = await api.Mountain();
    validateResponse(response);
  });

  await runTest('CyberSpace - Should return cyberspace images', async () => {
    const response = await api.CyberSpace();
    validateResponse(response);
  });

  await runTest('Coding - Should return coding images', async () => {
    const response = await api.Coding();
    validateResponse(response);
  });

  await runTest('Coffee - Should return coffee images', async () => {
    const response = await api.Coffee();
    validateResponse(response);
  });

  // ==================== NEWS TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ NEWS ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('GoogleNews - Should return Google news', async () => {
    const response = await api.GoogleNews({ query: 'technology' });
    validateResponse(response);
  });

  await runTest('Aljazeera - Should return Aljazeera news', async () => {
    const response = await api.Aljazeera();
    validateResponse(response);
  });

  await runTest('Bbc - Should return BBC news', async () => {
    const response = await api.Bbc();
    validateResponse(response);
  });

  await runTest('Trt - Should return TRT World news', async () => {
    const response = await api.Trt();
    validateResponse(response);
  });

  await runTest('Sky - Should return Sky news', async () => {
    const response = await api.Sky();
    validateResponse(response);
  });

  await runTest('SkySports - Should return Sky Sports news', async () => {
    const response = await api.SkySports({ sport: 'football' });
    validateResponse(response);
  });

  await runTest('Dawn - Should return Dawn news', async () => {
    const response = await api.Dawn();
    validateResponse(response);
  });

  await runTest('Cnn - Should return CNN news', async () => {
    const response = await api.Cnn();
    validateResponse(response);
  });

  await runTest('Cgtn - Should return CGTN news', async () => {
    const response = await api.Cgtn();
    validateResponse(response);
  });

  await runTest('GeoUrdu - Should return Geo Urdu news', async () => {
    const response = await api.GeoUrdu();
    validateResponse(response);
  });

  await runTest('Geo - Should return Geo news', async () => {
    const response = await api.Geo();
    validateResponse(response);
  });

  await runTest('Neo - Should return Neo news', async () => {
    const response = await api.Neo();
    validateResponse(response);
  });

  await runTest('Express - Should return Express news', async () => {
    const response = await api.Express();
    validateResponse(response);
  });

  // ==================== STALKER TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ STALKER ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('PinterestUser - Should get user info', async () => {
    const response = await api.PinterestUser({ username: 'pinterest' });
    validateResponse(response);
  });

  await runTest('GithubUser - Should get user info', async () => {
    const response = await api.GithubUser({ username: 'torvalds' });
    validateResponse(response);
  });

  await runTest('TelegramUser - Should get user info', async () => {
    const response = await api.TelegramUser({ username: 'telegram' });
    validateResponse(response);
  });

  await runTest('ThreadsUser - Should get user info', async () => {
    const response = await api.ThreadsUser({ username: 'zuck' });
    validateResponse(response);
  });

  await runTest('RedditUser - Should get user info', async () => {
    const response = await api.RedditUser({ username: 'spez' });
    validateResponse(response);
  });

  await runTest('ScloudUser - Should get user info', async () => {
    const response = await api.ScloudUser({ username: 'soundcloud' });
    validateResponse(response);
  });

  await runTest('TiktokUser - Should get user info', async () => {
    const response = await api.TiktokUser({ username: 'tiktok' });
    validateResponse(response);
  });

  await runTest('DribbbleUser - Should get user info', async () => {
    const response = await api.DribbbleUser({ username: 'simplebits' });
    validateResponse(response);
  });

  await runTest('MastodonUser - Should get user info', async () => {
    const response = await api.MastodonUser({ username: 'Gargron', instance: 'mastodon.social' });
    validateResponse(response);
  });

  // ==================== SEARCH TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ SEARCH ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('BingSearch - Should search web', async () => {
    const response = await api.BingSearch({ query: 'nodejs tutorial' });
    validateResponse(response);
  });

  await runTest('BingImage - Should search images', async () => {
    const response = await api.BingImage({ query: 'game' });
    validateResponse(response);
  });

  await runTest('ImgurSearch - Should search images', async () => {
    const response = await api.ImgurSearch({ query: 'funny cats' });
    validateResponse(response);
  });

  await runTest('TimeSearch - Should search time', async () => {
    const response = await api.TimeSearch({ location: 'Lahore' });
    validateResponse(response);
  });

  await runTest('FlickrImage - Should search images', async () => {
    const response = await api.FlickrImage({ query: 'nature' });
    validateResponse(response);
  });

  await runTest('Wattpad - Should search stories', async () => {
    const response = await api.Wattpad({ query: 'romance' });
    validateResponse(response);
  });

  await runTest('Stickers - Should search stickers', async () => {
    const response = await api.Stickers({ query: 'cute', page: 1, limit: 10 });
    validateResponse(response);
  });

  await runTest('YTSearch - Should search videos', async () => {
    const response = await api.YTSearch({ query: 'javascript tutorial', limit: 5 });
    validateResponse(response);
  });

  await runTest('PinSearch - Should search pins', async () => {
    const response = await api.PinSearch({ query: 'home decor' });
    validateResponse(response);
  });

  await runTest('ImdbSearch - Should search movies', async () => {
    const response = await api.ImdbSearch({ query: 'inception' });
    validateResponse(response);
  });

  // ==================== TOOLS TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ TOOLS ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('Dictionary - Should define term', async () => {
    const response = await api.Dictionary({ term: 'serendipity' });
    validateResponse(response);
  });

  await runTest('Screenshot - Should take screenshot', async () => {
    const response = await api.Screenshot({ url: 'https://www.google.com' });
    validateResponse(response);
  });

  await runTest('SSFull - Should take full screenshot', async () => {
    const response = await api.SSFull({ url: 'https://www.github.com', format: 'png', fullSize: true });
    validateResponse(response);
  });

  await runTest('Translate - Should translate text (Bing)', async () => {
    const response = await api.Translate({ text: 'hello world', from: 'en', to: 'es' });
    validateResponse(response);
  });

  await runTest('Translate2 - Should translate text (Google)', async () => {
    const response = await api.Translate2({ text: 'good morning', from: 'en', to: 'fr' });
    validateResponse(response);
  });

  await runTest('Ping - Should ping URL', async () => {
    const response = await api.Ping({ url: 'https://www.google.com' });
    validateResponse(response);
  });

  await runTest('Handwriting - Should convert to handwriting', async () => {
    const response = await api.Handwriting({ text: 'Hello World' });
    validateResponse(response);
  });

  await runTest('TextStats - Should return text statistics', async () => {
    const response = await api.TextStats({ text: 'The quick brown fox jumps over the lazy dog' });
    validateResponse(response);
  });

  await runTest('UnitConvert - Should convert units', async () => {
    const response = await api.UnitConvert({ from: 'f', to: 'c', value: 100 });
    validateResponse(response);
  });

  // ==================== PHOTOOXY TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ PHOTOOXY ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('Battlefield - Should create Battlefield effect', async () => {
    const response = await api.Battlefield({ text1: 'PLAYER', text2: 'ONE' });
    validateResponse(response);
  });

  await runTest('TikTokEffect - Should create TikTok effect', async () => {
    const response = await api.TikTokEffect({ text1: 'VIRAL', text2: 'CONTENT' });
    validateResponse(response);
  });

  await runTest('CustomPhoto - Should create custom photo', async () => {
    const response = await api.CustomPhoto({ 
      url: 'https://photooxy.com/logo-and-text-effects/realistic-embroidery-letters-122.html',
      text: 'CUSTOM'
    });
    validateResponse(response);
  }, true); // Skip - needs valid photooxy URL

  // ==================== EPHOTO360 TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ EPHOTO360 ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('WolfGalaxy - Should create Wolf Galaxy effect', async () => {
    const response = await api.WolfGalaxy({ text1: 'WOLF', text2: 'GALAXY' });
    validateResponse(response);
  });

  await runTest('FreeFire - Should create Free Fire banner', async () => {
    const response = await api.FreeFire({ text1: 'FREE', text2: 'FIRE' });
    validateResponse(response);
  });

  await runTest('ApexLegends - Should create Apex Legends banner', async () => {
    const response = await api.ApexLegends({ text1: 'APEX', text2: 'LEGENDS' });
    validateResponse(response);
  });

  await runTest('CustomEphoto - Should create custom ephoto', async () => {
    const response = await api.CustomEphoto({ 
      url: 'https://en.ephoto360.com/create-a-cinematic-horror-text-effect-online-767.html',
      text: 'HORROR'
    });
    validateResponse(response);
  }, true); // Skip - needs valid ephoto URL

  // ==================== INFORMATION TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ INFORMATION ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('GithubRepo - Should get repository info', async () => {
    const response = await api.GithubRepo({ owner: 'nodejs', repo: 'node' });
    validateResponse(response);
  });

  await runTest('Universities - Should get universities', async () => {
    const response = await api.Universities({ country: 'Pakistan' });
    validateResponse(response);
  });

  await runTest('IPLookup - Should lookup IP address', async () => {
    const response = await api.IPLookup({ ip: '8.8.8.8' });
    validateResponse(response);
  });

  await runTest('Trends - Should get trends', async () => {
    const response = await api.Trends({ country: 'pakistan' });
    validateResponse(response);
  });

  await runTest('Weather - Should get weather', async () => {
    const response = await api.Weather({ city: 'London' });
    validateResponse(response);
  });

  await runTest('Country - Should get country info', async () => {
    const response = await api.Country({ name: 'Pakistan' });
    validateResponse(response);
  });

  await runTest('Wikipedia - Should search Wikipedia', async () => {
    const response = await api.Wikipedia({ query: 'Artificial Intelligence' });
    validateResponse(response);
  });

  // ==================== CRYPTO TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ CRYPTO ENDPOINTS ━━━${colors.reset}`);
  
  await runTest('CoinInfo - Should get coin info', async () => {
    const response = await api.CoinInfo({ id: 'btc-bitcoin' });
    validateResponse(response);
  });

  await runTest('CoinsList - Should list coins', async () => {
    const response = await api.CoinsList();
    validateResponse(response);
  });

  // ==================== UTILITY TESTS ====================
  console.log(`\n${colors.bright}${colors.blue}━━━ UTILITY METHODS ━━━${colors.reset}`);
  
  await runTest('setFullResponse - Should toggle full response mode', async () => {
    api.setFullResponse(true);
    if (api.getFullResponse() !== true) throw new Error('Full response not enabled');
    api.setFullResponse(false);
    if (api.getFullResponse() !== false) throw new Error('Full response not disabled');
  });

  await runTest('setTimeout - Should set custom timeout', async () => {
    api.setTimeout(60000);
    // No direct validation but should not throw
  });

  await runTest('setAPIKey - Should set custom API key', async () => {
    const oldKey = 'qasim-dev';
    api.setAPIKey('test-api-key');
    api.setAPIKey(oldKey); // Reset to original
  });

  // ==================== RESULTS ====================
  console.log(`\n${colors.bright}${colors.cyan}════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.bright}                      TEST RESULTS                         ${colors.reset}`);
  console.log(`${colors.bright}${colors.cyan}════════════════════════════════════════════════════════${colors.reset}`);
  console.log(`\n  Total Tests:   ${colors.bright}${totalTests}${colors.reset}`);
  console.log(`  ${colors.green}✓ Passed:      ${passedTests}${colors.reset}`);
  console.log(`  ${colors.red}✗ Failed:      ${failedTests}${colors.reset}`);
  console.log(`  ${colors.yellow}⊘ Skipped:     ${skippedTests}${colors.reset}`);
  
  const passRate = ((passedTests / (totalTests - skippedTests)) * 100).toFixed(2);
  console.log(`\n  Pass Rate:     ${colors.bright}${passRate}%${colors.reset} (excluding skipped)`);
  
  console.log(`\n${colors.bright}${colors.cyan}════════════════════════════════════════════════════════${colors.reset}\n`);

  // Exit with error code if any tests failed
  if (failedTests > 0) {
    process.exit(1);
  }
}

runAllTests().catch(error => {
  console.error(`\n${colors.red}${colors.bright}Fatal Error:${colors.reset}`, error);
  process.exit(1);
});
      
