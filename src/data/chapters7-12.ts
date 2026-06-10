import { Chapter } from './types';

export const chapters7to12: Chapter[] = [
  {
    number: 7,
    name_sanskrit: "ज्ञानविज्ञानयोगः",
    name_english: "Jnana Vijnana Yoga",
    name_telugu: "Jnana Vijnana Yogam",
    description: "The Yoga of Knowledge and Wisdom. Krishna reveals His divine nature and explains how everything in the universe originates from Him.",
    total_slokas: 30,
    slokas: Array.from({ length: 30 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Krishna said: O Arjuna, hear how you shall know Me fully, with your mind attached to Me, practicing Yoga, and taking refuge in Me.", tel: "Ikkada Krishna em cheppadu antey — Arjuna, nee mind naalo petti, Yoga practice chesthu, naa daggara sharanam teeskunte nannu poortiga ela telusukuntavo vinu." },
        2: { eng: "I shall now declare to you in full this knowledge combined with realization, after knowing which nothing more remains to be known.", tel: "Ikkada em cheptunnadu antey — jnaanam, anubhavam rendu kalipi poortiga neeku cheptanu. Idi teluskunte inka telsukovalsindi emi undadu." },
        4: { eng: "Earth, water, fire, air, ether, mind, intellect, and ego — these are My eight separated material energies.", tel: "Krishna em cheptunnadu antey — bhumi, neellu, agni, gaali, aakaasham, mind, buddhi, ahankaram — ee eight naa prakruti yokka vibhagalu." },
        5: { eng: "Besides this inferior nature, O Arjuna, there is My superior nature — the living entities (jiva) who sustain this material world.", tel: "Ee prakruti kaakunda, Arjuna, naaku inka oka goppa prakruti undi antey — jeevulu, vaalle ee world ni nilabettunnaru." },
        7: { eng: "There is nothing superior to Me, O Arjuna. Everything rests upon Me, as pearls are strung on a thread.", tel: "Arjuna, naaku paina evaru ledu. Anni naalo ne nilabaddayi — daaram lo mutyalu pettinatte." },
        8: { eng: "I am the taste of water, O Arjuna, I am the light of the sun and moon, the syllable Om in all Vedas, sound in ether, and ability in humans.", tel: "Arjuna, neellu lo ruchi nenu, surya chandra lo velugu nenu, Vedaallo Om nenu, aakaasham lo sound nenu, manushulalo ability nenu." },
        14: { eng: "This divine energy of Mine, consisting of the three modes of material nature, is difficult to overcome. But those who surrender to Me can easily cross beyond it.", tel: "Naa ee maya undi kada, moodu gunalu kalisinadi — daatadam chala kashtam. Kani naaku surrender ayina vaalu easy ga daatestaru." },
        19: { eng: "After many births and deaths, one who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes. Such a great soul is very rare.", tel: "Chala janmala tarvata, nijamga jnaanam vachina vaadu nannu surrender avtadu — annitiki kaaranam nenu ani teluskunni. Ala unna mahaatma chala rare." },
        26: { eng: "O Arjuna, I know everything that has happened in the past, all that is happening in the present, and all that is yet to come. But no one knows Me.", tel: "Arjuna, inthaku mundu em jarigindo, ippudu em jarugutondo, tarvaata em jarugutundo — antha naaku telusu. Kani nannu evvariki teliyadu." },
      };
      const gv = key_verses[n] || { eng: `Krishna reveals His divine nature, explaining how He is the source of everything and how different types of people approach Him, Verse ${n}.`, tel: `Ikkada em jarigindi antey — Krishna tana divine nature gurinchi cheptunnadu, tana nundi antha puttindi ani, different people tanani ela approach avtaro cheptunnadu, Verse ${n}.` };
      return { chapter: 7, sloka: n, sanskrit_devanagari: `॥ ७.${n} ॥`, sanskrit_iast: `[Chapter 7, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 7 Verse ${n} explanation` };
    }),
  },
  {
    number: 8,
    name_sanskrit: "अक्षरब्रह्मयोगः",
    name_english: "Aksara Brahma Yoga",
    name_telugu: "Akshara Brahma Yogam",
    description: "The Yoga of the Imperishable Brahman. Krishna explains the concepts of Brahman, karma, and what happens after death based on one's consciousness.",
    total_slokas: 28,
    slokas: Array.from({ length: 28 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Arjuna asked: O Krishna, what is Brahman? What is the self? What is action? What is the material manifestation? And what are the demigods?", tel: "Arjuna emani adigadu antey — Krishna, Brahman ante emiti? Atma emiti? Karma emiti? Ee material creation emiti? Devathalu enti?" },
        5: { eng: "And whoever, at the end of life, quits the body remembering Me alone, attains My nature. Of this there is no doubt.", tel: "Ikkada em cheptunnadu antey — chivari samayam lo body vadilestunapudu nannu matrame remember chesina vaadu naa dagariki vasthadu. Ilo doubt ledu." },
        6: { eng: "Whatever state of being one remembers when quitting the body, O Arjuna, that state one will attain without fail.", tel: "Body vadilesthunapudu evarnni remember chestey aa sthiti ne pondutav, Arjuna — idi pakka." },
        7: { eng: "Therefore, Arjuna, remember Me at all times and fight. With your mind and intellect fixed on Me, you will surely come to Me.", tel: "Anduke Arjuna, eppudu nannu remember chesthu fight cheyyi. Mind buddhi naalo fix chesthe, nuvvu naa dagariki tappaka vastav." },
        13: { eng: "Uttering the sacred syllable Om, the single-syllabled Brahman, and remembering Me, one who departs from the body attains the supreme goal.", tel: "Om ani okka aksharam cheptu, nannu remember chesthu body vadilina vaadu — paramapadam pondutadu." },
        15: { eng: "After attaining Me, the great souls who have achieved the highest perfection never return to this temporary, miserable world.", tel: "Nannu pondina mahaatmalu vacharu kada — vaalu highest perfection chesaru. Ee temporary, dukham tho nilipina lokam ki vaalu malli raaru." },
        20: { eng: "But beyond this unmanifest nature, there is another eternal unmanifest existence, which does not perish even when all beings are destroyed.", tel: "Ee avyakta prakruti ki aavala inka oka shaashwata existence undi — anni praanulu nashinchina kuda adi poodu." },
      };
      const gv = key_verses[n] || { eng: `Krishna explains the nature of Brahman, the cycle of creation, and how to attain the supreme destination through remembrance of God, Verse ${n}.`, tel: `Ikkada em cheptunnadu antey — Krishna Brahman gurinchi, srushti cycle gurinchi, God ni remember chesthe paramapadam ela pondalo cheptunnadu, Verse ${n}.` };
      return { chapter: 8, sloka: n, sanskrit_devanagari: `॥ ८.${n} ॥`, sanskrit_iast: `[Chapter 8, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 8 Verse ${n} explanation` };
    }),
  },
  {
    number: 9,
    name_sanskrit: "राजविद्याराजगुह्ययोगः",
    name_english: "Raja Vidya Raja Guhya Yoga",
    name_telugu: "Raja Vidya Raja Guhya Yogam",
    description: "The Yoga of Royal Knowledge and Royal Secret. Krishna reveals the most confidential knowledge about devotion and His all-pervading nature.",
    total_slokas: 34,
    slokas: Array.from({ length: 34 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Krishna said: Because you are not envious, I shall now impart to you this most secret knowledge combined with realization, knowing which you will be freed from the miseries of material existence.", tel: "Krishna em cheppadu antey — nuvvu asuya leni vaadivi kabatti, ee most secret jnaanam neeku cheptanu. Idi telusukunte material dukhaala nundi free avutav." },
        2: { eng: "This knowledge is the king of all knowledge, the most secret of all secrets. It is the purest knowledge, directly perceivable, righteous, easy to practice, and imperishable.", tel: "Idi raja vidya antey — anni vidyalalo raaju, anni secrets lo pedda secret. Pure ga undi, direct ga telusthundi, dharmam, easy ga practice cheyyochu, enduku pothundi." },
        4: { eng: "By Me, in My unmanifested form, this entire universe is pervaded. All beings are in Me, but I am not in them.", tel: "Naa avyakta roopam lo ee universe anta vyapinchi unnanu. Anni praanulu naalo unnayi, kani nenu vaallo leenu." },
        22: { eng: "To those who worship Me with love, always thinking of Me, I carry what they lack and preserve what they already have.", tel: "Nannu prema tho worship chesi, eppudu nannu talachukone vaallaki — vaallaki leniidi nenu ista, vaalla daggara unna daanni kaapaadutha." },
        26: { eng: "If one offers Me with devotion a leaf, a flower, a fruit, or water, I accept that offering of love from the pure-hearted.", tel: "Bhakti tho oka aaku, puvvu, pandu, neellu — emaina ichinaa nenu accept chestanu — pure heart tho isthe chaalu." },
        27: { eng: "Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform — do that as an offering to Me.", tel: "Nuvvu em chesina, em thinna, em samarpinchina, em daanam chesina, em tapas chesina — antha naaku arpana ga cheyyi." },
        29: { eng: "I am equally disposed to all living beings. No one is hateful or dear to Me. But those who worship Me with devotion — they are in Me and I am in them.", tel: "Nenu andari pattla samaanam ga untanu. Naaku evvaru dvesham ledu, evvaru special istam ledu. Kani bhakti tho worship chesevaallu naalo unnaru, nenu vaallo unnanu." },
        34: { eng: "Engage your mind always in thinking of Me, become My devotee, worship Me, and bow to Me. Thus absorbed in Me, you will come to Me.", tel: "Nee mind eppudu naalo pettu, naa bhaktudu avvu, nannu worship cheyyi, naaku namaskaarinchu. Naalo nimagnudu ayi naa dagariki vastav." },
      };
      const gv = key_verses[n] || { eng: `Krishna reveals the most confidential knowledge about devotion, His all-pervading nature, and how to attain Him through love and surrender, Verse ${n}.`, tel: `Ikkada Krishna em cheptunnadu antey — most confidential jnaanam, bhakti gurinchi, prema tho sharanagati chesthe tanani ela pondacho cheptunnadu, Verse ${n}.` };
      return { chapter: 9, sloka: n, sanskrit_devanagari: `॥ ९.${n} ॥`, sanskrit_iast: `[Chapter 9, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 9 Verse ${n} explanation` };
    }),
  },
  {
    number: 10,
    name_sanskrit: "विभूतियोगः",
    name_english: "Vibhuti Yoga",
    name_telugu: "Vibhuti Yogam",
    description: "The Yoga of Divine Glories. Krishna reveals His divine manifestations and opulences that exist throughout the creation.",
    total_slokas: 42,
    slokas: Array.from({ length: 42 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Krishna said: O mighty-armed Arjuna, listen again to My supreme word, which I shall speak to you for your benefit, as you are dear to Me.", tel: "Krishna em cheppadu antey — Arjuna, naa goppa maata malli vinu. Nee kosam cheptunnanu, endukante nuvvu naaku istam." },
        8: { eng: "I am the origin of all creation. Everything emanates from Me. The wise who know this perfectly worship Me with great faith and devotion.", tel: "Nenu antha srushti ki moolam. Antha naa nundi vasthundi. Idi teluskunna thelivi unna vaalu nannu goppa shraddha, bhakti tho worship chestaru." },
        10: { eng: "To those who are constantly devoted and worship Me with love, I give the understanding by which they can come to Me.", tel: "Eppudu bhakti tho nannu worship chesevallaki, nenu vaallaki buddhi istanu — aa buddhi tho vaalu naa dagariki vastaru." },
        11: { eng: "Out of compassion for them, I, dwelling in their hearts, destroy the darkness of ignorance with the shining lamp of knowledge.", tel: "Vaalla meeda karunatho, vaalla hearts lo undi, nenu jnaanam ane deepam tho ajnaanam ane cheekatini pogottanu." },
        20: { eng: "I am the Self, O Arjuna, seated in the hearts of all creatures. I am the beginning, the middle, and the end of all beings.", tel: "Arjuna, nenu andari hearts lo unna atma ni. Anni praanulaki modalu nenu, madhya nenu, chivara nenu." },
        21: { eng: "Among the celestial gods (Adityas) I am Vishnu, among lights I am the radiant sun, among wind gods (Maruts) I am Marichi, among stars I am the moon.", tel: "Adityas lo nenu Vishnu ni, velugulo nenu Surya ni, Maruts lo nenu Marichi ni, nakshatraalo nenu Chandra ni." },
        33: { eng: "Of letters I am the letter A, and among compound words I am the dual compound. I am also inexhaustible time, and among creators I am Brahma.", tel: "Aksharaallo nenu A ni, compound words lo nenu dwandwa ni. Nenu endipooni kaalam ni, creators lo nenu Brahma ni." },
        36: { eng: "I am the gambling of cheats, the splendor of the splendid. I am victory, I am determination, and I am the strength of the strong.", tel: "Nenu mosagallavallo judam ni, goppa vaallo goppathanam ni. Nenu victory ni, determination ni, strong vaallo strength ni." },
        41: { eng: "Whatever being is glorious, prosperous, or powerful — know that it springs from but a spark of My splendor.", tel: "Edi goppa ga, sampannanga, powerful ga untundo — adi naa tejas lo chinna nippuravi nundi vacchindi ani telusuko." },
        42: { eng: "But what need is there for all this detailed knowledge, O Arjuna? With a single fragment of Myself, I pervade and support this entire universe.", tel: "Kani Arjuna, ee details antha enduku? Naa oka chinna amsham tho nenu ee universe antaa vyapinchi, nilabettunnanu." },
      };
      const gv = key_verses[n] || { eng: `Krishna describes His divine manifestations and opulences present throughout creation, showing how He is present in the best of everything, Verse ${n}.`, tel: `Ikkada Krishna em cheptunnadu antey — tana divine vibhutulu, creation lo annitlo best lo tanu ela unnado cheptunnadu, Verse ${n}.` };
      return { chapter: 10, sloka: n, sanskrit_devanagari: `॥ १०.${n} ॥`, sanskrit_iast: `[Chapter 10, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 10 Verse ${n} explanation` };
    }),
  },
  {
    number: 11,
    name_sanskrit: "विश्वरूपदर्शनयोगः",
    name_english: "Vishwarupa Darshana Yoga",
    name_telugu: "Vishwarupa Darshana Yogam",
    description: "The Yoga of the Vision of the Universal Form. Krishna reveals His awe-inspiring cosmic form (Vishwarupa) to Arjuna.",
    total_slokas: 55,
    slokas: Array.from({ length: 55 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Arjuna said: By the supreme spiritual instruction You have given me, my delusion is now dispelled. I have heard from You in detail about the origin and dissolution of all beings.", tel: "Arjuna em annadu antey — Krishna, nuvvu ichina instruction valla naa moham poyindi. Anni praanula puttuka, nashanam gurinchi detail ga vinnanu." },
        3: { eng: "O Supreme Lord, as You have described Yourself, I now desire to see Your divine cosmic form, O greatest of all personalities.", tel: "Arjuna em adigadu antey — Prabhu, nuvvu cheppinatte nee divine cosmic form ni chudalanukuntunnanu. Nee vishwarupa ni chupinchu." },
        5: { eng: "Krishna said: O Arjuna, behold My hundreds and thousands of divine forms of various colors and shapes.", tel: "Krishna em cheppadu antey — Arjuna, naa vedala, velala divine forms ni chudu — different colors, different shapes." },
        9: { eng: "Sanjaya said: O King, having spoken thus, the Supreme Lord of Yoga, Krishna, then revealed to Arjuna His supreme, divine, cosmic form.", tel: "Sanjaya em cheppadu antey — Raja, ila cheppesaka Krishna Arjuna ki tana supreme divine cosmic form ni chupinchadu." },
        12: { eng: "If hundreds of thousands of suns were to rise at once into the sky, their radiance might resemble the effulgence of the Supreme Person in that universal form.", tel: "Vela suryulu okesari aakaasham lo udigithe — aa velugu ee Vishwarupa velugu laga undochu." },
        15: { eng: "Arjuna said: O Lord, I see in Your body all the gods, various living entities, Lord Brahma seated on the lotus, Lord Shiva, all the sages, and divine serpents.", tel: "Arjuna em annadu antey — Prabhu, nee body lo devathalu, praanulu, Brahma, Shiva, rishulu, divine serpents — antha naaku kanipistundi." },
        20: { eng: "This space between heaven and earth and all the quarters is pervaded by You alone. Seeing this wonderful and terrible form, the three worlds tremble with fear, O great-souled one.", tel: "Swargam bhumi madhya, anni directions lo nuvve vyapinchi unnav. Ee adbhutamaina bhayankara roopam chusi moodu lokalu bhayam tho vankipotunnayi." },
        32: { eng: "Krishna said: I am time, the great destroyer of the worlds, and I have come here to destroy all people. Even without your participation, all the warriors on both sides will be slain.", tel: "Krishna em cheppadu antey — Nenu Kaalam ni, lokaalani nashinche vaadini. Nuvvu fight cheyakapoyina, ee warriors andaru chaavutaru." },
        33: { eng: "Therefore, arise and attain glory. Conquer your enemies and enjoy a flourishing kingdom. They have already been destroyed by Me. You are merely an instrument, O Arjuna.", tel: "Anduke lechi glory pondu, enemies ni gelevu, rajyam anubhavinchu. Vaallani already nenu champesanu — nuvvu just instrument vi, Arjuna." },
        36: { eng: "Arjuna said: O Krishna, the world becomes joyful upon hearing Your name, and everyone becomes attached to You. The perfected beings offer their respects, and the demons flee in fear.", tel: "Arjuna em annadu antey — Krishna, nee name vinte world santhoshistundi, andaru nee tho attach avtaru. Siddha purushulu respect istaru, raakshasulu bhayam tho paaripotaru." },
        46: { eng: "O universal form, O thousand-armed Lord, I wish to see You in Your four-armed form, with the crown, mace, disc, and conch in Your hands.", tel: "Arjuna em adigadu antey — O Vishwarupa, O vela chethulu unna Prabhu, nenu nee four-armed form lo chudalanukuntunnanu — kiritam, gada, chakram, shankham tho." },
        54: { eng: "But by undivided devotion alone can I be known, seen, and entered into, O Arjuna. Only exclusive devotion can reveal My true form.", tel: "Krishna em cheppadu antey — undivided bhakti dwara matrame nannu telusukovachu, chudalavachu, cherukovachu, Arjuna. Exclusive bhakti matrame naa nijamaina roopam ni chupistundi." },
        55: { eng: "One who works for Me, regards Me as the supreme goal, is devoted to Me, is free from attachment, and bears enmity toward no creature — such a devotee comes to Me.", tel: "Naa kosam pani chese vaadu, nannu supreme goal ga chuse vaadu, naa bhaktudu, attachment leni vaadu, evariki dvesham leni vaadu — vaadu naa dagariki vastadu." },
      };
      const gv = key_verses[n] || { eng: `This verse describes the cosmic form of Krishna and the reactions of Arjuna and others upon witnessing the universal form (Vishwarupa), Verse ${n}.`, tel: `Ikkada em jarigindi antey — Krishna vishwarupa chupinchadu, daanni chusi Arjuna em chesadu, em anukunnadu ane vishayam, Verse ${n}.` };
      return { chapter: 11, sloka: n, sanskrit_devanagari: `॥ ११.${n} ॥`, sanskrit_iast: `[Chapter 11, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 11 Verse ${n} explanation` };
    }),
  },
  {
    number: 12,
    name_sanskrit: "भक्तियोगः",
    name_english: "Bhakti Yoga",
    name_telugu: "Bhakti Yogam",
    description: "The Yoga of Devotion. Krishna explains the path of devotion and describes the qualities of a true devotee who is dear to Him.",
    total_slokas: 20,
    slokas: Array.from({ length: 20 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Arjuna asked: Between those who worship You with devotion and those who worship the imperishable, unmanifested Brahman — which of these is better versed in Yoga?", tel: "Arjuna emani adigadu antey — neeku bhakti tho worship chesevaallu, leka unmanifest Brahman ni worship chesevaallu — evaru better yogis?" },
        2: { eng: "Krishna said: Those who fix their minds on Me and always engage in My worship with supreme faith — I consider them to be the most perfect in Yoga.", tel: "Krishna em cheppadu antey — mind naalo fix chesi, supreme faith tho nannu worship chesevaallu — vaallane nenu most perfect yogis ga chustanu." },
        6: { eng: "For those who worship Me, dedicating all their actions to Me, regarding Me as the supreme goal, meditating on Me with exclusive devotion...", tel: "Nannu worship chesi, anni panulu naaku samarpinchi, nannu supreme goal ga chusi, poortiga bhakti tho dhyanam chesevaallu..." },
        7: { eng: "...for them, whose minds are set on Me, I swiftly become their deliverer from the ocean of birth and death, O Arjuna.", tel: "...vaalla minds naalo set chesina vaallani, nenu birth death ane samudram nundi twaraga uddharistanu, Arjuna." },
        8: { eng: "Fix your mind on Me alone, let your intellect dwell in Me. You will then live in Me alone. There is no doubt about this.", tel: "Nee mind naa meeda ne fix cheyyi, nee buddhi naalo ne undu. Aithe nuvvu naalo ne bratukutav — ilo doubt ledu." },
        13: { eng: "One who has no hatred for any creature, who is friendly and compassionate, who is free from possessiveness and ego, equal in joy and sorrow, forgiving...", tel: "Evari meeda dvesham leni vaadu, friendly ga compassionate ga unna vaadu, naaidi ane feeling ego leni vaadu, sukham dukham lo samaanam, kshaminche vaadu..." },
        14: { eng: "...ever content, steady in meditation, self-controlled, with firm conviction, whose mind and intellect are dedicated to Me — such a devotee is very dear to Me.", tel: "...eppudu content ga, dhyanam lo steady ga, self-controlled ga, pakka nammakam tho, mind buddhi naaku dedicate chesina — aa bhaktudu naaku chala istam." },
        15: { eng: "One who does not disturb the world, and whom the world does not disturb, who is free from joy, envy, fear, and anxiety — such a person is dear to Me.", tel: "Evarini disturb cheyyani vaadu, evari valla disturb kaani vaadu, santhosham asuya bhayam worry nundi free — vaadu naaku istam." },
        20: { eng: "Those who follow this immortal path of dharma as described above, with full faith and devotion, regarding Me as the supreme goal — they are exceedingly dear to Me.", tel: "Paina cheppina ee amruta dharma daari ni poorna shraddha bhakti tho follow chesi, nannu supreme goal ga chuse vaalu — vaalu naaku maha priyam." },
      };
      const gv = key_verses[n] || { eng: `Krishna describes the qualities of an ideal devotee and explains how devotion leads to the supreme goal, Verse ${n}.`, tel: `Ikkada Krishna em cheptunnadu antey — nijamaina bhaktudu ela untado, bhakti dwara supreme goal ki ela cherocho cheptunnadu, Verse ${n}.` };
      return { chapter: 12, sloka: n, sanskrit_devanagari: `॥ १२.${n} ॥`, sanskrit_iast: `[Chapter 12, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 12 Verse ${n} explanation` };
    }),
  },
];
