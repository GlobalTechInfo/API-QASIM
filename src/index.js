

















































































































































































































'use strict';

/**
 * @module api-qasim
 * @description api-qasim v3 — comprehensive scraper & downloader API collection.
 * @example
 * const Qasim = require('api-qasim');
 * const { tiktokDl, weather } = require('api-qasim');
 */

const s = require('./scrapers/main');

module.exports = {
  // ── Islamic / Prayer ──────────────────────────────────────────────────
  Tahlil:       s.Tahlil,
  Wirid:        s.Wirid,
  AyatKursi:    s.AyatKursi,
  DoaHarian:    s.DoaHarian,
  BacaanSalaht: s.BacaanSalaht,
  NiatSalaht:   s.NiatSalaht,
  QisaNabi:     s.QisaNabi,
  AsmaulHusna:  s.AsmaulHusna,
  NiatFajar:    s.NiatFajar,
  NiatZuhur:    s.NiatZuhur,
  NiatIsha:     s.NiatIsha,
  NiatMaghrib:  s.NiatMaghrib,
  NiatAshar:    s.NiatAshar,
  // ── Wallpaper categories ───────────────────────────────────────────────
  Game:         s.Game,
  CyberSpace:   s.CyberSpace,
  Islamic:      s.Islamic,
  Mountain:     s.Mountain,
  Programming:  s.Programming,
  Technology:   s.Technology,
  // ── Image scrapers ─────────────────────────────────────────────────────
  wallpaper:      s.wallpaper,
  wallpapercraft: s.wallpapercraft,
  konachan:       s.konachan,
  pinterest:      s.pinterest,
  Pinterest2:     s.Pinterest2,
  zerochan:       s.zerochan,
  wikimedia:      s.wikimedia,
  googleImage:    s.googleImage,
  bingSearch:     s.bingSearch,
  bingImageSearch: s.bingImageSearch,
  // ── Stalk / Profile ────────────────────────────────────────────────────
  npmStalk:       s.npmStalk,
  githubStalk:    s.githubStalk,
  tiktokStalk:    s.tiktokStalk,
  igStalk:        s.igStalk,
  telegramStalk:  s.telegramStalk,
  redditStalk:    s.redditStalk,
  pinterestStalk: s.pinterestStalk,
  // ── Downloaders ────────────────────────────────────────────────────────
  tiktokDl:  s.tiktokDl,
  xdown:     s.xdown,
  facebook:  s.facebook,
  mediafire: s.mediafire,
  igdl:  s.igdl,
  fbdl:  s.fbdl,
  // ── News / Social ──────────────────────────────────────────────────────
  merdekanews:   s.merdekanews,
  mediaumma:     s.mediaumma,
  trendtwit:     s.trendtwit,
  stickersearch: s.stickersearch,
  // ── Entertainment ──────────────────────────────────────────────────────
  anoboys:     s.anoboys,
  film:        s.film,
  webtoons:    s.webtoons,
  mangatoon:   s.mangatoon,
  wattpad:     s.wattpad,
  quotesanime: s.quotesanime,
  ringtone:    s.ringtone,
  // ── App stores ─────────────────────────────────────────────────────────
  playstore: s.playstore,
  apksearch: s.apksearch,
  happymod:  s.happymod,
  // ── Tools ──────────────────────────────────────────────────────────────
  bitly:      s.bitly,
  tinyurl:    s.tinyurl,
  ssweb:      s.ssweb,
  styletext:  s.styletext,
  gempa:      s.gempa,
  cariresep:  s.cariresep,
  artinama:   s.artinama,
  wikisearch: s.wikisearch,
  weather:    s.weather,
  gitclone:   s.gitclone,
};
