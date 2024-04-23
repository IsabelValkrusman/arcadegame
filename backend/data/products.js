const products = [
  {
      name: 'PIERROT',
      description: '"Pierrot Clown Win 240" on klassikaline mänguautomaat, mis pakub põnevat lõbustust ja võimalust võita auhindu. Mängijad saavad nautida kirevat kujundust ja kaasahaaravat mängukogemust, püüdes saada võidukombinatsioone. "Pierrot Clown Win 240" oli populaarne valik mänguhallides ja lõbustusparkides vanematel mänguaegadel.',
      image: '/images/pic16.jpg',
    },
    {
      name: 'Lucky and Wild',
      description: 'Lucky and Wild on legendaarne mänguautomaat, mis pärineb 1990ndatest. See pakub mängijatele võimalust kogeda põnevat seiklust koos kasiino-stiilis mängukogemusega. Mängijad võivad nautida kasiinomänge nagu slotid ja videopokker ning seikluslikke elemente, mis muudavad selle mänguautomaadi unikaalseks ja lõbusaks ajaviiteks.',
      image: '/images/pic17.jpg',
    },
    {
      name: 'Final Fight',
      description: 'Final Fight on klassikaline mänguautomaat, mis ilmus esmakordselt 1989. aastal. See pakkus mängijatele võimalust võidelda kangelastena kurjategijate vastu suurlinna tänavatel. Mäng on tuntud oma põneva võitlusmehaanika ja kaasahaarava süžee poolest ning on üks ikoonilisi mänge 1980ndate ja 1990ndate arkade ajaloos.',
      image: '/images/pic18.jpg',
    },
    {
      name: 'Batman Forever',
      description: 'Batman Forever on mänguautomaat, mis põhineb samanimelisel koomiksiraamatul ja filmil. Mäng pakub mängijatele võimalust kontrollida Batmanit võitluses kurjategijatega Gotham City tänavatel. Graafika ja helid on muljetavaldavad ning mäng pakub põnevat platvormilpõhist võitlusmängukogemust, mis sobib ideaalselt Batmani fännidele.',
      image: '/images/pic4.jpg',
    },
   
  {
      name: 'Leisure 2000',
      description: 'Leisure 2000 on klassikaline mänguautomaat, mis pakub mitmesuguseid lõbusaid mänge. Sellel on värvikas ekraan ja lihtne kasutajaliides, mis meelitab mängijaid igas vanuses. Leisure 2000 sisaldab erinevaid mänge, alates arkade tiilis platvormimängudest kuni mõistatuseni. See on suurepärane lisa mängusaalidesse ja meelelahutuskeskustesse.',
      image: '/images/pic1.jpg',
  },
  {
      name: 'Daytona USA',
      description: 'Daytona USA 2 on ikooniline arkademängu aparaat, mis pakub põnevat ja kiiret võidusõidukogemust. Mängijad saavad valida erinevate autode vahel ning võistelda kaaslastega realistlikes Daytona ringraja võidusõitudes. Graafika ja helid on muljetavaldavad, luues haarava atmosfääri ja adrenaliinirikka kogemuse. Daytona USA 2 on üks populaarsemaid võidusõiduarkademänge läbi aegade.',
      image: '/images/pic2.jpg'
      },
  {
      name: 'Arcade',
      description: 'uedj',
      image: '/images/pic3.jpg',
  },

  {
    name: 'Sega Rally',
    description: 'Sega Ralli on populaarne videomängu seeria, mis tõi rallisõidu põneva kogemuse kodukonsoolidele. Selles mängus saavad mängijad kogeda kiiret ja adrenaliinirohket rallisõitu erinevatel radadel ja maastikel. Sega Ralli seadmetel on muljetavaldav graafika ja realistlikud helid, mis panevad mängijad tundma end tõeliste rallisõitjatena. Mängu põnevus ja väljakutsed muudavad selle üheks parimaks rallimänguks läbi aegade.',
    image: '/images/pic19.jpg',
  },
  {
    name: 'Hydra',
    description: 'Hydra on mänguautomaat, mis pakub põnevat ja kiiret tulistamismängukogemust. Mängijad võitlevad erinevate vaenlaste ja bossidega kasutades mitmesuguseid relvi ja võimeid. Hydra graafika ja helid on muljetavaldavad ning see pakub adrenaliinirikast mänguelamust kõigile tulistamismängude fännidele.',
    image: '/images/pic5.jpg',
  },
  {
    name: 'Kiddie ride',
    description: 'Loomade teemalised mänguaparaadid, kus sai istuda ja liikuda, olid populaarsed laste lõbustusparkides. Need seadmed kujutasid erinevaid loomi, nagu elevandid, tiigrid ja džungli loomad, ning pakkusid liikumist, helisid ja interaktiivseid efekte, mis kutsusid esile seiklusliku ja lõbusa kogemuse väikestele mängijatele.',
    image: '/images/pic6.jpg',
  },
  {
      name: 'Godzilla',
      description: 'Godzilla on mänguautomaat, mis põhineb legendaarsel Godzilla filmikarakteril. Mängijad saavad juhtida Godzilla monstrumina, purustades linnu hooneid ja võideldes teiste koletistega. Graafika ja helid on muljetavaldavad ning mäng pakub põnevat ja adrenaliinirikast kogemust kõigile Godzilla fännidele.',
      image: '/images/pic7.jpg',
    },
    {
      name: 'UFO catcher',
      description: 'UFO catcher on klassikaline mänguautomaat, kus mängijad kasutavad kangide ja nuppude abil haardekonksu, et haarata pehmeid mänguasju, mis asuvad klaasist kapslis. Eesmärk on kapsli manipuleerimine nii, et mänguasi langeb haardekonksu alla ja tõmmatakse üles. See pakub lõbusat väljakutset ja meelelahutust.',
      image: '/images/pic8.jpg',
    },
    {
      name: 'GOOD SHOT',
      description: 'Good Shot on mänguautomaat, mis pakub põnevat laskevõistlust. Mängijad kasutavad pärisrelvade imitatsioone, et sihtida ja tulistada sihtmärke. Graafika ja helid on realistlikud, luues autentse lasketiiru atmosfääri. Mängus saavutatud tulemused kuvatakse ekraanil, võimaldades võistlejatel oma oskusi näidata ja võistelda.',
      image: '/images/pic9.jpg',
    },
    {
      name: 'GAME SHOW',
      description: 'GAME SHOW PING PONG on klassikaline mänguautomaat, mis pakub põnevat lauatennise kogemust. Mängijad kasutavad juhtnuppe ja nuppe, et kontrollida oma lauaääri ning löövad palli vastase poolele. Graafika ja helid loovad autentse mängu atmosfääri, pakkudes mängijatele lõbusat ja konkurentsivõimelist mänguelamust.',
      image: '/images/pic10.jpg',
    },
    {
      name: 'Coca Cola',
      description: 'Vanad Coca-Cola automaadid on ajaloolised ikoonid, mis pakuvad nostalgilist kogemust. Need retrostiilis seadmed on tuntud oma kvaliteetse disaini ja unikaalse välimuse poolest. Coca-Cola logo ja värvilised graafikad lisavad särtsu igasse keskkonda, kus need automaadid asuvad, kutsudes inimesi nautima värskendavat joogielamust.',
      image: '/images/pic11.jpg',
    },
    {
      name: 'Sega Hang-On',
      description: 'Sega Hang-On oli klassikaline arkade mänguautomaat, mis ilmus esmakordselt 1985. aastal. See pakkus mängijatele võimalust kogeda põnevat mootorrattasõidu kogemust, kusjuures mängu juhtimiseks kasutati mootorratta stiilis juhtkangi. Graafika ja helid olid tolle aja kohta muljetavaldavad ning Hang-On oli üks populaarsemaid mänge Sega arkademängude valikus.',
      image: '/images/pic12.jpg',
    },
    {
      name: 'Chase H.Q.',
      description: 'Chase H.Q. oli arcade-mänguautomaat, mis ilmus esmakordselt 1988. aastal. Selles mängus võtsid mängijad rolli politsei tagaajajatena, kes jälitasid kurjategijaid läbi linnatänavate. Mäng pakkus põnevat sõidumängukogemust, kus oli võimalik kasutada erinevaid autosid ja relvi. Chase H.Q. oli populaarne valik arkademängude hulgas.',
      image: '/images/pic13.jpg',
    },
    {
      name: 'PlayChoice-10',
      description: 'PlayChoice-10 oli Nintendo poolt välja antud mänguautomaat, mis lubas mängijatel valida ja mängida erinevaid NES (Nintendo Entertainment System) mänge. Mänguautomaadil oli ekraan, kust sai valida erinevate mängude vahel ning see võimaldas mitmeid mänge ühe mündiga. See oli populaarne valik mänguhallides 1980ndatel ja 1990ndatel.',
      image: '/images/pic14.jpg',
    },
    {
      name: 'NEO GEO',
      description: 'NEO GEO oli legendaarne mänguautomaat ja kodukonsool, mille SNK Corporation esmakordselt välja andis 1990. aastal. See pakkus mängijatele kõrgkvaliteedilisi arcade-mängude portreid, millel oli muljetavaldav graafika ja heli ning mitmekesine mänguvalik, mis muutis selle üheks populaarseimaks mängusüsteemiks oma ajal.',
      image: '/images/pic15.jpg',
    },
]

export default products
