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
        1: { eng: "Krishna said: O Arjuna, hear how you shall know Me fully, with your mind attached to Me, practicing Yoga, and taking refuge in Me.", tel: "Krishna cheppadu — Arjuna, nee mind naalo attach chesi, Yoga practice chesthu, naa sharanam lo nannu poortiga ela telusukuntavo vinu." },
        2: { eng: "I shall now declare to you in full this knowledge combined with realization, after knowing which nothing more remains to be known.", tel: "Jnaanam, vijnanam kalipi poortiga neeku cheptanu — idi telusukunnaka inka telsukovaalsindi emdi undadu." },
        4: { eng: "Earth, water, fire, air, ether, mind, intellect, and ego — these are My eight separated material energies.", tel: "Bhumi, neellu, agni, gaali, aakaasham, mind, buddhi, ahankaram — ee eight naa material prakruti vibhaagalu." },
        5: { eng: "Besides this inferior nature, O Arjuna, there is My superior nature — the living entities (jiva) who sustain this material world.", tel: "Ee inferior prakruti kaakunda, Arjuna, naa superior prakruti undi — jeevulu, vaalle ee material world ni sustain chestunnaru." },
        7: { eng: "There is nothing superior to Me, O Arjuna. Everything rests upon Me, as pearls are strung on a thread.", tel: "Arjuna, naaku paina emdi ledu. Anni naalo ne nilabaddaayi — pearls daaram meeda strung ayinaa la." },
        8: { eng: "I am the taste of water, O Arjuna, I am the light of the sun and moon, the syllable Om in all Vedas, sound in ether, and ability in humans.", tel: "Arjuna, neellu lo ruchi nenu, surya chandra lo veluugu nenu, Vedaalalo Om nenu, aakaasham lo sound nenu, manushulalo ability nenu." },
        14: { eng: "This divine energy of Mine, consisting of the three modes of material nature, is difficult to overcome. But those who surrender to Me can easily cross beyond it.", tel: "Naa ee divine maya, moodu gunalu kalisinadi, daatadam kashtam. Kani naaku surrender ayina vaalu sulabhanga daatutharu." },
        19: { eng: "After many births and deaths, one who is actually in knowledge surrenders unto Me, knowing Me to be the cause of all causes. Such a great soul is very rare.", tel: "Chala janmala tarvata, jnaanam pondina vaadu nannu surrender avutadu — nenu annitiki kaaranam ani telsukunni. Ala unna mahaatma chala rare." },
        26: { eng: "O Arjuna, I know everything that has happened in the past, all that is happening in the present, and all that is yet to come. But no one knows Me.", tel: "Arjuna, gaatham lo jarigindi, present lo jarugutondi, future lo jarugabothundi — anta naaku telusu. Kani nannu evvariki teliiyadu." },
      };
      const gv = key_verses[n] || { eng: `Krishna reveals His divine nature, explaining how He is the source of everything and how different types of people approach Him, Verse ${n}.`, tel: `Krishna tana divine nature ni reveal chestunnadu — tananu nundi antha puttindani, different people tananu ela approach avutaro cheptunnadu, Verse ${n}.` };
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
        1: { eng: "Arjuna asked: O Krishna, what is Brahman? What is the self? What is action? What is the material manifestation? And what are the demigods?", tel: "Arjuna adigadu — Krishna, Brahman ante emiti? Atma emiti? Karma emiti? Material manifestation emiti? Devathalu enti?" },
        5: { eng: "And whoever, at the end of life, quits the body remembering Me alone, attains My nature. Of this there is no doubt.", tel: "Charamam lo body vadilesthu nannu matrame remember chese vaadu naa swaroopaaniki vasthadu — ilo sandheham ledu." },
        6: { eng: "Whatever state of being one remembers when quitting the body, O Arjuna, that state one will attain without fail.", tel: "Body vadilesthu evarini remember chesthey aa sthiti ne ponduthav, Arjuna — idi definite." },
        7: { eng: "Therefore, Arjuna, remember Me at all times and fight. With your mind and intellect fixed on Me, you will surely come to Me.", tel: "Anduke Arjuna, eppuduu nannu remember chesthu fight cheyyi. Mind buddhi naalo fix chesthe, nuvvu naa daagariki tappaka vasthav." },
        13: { eng: "Uttering the sacred syllable Om, the single-syllabled Brahman, and remembering Me, one who departs from the body attains the supreme goal.", tel: "Om ane okka aksharam uccharisthu, nannu remember chesthu body vadilina vaadu — paramapadam ponduthadu." },
        15: { eng: "After attaining Me, the great souls who have achieved the highest perfection never return to this temporary, miserable world.", tel: "Nannu pondina mahaatmalu — highest perfection chesina vaalu — ee temporary, dukhamayana lokam ki malli raaru." },
        20: { eng: "But beyond this unmanifest nature, there is another eternal unmanifest existence, which does not perish even when all beings are destroyed.", tel: "Ee avyakta prakruti ki aavala inka oka shaashwata avyakta existence undi — anni praanulu naashanam ayina kuda adi podu." },
      };
      const gv = key_verses[n] || { eng: `Krishna explains the nature of Brahman, the cycle of creation, and how to attain the supreme destination through remembrance of God, Verse ${n}.`, tel: `Krishna Brahman swabhavam, srushti chakram, God ni remember cheyyadam dwara paramapadam gurinchi cheptunnadu, Verse ${n}.` };
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
        1: { eng: "Krishna said: Because you are not envious, I shall now impart to you this most secret knowledge combined with realization, knowing which you will be freed from the miseries of material existence.", tel: "Krishna cheppadu — Nuvvu asuya leni vaadivi kabatti, ee most secret jnaanam neeku cheptanu — idi telusthe material miseries nundi free avutav." },
        2: { eng: "This knowledge is the king of all knowledge, the most secret of all secrets. It is the purest knowledge, directly perceivable, righteous, easy to practice, and imperishable.", tel: "Idi raja vidya — anni vidyalalo raaju, anni secrets lo most secret. Pure, direct ga telusthundi, dharmam, easy ga practice cheyyochu, shaashwatam." },
        4: { eng: "By Me, in My unmanifested form, this entire universe is pervaded. All beings are in Me, but I am not in them.", tel: "Naa avyakta roopam lo ee universe antaa vyaapinchi unnanu. Anni praanulu naalo unnaayi, kani nenu vaallo leenu." },
        22: { eng: "To those who worship Me with love, always thinking of Me, I carry what they lack and preserve what they already have.", tel: "Nannu prema tho worship chesi, eppudu nannu talachukone vaallaki — vaallaki leniidi nenu ista, vaallaki undi kaapaadutha." },
        26: { eng: "If one offers Me with devotion a leaf, a flower, a fruit, or water, I accept that offering of love from the pure-hearted.", tel: "Bhakti tho oka aaku, puvvu, pandu, neellu — emaina ichhinaa nenu accept chesthanu — pure heart nundi vasthe." },
        27: { eng: "Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform — do that as an offering to Me.", tel: "Nuvvu em chesina, em thinna, em samarpinchina, em dhaanam chesina, em tapas chesina — antha naaku arpana ga cheyyi." },
        29: { eng: "I am equally disposed to all living beings. No one is hateful or dear to Me. But those who worship Me with devotion — they are in Me and I am in them.", tel: "Nenu andari pattla samaanam ga untanu. Naaku evvaru dvesham, evvaru ishta ledu. Kani bhakti tho worship chesevaallu naalo unnaru, nenu vaallo unnanu." },
        34: { eng: "Engage your mind always in thinking of Me, become My devotee, worship Me, and bow to Me. Thus absorbed in Me, you will come to Me.", tel: "Nee mind eppudu naalo nilpuchu, naa bhaktudu avvu, nannu worship cheyyi, naaku namaskaarinchu. Naalo nimagnudu ayi naa dagariki vasthav." },
      };
      const gv = key_verses[n] || { eng: `Krishna reveals the most confidential knowledge about devotion, His all-pervading nature, and how to attain Him through love and surrender, Verse ${n}.`, tel: `Krishna most confidential jnaanam, bhakti, tana vyapakatha gurinchi cheptunnadu — prema, sharanagati dwara tananu ela pondalo, Verse ${n}.` };
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
        1: { eng: "Krishna said: O mighty-armed Arjuna, listen again to My supreme word, which I shall speak to you for your benefit, as you are dear to Me.", tel: "Krishna cheppadu — Arjuna, naa supreme word malli vinu — nee benefit kosam cheptanu, endukante nuvvu naaku istam." },
        8: { eng: "I am the origin of all creation. Everything emanates from Me. The wise who know this perfectly worship Me with great faith and devotion.", tel: "Nenu antha srushti ki moolam. Antha naanundi vasthundi. Idi telsukunna wise people nannu goppa shraddha, bhakti tho worship chestaru." },
        10: { eng: "To those who are constantly devoted and worship Me with love, I give the understanding by which they can come to Me.", tel: "Nirantaram bhakti tho nannu worship chesevallaki, nenu vaallaki buddhi istanu — aa buddhi dwara vaalu naa daagariki vastharu." },
        11: { eng: "Out of compassion for them, I, dwelling in their hearts, destroy the darkness of ignorance with the shining lamp of knowledge.", tel: "Vaalla meeda karunatho, vaalla hearts lo undi, nenu jnanam ane deepam tho ajnaanam ane cheekatini naashanam chestanu." },
        20: { eng: "I am the Self, O Arjuna, seated in the hearts of all creatures. I am the beginning, the middle, and the end of all beings.", tel: "Arjuna, nenu andari hearts lo unna atma ni. Anni praanula beginning, middle, end nenu." },
        21: { eng: "Among the celestial gods (Adityas) I am Vishnu, among lights I am the radiant sun, among wind gods (Maruts) I am Marichi, among stars I am the moon.", tel: "Adityas lo nenu Vishnu ni, lights lo nenu Surya ni, Maruts lo nenu Marichi ni, nakshatraalo nenu Chandra ni." },
        33: { eng: "Of letters I am the letter A, and among compound words I am the dual compound. I am also inexhaustible time, and among creators I am Brahma.", tel: "Aksharaalo nenu A ni, compound words lo nenu dwandwa ni. Nenu inexhaustible kaalam ni, creators lo nenu Brahma ni." },
        36: { eng: "I am the gambling of cheats, the splendor of the splendid. I am victory, I am determination, and I am the strength of the strong.", tel: "Nenu cheatings lo gambling ni, splendid vaallo splendor ni. Nenu victory ni, determination ni, strong vaallo strength ni." },
        41: { eng: "Whatever being is glorious, prosperous, or powerful — know that it springs from but a spark of My splendor.", tel: "Edi glorious ga, prosperous ga, powerful ga untundo — adi naa tejas lo chinna spark nundi vacchinadani telusuko." },
        42: { eng: "But what need is there for all this detailed knowledge, O Arjuna? With a single fragment of Myself, I pervade and support this entire universe.", tel: "Kani Arjuna, ee details antha enduku? Naa oka chinna amsham tho nenu ee universe antaa vyapinchi, support chestunnanu." },
      };
      const gv = key_verses[n] || { eng: `Krishna describes His divine manifestations and opulences present throughout creation, showing how He is present in the best of everything, Verse ${n}.`, tel: `Krishna tana divine vibhutulu — creation lo tana opulences gurinchi cheptunnadu, annitlo best ga tananu ela kanuguntaro, Verse ${n}.` };
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
        1: { eng: "Arjuna said: By the supreme spiritual instruction You have given me, my delusion is now dispelled. I have heard from You in detail about the origin and dissolution of all beings.", tel: "Arjuna annadu — Krishna, nuvvu ichina spiritual instruction valla naa moham poyindi. Anni praanula origin, dissolution gurinchi detail ga vinnanu." },
        3: { eng: "O Supreme Lord, as You have described Yourself, I now desire to see Your divine cosmic form, O greatest of all personalities.", tel: "O Supreme Lord, nuvvu cheppinatte nee divine cosmic form ni chudalanukuntunnanu — nee vishwarupa ni chupinchu." },
        5: { eng: "Krishna said: O Arjuna, behold My hundreds and thousands of divine forms of various colors and shapes.", tel: "Krishna cheppadu — Arjuna, naa hundreds thousands divine forms ni chudu — different colors, different shapes." },
        9: { eng: "Sanjaya said: O King, having spoken thus, the Supreme Lord of Yoga, Krishna, then revealed to Arjuna His supreme, divine, cosmic form.", tel: "Sanjaya cheppadu — O Raja, ila cheppesaka Krishna Arjuna ki tana supreme divine cosmic form ni reveal chesadu." },
        12: { eng: "If hundreds of thousands of suns were to rise at once into the sky, their radiance might resemble the effulgence of the Supreme Person in that universal form.", tel: "Vela suuryulu okesaari aakasham lo udayinchithe — aa radiance ee Vishwarupa veluugu laga undochu." },
        15: { eng: "Arjuna said: O Lord, I see in Your body all the gods, various living entities, Lord Brahma seated on the lotus, Lord Shiva, all the sages, and divine serpents.", tel: "Arjuna annadu — Prabhu, nee body lo devathalu, praanulu, Brahma, Shiva, rishulu, divine serpents — antha naaku kanipistundi." },
        20: { eng: "This space between heaven and earth and all the quarters is pervaded by You alone. Seeing this wonderful and terrible form, the three worlds tremble with fear, O great-souled one.", tel: "Swargam bhumi madhya, annihotla nuvve vyapinchi unnav. Ee adbhutamaina bhayankara roopam chusi moodu lokalu bhayam tho vankutunnaayi." },
        32: { eng: "Krishna said: I am time, the great destroyer of the worlds, and I have come here to destroy all people. Even without your participation, all the warriors on both sides will be slain.", tel: "Krishna cheppadu — Nenu Kalam ni, lokala naashakudu ni. Nuvvu fight cheyakpoyinaaa, ee warriors andaru chaavutaaru." },
        33: { eng: "Therefore, arise and attain glory. Conquer your enemies and enjoy a flourishing kingdom. They have already been destroyed by Me. You are merely an instrument, O Arjuna.", tel: "Anduke lechi glory pondu, enemies ni gelevu, rajyam aanandhinchu. Vaalu already nenu champaanu — nuvvu just instrument vi, Arjuna." },
        36: { eng: "Arjuna said: O Krishna, the world becomes joyful upon hearing Your name, and everyone becomes attached to You. The perfected beings offer their respects, and the demons flee in fear.", tel: "Arjuna annadu — Krishna, nee name vinte world santhoshistundi, andaru nee tho attach avutaaru. Siddha purusullu respect istaru, raakshasulu bhayam tho paaripoataru." },
        46: { eng: "O universal form, O thousand-armed Lord, I wish to see You in Your four-armed form, with the crown, mace, disc, and conch in Your hands.", tel: "O Vishwarupa, O thousand arms unna Prabhu, nenu nee four-armed form lo chudalanukuntunnanu — kiritam, gada, chakram, shankham tho." },
        54: { eng: "But by undivided devotion alone can I be known, seen, and entered into, O Arjuna. Only exclusive devotion can reveal My true form.", tel: "Kani undivided bhakti dwara matrame nannu teluskovachu, chuudalavhachu, cherukovalavhachu, Arjuna. Exclusive bhakti matrame naa true form ni reveal chestondi." },
        55: { eng: "One who works for Me, regards Me as the supreme goal, is devoted to Me, is free from attachment, and bears enmity toward no creature — such a devotee comes to Me.", tel: "Naa kosam pani chese vaadu, nannu supreme goal ga chuse vaadu, naa bhaktudu, attachment leni vaadu, evariki dvesham leni vaadu — vaadu naa daggariki vasthadu." },
      };
      const gv = key_verses[n] || { eng: `This verse describes the cosmic form of Krishna and the reactions of Arjuna and others upon witnessing the universal form (Vishwarupa), Verse ${n}.`, tel: `Krishna vishwarupa darshanam — cosmic form, daani meeda Arjuna reaction gurinchi ee verse lo cheptunnadu, Verse ${n}.` };
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
        1: { eng: "Arjuna asked: Between those who worship You with devotion and those who worship the imperishable, unmanifested Brahman — which of these is better versed in Yoga?", tel: "Arjuna adigadu — Neeku bhakti tho worship chesevaallu, unmanifest Brahman ni worship chesevaallu — evaru better yogis?" },
        2: { eng: "Krishna said: Those who fix their minds on Me and always engage in My worship with supreme faith — I consider them to be the most perfect in Yoga.", tel: "Krishna cheppadu — Mind naalo fix chesi, supreme faith tho nannu worship chesevaallu — nenu vaallani most perfect yogis ga consider chesthanu." },
        6: { eng: "For those who worship Me, dedicating all their actions to Me, regarding Me as the supreme goal, meditating on Me with exclusive devotion...", tel: "Nannu worship chesi, anni actions naaku dedicate chesi, nannu supreme goal ga chusi, exclusive devotion tho dhyaninche vaallaki..." },
        7: { eng: "...for them, whose minds are set on Me, I swiftly become their deliverer from the ocean of birth and death, O Arjuna.", tel: "...vaalla minds naalo set chesina vaallaki, nenu birth death samsara saagaram nundi deliverer avuthanu, twaragane, Arjuna." },
        8: { eng: "Fix your mind on Me alone, let your intellect dwell in Me. You will then live in Me alone. There is no doubt about this.", tel: "Nee mind nannu meeda ne fix cheyyi, nee buddhi naalo ne undu. Aithe nuvvu naalo ne bratukuthav — ilo sandheham ledu." },
        13: { eng: "One who has no hatred for any creature, who is friendly and compassionate, who is free from possessiveness and ego, equal in joy and sorrow, forgiving...", tel: "Evari meeda dvesham leni vaadu, friendly compassionate unna vaadu, possessiveness ego leni vaadu, sukham dukham lo samanam, forgiving..." },
        14: { eng: "...ever content, steady in meditation, self-controlled, with firm conviction, whose mind and intellect are dedicated to Me — such a devotee is very dear to Me.", tel: "...eppudu content, dhyanam lo steady, self-controlled, firm conviction, mind buddhi naaku dedicated — aa bhaktudu naaku chala istam." },
        15: { eng: "One who does not disturb the world, and whom the world does not disturb, who is free from joy, envy, fear, and anxiety — such a person is dear to Me.", tel: "Evarini disturb cheyyanivadu, evari valla disturb kaaanivadu, joy envy fear anxiety nundi free — vaadu naaku istam." },
        20: { eng: "Those who follow this immortal path of dharma as described above, with full faith and devotion, regarding Me as the supreme goal — they are exceedingly dear to Me.", tel: "Paina cheppina ee amruta dharma maargam ni poorna shraddha bhakti tho follow chesi, nannu supreme goal ga chuse vaalu — vaalu naaku maha priyam." },
      };
      const gv = key_verses[n] || { eng: `Krishna describes the qualities of an ideal devotee and explains how devotion leads to the supreme goal, Verse ${n}.`, tel: `Krishna ideal bhaktudu lakshanalanu cheptunnadu — bhakti ela supreme goal ki lead avuthundo, Verse ${n}.` };
      return { chapter: 12, sloka: n, sanskrit_devanagari: `॥ १२.${n} ॥`, sanskrit_iast: `[Chapter 12, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 12 Verse ${n} explanation` };
    }),
  },
];
