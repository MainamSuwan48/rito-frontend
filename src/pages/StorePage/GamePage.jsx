import React from 'react';
import ButtonMain from '@/components/ui/ButtonMain';
import GamePageHero from '@/features/store/components/GamePageHero';

const gameData = {
  id: 3498,
  slug: 'grand-theft-auto-v',
  name: 'Grand Theft Auto V',
  released: '2013-09-17',
  background_image:
    'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
  ratings: [
    {
      id: 5,
      title: 'exceptional',
      count: 4036,
      percent: 58.97,
    },
    {
      id: 4,
      title: 'recommended',
      count: 2246,
      percent: 32.82,
    },
    {
      id: 3,
      title: 'meh',
      count: 437,
      percent: 6.39,
    },
    {
      id: 1,
      title: 'skip',
      count: 125,
      percent: 1.83,
    },
  ],
  metacritic: 92,
  updated: '2024-02-23T01:11:10',
  saturated_color: '0f0f0f',
  dominant_color: '0f0f0f',
  platforms: [
    {
      platform: {
        id: 4,
        name: 'PC',
        slug: 'pc',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 525904,
        image_background:
          'https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg',
      },
      released_at: '2013-09-17',
      requirements_en: {
        minimum:
          'Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.',
        recommended:
          'Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:',
      },
      requirements_ru: null,
    },
    {
      platform: {
        id: 187,
        name: 'PlayStation 5',
        slug: 'playstation5',
        image: null,
        year_end: null,
        year_start: 2020,
        games_count: 1015,
        image_background:
          'https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg',
      },
      released_at: '2013-09-17',
      requirements_en: null,
      requirements_ru: null,
    },
    {
      platform: {
        id: 186,
        name: 'Xbox Series S/X',
        slug: 'xbox-series-x',
        image: null,
        year_end: null,
        year_start: 2020,
        games_count: 881,
        image_background:
          'https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg',
      },
      released_at: '2013-09-17',
      requirements_en: null,
      requirements_ru: null,
    },
    {
      platform: {
        id: 18,
        name: 'PlayStation 4',
        slug: 'playstation4',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 6767,
        image_background:
          'https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg',
      },
      released_at: '2013-09-17',
      requirements_en: null,
      requirements_ru: null,
    },
    {
      platform: {
        id: 16,
        name: 'PlayStation 3',
        slug: 'playstation3',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 3168,
        image_background:
          'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      },
      released_at: '2013-09-17',
      requirements_en: null,
      requirements_ru: null,
    },
    {
      platform: {
        id: 14,
        name: 'Xbox 360',
        slug: 'xbox360',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 2796,
        image_background:
          'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
      },
      released_at: '2013-09-17',
      requirements_en: null,
      requirements_ru: null,
    },
    {
      platform: {
        id: 1,
        name: 'Xbox One',
        slug: 'xbox-one',
        image: null,
        year_end: null,
        year_start: null,
        games_count: 5590,
        image_background:
          'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
      },
      released_at: '2013-09-17',
      requirements_en: null,
      requirements_ru: null,
    },
  ],
  parent_platforms: [
    {
      platform: {
        id: 1,
        name: 'PC',
        slug: 'pc',
      },
    },
    {
      platform: {
        id: 2,
        name: 'PlayStation',
        slug: 'playstation',
      },
    },
    {
      platform: {
        id: 3,
        name: 'Xbox',
        slug: 'xbox',
      },
    },
  ],
  genres: [
    {
      id: 4,
      name: 'Action',
      slug: 'action',
      games_count: 178358,
      image_background:
        'https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg',
    },
  ],

  tags: [
    {
      id: 31,
      name: 'Singleplayer',
      slug: 'singleplayer',
      language: 'eng',
      games_count: 218199,
      image_background:
        'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
    },
    {
      id: 40847,
      name: 'Steam Achievements',
      slug: 'steam-achievements',
      language: 'eng',
      games_count: 35702,
      image_background:
        'https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg',
    },
    {
      id: 7,
      name: 'Multiplayer',
      slug: 'multiplayer',
      language: 'eng',
      games_count: 37130,
      image_background:
        'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
    },
    {
      id: 40836,
      name: 'Full controller support',
      slug: 'full-controller-support',
      language: 'eng',
      games_count: 16746,
      image_background:
        'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
    },
    {
      id: 13,
      name: 'Atmospheric',
      slug: 'atmospheric',
      language: 'eng',
      games_count: 32044,
      image_background:
        'https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg',
    },
    {
      id: 42,
      name: 'Great Soundtrack',
      slug: 'great-soundtrack',
      language: 'eng',
      games_count: 3386,
      image_background:
        'https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg',
    },
    {
      id: 24,
      name: 'RPG',
      slug: 'rpg',
      language: 'eng',
      games_count: 19865,
      image_background:
        'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
    },
    {
      id: 18,
      name: 'Co-op',
      slug: 'co-op',
      language: 'eng',
      games_count: 11072,
      image_background:
        'https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg',
    },
    {
      id: 36,
      name: 'Open World',
      slug: 'open-world',
      language: 'eng',
      games_count: 7102,
      image_background:
        'https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg',
    },
    {
      id: 411,
      name: 'cooperative',
      slug: 'cooperative',
      language: 'eng',
      games_count: 4703,
      image_background:
        'https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg',
    },
    {
      id: 8,
      name: 'First-Person',
      slug: 'first-person',
      language: 'eng',
      games_count: 30626,
      image_background:
        'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
    },
    {
      id: 149,
      name: 'Third Person',
      slug: 'third-person',
      language: 'eng',
      games_count: 10861,
      image_background:
        'https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg',
    },
    {
      id: 4,
      name: 'Funny',
      slug: 'funny',
      language: 'eng',
      games_count: 24154,
      image_background:
        'https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg',
    },
    {
      id: 37,
      name: 'Sandbox',
      slug: 'sandbox',
      language: 'eng',
      games_count: 6607,
      image_background:
        'https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg',
    },
    {
      id: 123,
      name: 'Comedy',
      slug: 'comedy',
      language: 'eng',
      games_count: 11960,
      image_background:
        'https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg',
    },
    {
      id: 150,
      name: 'Third-Person Shooter',
      slug: 'third-person-shooter',
      language: 'eng',
      games_count: 3266,
      image_background:
        'https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg',
    },
    {
      id: 62,
      name: 'Moddable',
      slug: 'moddable',
      language: 'eng',
      games_count: 880,
      image_background:
        'https://media.rawg.io/media/games/c22/c22d804ac753c72f2617b3708a625dec.jpg',
    },
    {
      id: 144,
      name: 'Crime',
      slug: 'crime',
      language: 'eng',
      games_count: 2718,
      image_background:
        'https://media.rawg.io/media/games/5fa/5fae5fec3c943179e09da67a4427d68f.jpg',
    },
    {
      id: 62349,
      name: 'vr mod',
      slug: 'vr-mod',
      language: 'eng',
      games_count: 17,
      image_background:
        'https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg',
    },
  ],
  esrb_rating: {
    id: 4,
    name: 'Mature',
    slug: 'mature',
  },
  short_screenshots: [
    {
      id: -1,
      image:
        'https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg',
    },
    {
      id: 1827221,
      image:
        'https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg',
    },
    {
      id: 1827222,
      image:
        'https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg',
    },
    {
      id: 1827223,
      image:
        'https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg',
    },
    {
      id: 1827225,
      image:
        'https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg',
    },
    {
      id: 1827226,
      image:
        'https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg',
    },
    {
      id: 1827227,
      image:
        'https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg',
    },
  ],
};

function GamePage() {
  return <GamePageHero gameData={gameData} />;
}

export default GamePage;
