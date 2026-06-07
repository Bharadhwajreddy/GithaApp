import { Chapter } from './types';

export const chapters13to18: Chapter[] = [
  {
    number: 13,
    name_sanskrit: "क्षेत्रक्षेत्रज्ञविभागयोगः",
    name_english: "Kshetra Kshetrajna Vibhaga Yoga",
    name_telugu: "Kshetra Kshetrajna Vibhaga Yogam",
    description: "The Yoga of the Field and the Knower of the Field. Krishna explains the difference between the body (field) and the soul (knower of the field).",
    total_slokas: 35,
    slokas: Array.from({ length: 35 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Krishna said: O Arjuna, this body is called the field (kshetra), and one who knows this body is called the knower of the field (kshetrajna).", tel: "Krishna cheppadu — Arjuna, ee body ni kshetram (field) antaru, ee body ni telisinavaadini kshetrajna (knower of the field) antaru." },
        2: { eng: "O Arjuna, know Me to be the knower of the field in all bodies. The knowledge of the field and the knower of the field I regard as true knowledge.", tel: "Arjuna, anni bodies lo kshetrajna nenu ani telusuko. Kshetram, kshetrajna gurinchi jnaanam — adey nija jnaanam ani naa abhiprayam." },
        8: { eng: "Humility, modesty, nonviolence, tolerance, simplicity, approaching a teacher, purity, steadfastness, and self-control — these I declare to be knowledge.", tel: "Vinayam, modesty, ahimsa, tolerance, simplicity, guru seva, purity, steadfastness, self-control — ivvanni jnaanam ani cheptunnanu." },
        13: { eng: "I shall describe that which is to be known, knowing which one attains immortality — the beginningless supreme Brahman, which is said to be neither existent nor non-existent.", tel: "Edi teluskovaalo adi cheptanu — telisukunte amrutatvam vasthundi. Beginningless supreme Brahman — undi ante undi, ledu ante ledu." },
        28: { eng: "One who sees the Supreme Lord residing equally in all beings, the imperishable within the perishable — that person truly sees.", tel: "Naashanam ayyey vaallo naashanam avvani Supreme Lord ni samanam ga chuse vaadu — vaade nijanga chustunnadu." },
        34: { eng: "Those who understand the distinction between the field and the knower of the field, and the process of liberation from material nature, through the eye of knowledge — they attain the Supreme.", tel: "Jnana netram tho kshetram kshetrajna teda ni, prakruti nundi liberation process ni ardham chesukune vaalu — Supreme ni pondutharu." },
      };
      const gv = key_verses[n] || { eng: `Krishna explains the nature of the body (field), the soul (knower), and the Supreme, and what constitutes true knowledge, Verse ${n}.`, tel: `Krishna body (kshetram), atma (kshetrajna), Supreme swabhavam, nija jnaanam gurinchi cheptunnadu, Verse ${n}.` };
      return { chapter: 13, sloka: n, sanskrit_devanagari: `॥ १३.${n} ॥`, sanskrit_iast: `[Chapter 13, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 13 Verse ${n} explanation` };
    }),
  },
  {
    number: 14,
    name_sanskrit: "गुणत्रयविभागयोगः",
    name_english: "Gunatraya Vibhaga Yoga",
    name_telugu: "Gunatraya Vibhaga Yogam",
    description: "The Yoga of the Three Modes of Material Nature. Krishna explains the three gunas — sattva (goodness), rajas (passion), and tamas (ignorance).",
    total_slokas: 27,
    slokas: Array.from({ length: 27 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Krishna said: I shall again declare to you that supreme knowledge, the best of all knowledge, by knowing which all the sages have attained supreme perfection.", tel: "Krishna cheppadu — Supreme jnaanam, anni jnaanaalo best, malli cheptanu — idi telisukunni sages andaru supreme perfection pondaru." },
        5: { eng: "Material nature consists of three modes — sattva (goodness), rajas (passion), and tamas (ignorance). These modes bind the imperishable soul to the body, O Arjuna.", tel: "Prakruti moodu gunaalu — sattva (goodness), rajas (passion), tamas (ignorance). Ee gunalu atma ni body ki bind chesthaayi, Arjuna." },
        6: { eng: "Of these, sattva (goodness), being pure, is illuminating and free from disease. It binds one through attachment to happiness and knowledge.", tel: "Vaatilo sattva guna pure, velugu icchedi, roga rahitam. Kani idi happiness, jnaanam meeda attachment dwara bind chestondi." },
        7: { eng: "Rajas (passion), know it to be of the nature of attraction and longing. It binds the soul through attachment to action.", tel: "Rajas gunam attraction, longing swabhavam. Idi atma ni action meeda attachment dwara bind chesthundi." },
        8: { eng: "Tamas (ignorance), know it to be born of ignorance, deluding all beings. It binds the soul through negligence, laziness, and excessive sleep.", tel: "Tamas gunam ajnaanam nundi puttindi, praanulani moham lo paaresthundi. Idi negligence, aalasyam, ekkuva nidra dwara bind chesthundi." },
        22: { eng: "Krishna said: One who does not hate illumination (sattva), activity (rajas), or delusion (tamas), nor longs for them when they are absent...", tel: "Krishna cheppadu — Illumination, activity, delusion — raanappudu korukonivadu, vachinappudu dweshinchani vaadu..." },
        23: { eng: "...who sits apart like a witness, unshaken by the gunas, knowing that they alone act, who stands firm and does not waver...", tel: "...sakshi laga undi, gunas valla kadalani vaadu, gunale act avuthunnaayi ani telisinavaadu, sthiranga nilabadina vaadu..." },
        26: { eng: "One who serves Me with unflinching devotion transcends the three modes of material nature and becomes fit for realization of Brahman.", tel: "Nirantara bhakti tho nannu serve chese vaadu — moodu gunalani daati — Brahman sakshatkaaraniki arhudu avutaadu." },
      };
      const gv = key_verses[n] || { eng: `Krishna explains the three modes of material nature and how to transcend them to attain liberation, Verse ${n}.`, tel: `Krishna moodu gunalu — sattva, rajas, tamas — vaati prabhavam, vaatini daatadam gurinchi cheptunnadu, Verse ${n}.` };
      return { chapter: 14, sloka: n, sanskrit_devanagari: `॥ १४.${n} ॥`, sanskrit_iast: `[Chapter 14, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 14 Verse ${n} explanation` };
    }),
  },
  {
    number: 15,
    name_sanskrit: "पुरुषोत्तमयोगः",
    name_english: "Purushottama Yoga",
    name_telugu: "Purushottama Yogam",
    description: "The Yoga of the Supreme Person. Krishna describes the eternal tree of material existence and reveals Himself as the Supreme Person (Purushottama).",
    total_slokas: 20,
    slokas: Array.from({ length: 20 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Krishna said: There is a banyan tree with its roots upward and branches downward. Its leaves are the Vedic hymns. One who knows this tree is the knower of the Vedas.", tel: "Krishna cheppadu — Oka ashwattha vruksham roots paina, branches kinda undi. Daani leaves Vedic hymns. Ee tree telisinavaade Veda jnaani." },
        6: { eng: "That supreme abode of Mine is not illumined by the sun or moon, nor by fire or electricity. Those who reach it never return to this material world.", tel: "Naa supreme dhamaaniki surya velugu avasaram ledu, chandra agni kuda avasaram ledu. Akkadiki vellinaavadu malli ee material world ki raadu." },
        7: { eng: "The living entities in this world are My eternal fragmental parts. Due to conditioned life, they are struggling with the six senses including the mind.", tel: "Ee lokam lo jeevulu naa shaashwata amshaalu. Conditioned life lo unnanduvalla, mind tho sahaa aaaru indriyaalato struggle chestunnaru." },
        15: { eng: "I am seated in the hearts of all. From Me come memory, knowledge, and forgetfulness. I am the one to be known by all the Vedas, the compiler of Vedanta, and the knower of the Vedas.", tel: "Nenu andari hearts lo kurchunna. Naanundi memory, jnaanam, vismaranam vasthaayi. Anni Vedas dwara telusukovaalsindi nenu, Vedanta karta nenu, Veda jnaani nenu." },
        16: { eng: "There are two types of beings in the world — the perishable and the imperishable. All material beings are perishable, and the soul is imperishable.", tel: "Lokam lo rendu rakala praanulu unnaayi — ksharam (perishable), aksharam (imperishable). Material vaalu ksharam, atma aksharam." },
        17: { eng: "But besides these two, there is the Supreme Person (Purushottama), the indestructible Lord who pervades and sustains the three worlds.", tel: "Kani ee iddari kanna supreme purushudu — Purushottama — naashnam avvani Prabhu, moodu lokaalanu vyapinchi sustain chestondi." },
        18: { eng: "Because I am transcendental, beyond both the perishable and the imperishable, I am celebrated both in the world and in the Vedas as the Supreme Person (Purushottama).", tel: "Nenu ksharam, aksharam renditiki ateetam — anduke Vedas lo, lokam lo kuda Purushottama ga prasiddhudni." },
        19: { eng: "Whoever knows Me, without doubt, as the Supreme Person — that person knows everything and worships Me with all their being, O Arjuna.", tel: "Evaru nannu sandheham lekunda Purushottama ga telusukuntaaro — vaadu antha telusukunnnaattu, vaadu naa bhakti lo poortiga untaadu, Arjuna." },
        20: { eng: "This is the most confidential teaching, O Arjuna. Whoever understands this will become wise and will have fulfilled all duties.", tel: "Arjuna, idi most confidential bodhana. Idi ardham chesukune vaadu wise avutaadu, vaadi duties anni fulfill avutaayi." },
      };
      const gv = key_verses[n] || { eng: `Krishna describes the nature of the supreme person and the eternal tree of material existence, Verse ${n}.`, tel: `Krishna Purushottama swaroopam, material existence vruksha swabhavam gurinchi cheptunnadu, Verse ${n}.` };
      return { chapter: 15, sloka: n, sanskrit_devanagari: `॥ १५.${n} ॥`, sanskrit_iast: `[Chapter 15, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 15 Verse ${n} explanation` };
    }),
  },
  {
    number: 16,
    name_sanskrit: "दैवासुरसम्पद्विभागयोगः",
    name_english: "Daivasura Sampad Vibhaga Yoga",
    name_telugu: "Daivasura Sampad Vibhaga Yogam",
    description: "The Yoga of Divine and Demoniac Qualities. Krishna describes the divine and demoniac natures that exist in human beings.",
    total_slokas: 24,
    slokas: Array.from({ length: 24 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Krishna said: Fearlessness, purity of heart, steadfastness in knowledge and yoga, charity, self-control, sacrifice, study of scriptures, austerity, and simplicity...", tel: "Krishna cheppadu — Bhaya rahitam, hrudaya shuddhi, jnana yoga lo sthiratva, danam, indriya nigraham, yajnam, shastra adhyayanam, tapas, saadhaaranam..." },
        2: { eng: "...nonviolence, truthfulness, freedom from anger, renunciation, peacefulness, not finding faults in others, compassion, freedom from covetousness, gentleness, modesty, and steadiness...", tel: "...ahimsa, satyam, krodham lekunda, tyagam, shaanti, ithariala thappulu chudakapovadam, karunam, lobham lekunda, mrududam, vinayam, sthairyam..." },
        3: { eng: "...vigor, forgiveness, fortitude, cleanliness, freedom from malice, and absence of pride — these are the divine qualities, O Arjuna, born of divine nature.", tel: "...tejas, kshamapu, dhairyam, shuchitva, dvesham lekunda, garvam lekunda — ivvanni divine gunas, Arjuna, daiva sampad." },
        4: { eng: "Hypocrisy, arrogance, pride, anger, harshness, and ignorance — these are the qualities of those born with demoniac nature, O Arjuna.", tel: "Dambham, darpam, abhimanam, krodham, kruuratva, ajnaanam — ivvi demonic swabhavam vaalla gunas, Arjuna." },
        5: { eng: "The divine qualities lead to liberation, while the demoniac qualities lead to bondage. Do not worry, O Arjuna — you are born with divine qualities.", tel: "Divine gunas liberation ki lead avutaayi, demonic gunas bondage ki. Worry avvakuu Arjuna — nuvvu divine gunas tho puttinavaadivi." },
        21: { eng: "There are three gates to hell that lead to the self-destruction of the soul — lust, anger, and greed. Therefore, one should abandon all three.", tel: "Narakaaniki moodu gates unnaayi — kama, krodham, lobham. Ivi atma ni naashanam chesthaayi. Anduke ee moodu vadilipettu." },
        24: { eng: "Therefore, let the scriptures be your authority in determining what should be done and what should not be done. Know the scriptural injunctions and act accordingly.", tel: "Anduke shastras ne nee authority. Emi cheyali, emi cheyakudadu — shastralu dwara telusuko. Shastra niyamala prakaram act cheyyi." },
      };
      const gv = key_verses[n] || { eng: `Krishna describes the divine and demoniac qualities, and how one should cultivate divine nature for spiritual progress, Verse ${n}.`, tel: `Krishna divine, demonic gunas gurinchi, spiritual progress kosam divine nature ni develop cheyyadam gurinchi cheptunnadu, Verse ${n}.` };
      return { chapter: 16, sloka: n, sanskrit_devanagari: `॥ १६.${n} ॥`, sanskrit_iast: `[Chapter 16, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 16 Verse ${n} explanation` };
    }),
  },
  {
    number: 17,
    name_sanskrit: "श्रद्धात्रयविभागयोगः",
    name_english: "Sraddhatraya Vibhaga Yoga",
    name_telugu: "Sraddhatraya Vibhaga Yogam",
    description: "The Yoga of the Three Divisions of Faith. Krishna explains how faith, food, sacrifice, austerity, and charity are influenced by the three gunas.",
    total_slokas: 28,
    slokas: Array.from({ length: 28 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Arjuna asked: O Krishna, what is the status of those who do not follow the principles of scripture but worship according to their own faith? Is their faith in goodness, passion, or ignorance?", tel: "Arjuna adigadu — Krishna, shastra niyamalu follow cheyakunda tama faith prakaram worship chese vaala status emiti? Vaalla faith sattva, rajas, leka tamas aa?" },
        2: { eng: "Krishna said: According to the three modes of material nature acquired by the embodied soul, faith can be of three kinds — sattvic, rajasic, or tamasic.", tel: "Krishna cheppadu — Embodied soul acquire chesina gunas prakaram, faith moodu rakalu — sattvic, rajasic, tamasic." },
        3: { eng: "The faith of each person is in accordance with their nature, O Arjuna. A person is made of their faith. Whatever faith they have, that is what they are.", tel: "Prati vaadi faith vaadi swabhavam prakaram untundi, Arjuna. Manishi tana faith tho form avutaadu. Evariki e faith untey vaadu adey." },
        7: { eng: "Even the food each person prefers is of three kinds, according to the three modes of material nature. The same is true of sacrifice, austerity, and charity.", tel: "Prati vaadiki ishtamaina food kuda moodu rakalu — gunas prakaram. Yajnam, tapas, daanam kuda ala ne moodu rakalu." },
        20: { eng: "Charity given out of duty, without expectation of return, at the proper time and place, to a worthy person — that charity is considered sattvic.", tel: "Duty ga, return expect cheyakunda, sari ayina time, place lo, worthy person ki ichche daanam — adi sattvic daanam." },
        23: { eng: "Om Tat Sat — this has been declared as the threefold designation of Brahman. By that, the Brahmanas, the Vedas, and the sacrifices were ordained of old.", tel: "Om Tat Sat — idi Brahman moodu vidhaala designation. Daani dwara Brahmanulu, Vedas, yajnalu puraanatana kaalam lo nirdeshinchabaddaayi." },
        28: { eng: "Whatever is sacrificed, given, or performed, and whatever austerity is practiced without faith — it is called 'asat' (unreal), O Arjuna. It is of no value here or hereafter.", tel: "Shraddha lekunda chese yajnam, daanam, tapas — adi 'asat' (unreal) antaru, Arjuna. Adi ikkada ainaa, akkada ainaa value ledu." },
      };
      const gv = key_verses[n] || { eng: `Krishna explains how faith, food, sacrifice, austerity, and charity are each divided into three categories based on the three modes of nature, Verse ${n}.`, tel: `Krishna faith, food, sacrifice, tapas, daanam anni moodu gunas prakaram ela divide avuthaayi cheptunnadu, Verse ${n}.` };
      return { chapter: 17, sloka: n, sanskrit_devanagari: `॥ १७.${n} ॥`, sanskrit_iast: `[Chapter 17, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 17 Verse ${n} explanation` };
    }),
  },
  {
    number: 18,
    name_sanskrit: "मोक्षसन्यासयोगः",
    name_english: "Moksha Sanyasa Yoga",
    name_telugu: "Moksha Sanyasa Yogam",
    description: "The Yoga of Liberation through Renunciation. The final chapter summarizes all teachings and Krishna gives His ultimate instruction to Arjuna.",
    total_slokas: 78,
    slokas: Array.from({ length: 78 }, (_, i) => {
      const n = i + 1;
      const key_verses: Record<number, { eng: string; tel: string }> = {
        1: { eng: "Arjuna said: O mighty-armed Krishna, I wish to understand the nature of sannyasa (renunciation) and tyaga (giving up), and the difference between the two.", tel: "Arjuna annadu — Krishna, sannyasam (renunciation), tyagam (giving up) swabhavam, vaati madhya teda — idi ardham cheskovalanukuntunnanu." },
        2: { eng: "Krishna said: The wise understand sannyasa as giving up actions motivated by desire. The learned declare tyaga as giving up the fruits of all actions.", tel: "Krishna cheppadu — Desire tho chesie actions vadaladam sannyasam ani wise people antaru. Actions phalam vadaladam tyagam ani learned people antaru." },
        5: { eng: "Acts of sacrifice, charity, and penance should not be abandoned. They must be performed, for sacrifice, charity, and penance are purifiers of the wise.", tel: "Yajnam, daanam, tapas — ivvi vadileyakudadu. Cheyali. Endukante ivvi wise people ni purify chesthaayi." },
        6: { eng: "All these activities should be performed without attachment and without expectation of results. This is My definite and supreme judgment, O Arjuna.", tel: "Ee activities anni attachment lekunda, results expect cheyakunda cheyali. Idi naa definite supreme nirnayam, Arjuna." },
        14: { eng: "The five factors that determine the accomplishment of all action are: the body, the doer, the various senses, the various functions, and the presiding deity (divine will).", tel: "Prati action complete avadaniki aidu factors — body, karta (doer), different senses, different functions, daivam (divine will)." },
        17: { eng: "One who is free from the notion of being the doer, whose intellect is not tainted — even though they kill in this world, they neither kill nor are bound by action.", tel: "Nenu karta anukune feeling leni vaadu, buddhi tainted kaani vaadu — ee lokam lo champinaaa champadu, karma bandhanam lo padadu." },
        20: { eng: "That knowledge by which one sees the one imperishable reality in all beings, undivided in the divided — know that knowledge to be sattvic.", tel: "Anni praanullo undivided oka imperishable reality ni chuse jnaanam — divided lo undivided ni chuse jnaanam — adi sattvic jnaanam." },
        23: { eng: "Action that is ordained by scripture, performed without attachment, without love or hatred, and without desire for reward — that action is sattvic.", tel: "Shastra dwara nirdeshinchabadiina, attachment lekunda, prema dvesham lekunda, reward aasa lekunda chese pani — adi sattvic karma." },
        33: { eng: "The unwavering determination by which, through yoga, one controls the activities of the mind, the life breath, and the senses — that determination is sattvic, O Arjuna.", tel: "Yoga dwara mind, pranam, senses control chese sthiramaina determination — adi sattvic determination, Arjuna." },
        37: { eng: "That happiness which seems like poison in the beginning but is like nectar in the end, born of the light of self-knowledge — that happiness is sattvic.", tel: "Modatlo visham laga, chivari ki amrutam laga unna happiness — atma jnana veluugu nundi puttindi — adi sattvic sukham." },
        38: { eng: "That happiness which arises from the contact of the senses with their objects, which seems like nectar in the beginning but is like poison in the end — that is rajasic.", tel: "Senses objects contact nundi vacche happiness — modatlo amrutam laga, chivari ki visham laga untundi — adi rajasic sukham." },
        47: { eng: "It is better to perform one's own duty imperfectly than another's duty perfectly. By performing duties prescribed according to one's nature, a person does not incur sin.", tel: "Inkokaari duty perfect ga cheyyadam kanna nee own duty imperfect ga chesinaa better. Nee swabhavam prakaram duty chesthe paapam andinchadu." },
        54: { eng: "Established in Brahman, serene in the self, one neither grieves nor desires. Regarding all beings equally, such a person attains supreme devotion to Me.", tel: "Brahman lo sthiram, atma lo shaantham, grief desire lekunda, andari ni samanam ga chuse vaadu — naa supreme bhakti pondutaadu." },
        55: { eng: "By devotion one can truly know Me — who I am and what I am. Then, having known Me in truth, one enters into My being immediately.", tel: "Bhakti dwara nannu nijam ga telusukovalchu — nenu evadine, emitine. Nijam ga nannu telusukoni, immediate ga naa lo praveshisthadu." },
        56: { eng: "Even while performing all actions, one who takes refuge in Me, by My grace, attains the eternal imperishable abode.", tel: "Anni panulu chesthu kuda naa sharanaagathi lo unna vaadu, naa krupa valla, shaashwata akshara sthaanam pondutaadu." },
        61: { eng: "The Supreme Lord dwells in the hearts of all beings, O Arjuna, and by His divine power (maya) causes all beings to revolve as if mounted on a machine.", tel: "Supreme Lord andari hearts lo undi, Arjuna, tana maya dwara praanulni machine meeda mount ayinattu tirigisthunnadu." },
        63: { eng: "Thus I have explained to you this knowledge that is more secret than all secrets. Reflect on this fully, and then do as you wish.", tel: "Ila neeku annirakasyaalalo most secret jnaanam cheppanu. Poortiga aaochinchu, tarvaata nuvvu emcheyalankuntey adi cheyyi." },
        64: { eng: "Hear again My supreme word, the most secret of all. You are very dear to Me, therefore I shall tell you what is good for you.", tel: "Naa supreme vaakku malli vinu, most secret. Nuvvu naaku chala istam, anduke neeku manchidi cheptanu." },
        65: { eng: "Always think of Me, become My devotee, worship Me, and bow to Me. I promise you — you will surely come to Me, for you are very dear to Me.", tel: "Eppudu nannu talachukoo, naa bhaktudu avvu, nannu worship cheyyi, naaku namaskaarinchu. Nenu promise chestunnanu — nuvvu naa daggariki tappaka vasthav, endukante nuvvu naaku chala istam." },
        66: { eng: "Abandon all varieties of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.", tel: "Anni dharmas vadilesi nannu sharanagathi cheyyi. Nenu ninnu anni paapala nundi vimukthi chestanu. Bhayapadaku." },
        72: { eng: "O Arjuna, have you heard this with an attentive mind? Has your delusion born of ignorance been destroyed?", tel: "Arjuna, idi nuvvu shraddhaga vinnava? Nee ajnaanam valla vacchina moham poyindaa?" },
        73: { eng: "Arjuna said: O Krishna, my delusion is destroyed and I have regained my memory by Your grace. I am now firm and free from doubt. I shall act according to Your word.", tel: "Arjuna annadu — Krishna, naa moham poyindi, nee krupa valla naa smruti tirigindi. Ippudu sthiram ga, sandheham lekunda unnanu. Nee maata prakaram act chestanu." },
        76: { eng: "O King, remembering again and again this wonderful and sacred dialogue between Krishna and Arjuna, I rejoice at every moment.", tel: "O Raja, Krishna Arjuna madhya ee adbhutamaina pavitramaina samvaadam malli malli gurthu chesi, prati kshanam aanandisthunnanu." },
        78: { eng: "Wherever there is Krishna, the lord of yoga, and wherever there is Arjuna, the wielder of the bow — there will certainly be prosperity, victory, opulence, and righteousness. This is my conviction.", tel: "Ekkada Yogeshwara Krishna unnaro, ekkada dhanurdhari Arjuna unnaro — akkada samruddhi, vijayam, aishwaryam, dharma nishchayanga untaayi. Idi naa nirnayam." },
      };
      const gv = key_verses[n] || { eng: `Krishna provides the culminating wisdom on renunciation, duty, knowledge, and the path to liberation in the final chapter, Verse ${n}.`, tel: `Krishna tyagam, karma, jnaanam, moksha maargam gurinchi final chapter lo culminating wisdom cheptunnadu, Verse ${n}.` };
      return { chapter: 18, sloka: n, sanskrit_devanagari: `॥ १८.${n} ॥`, sanskrit_iast: `[Chapter 18, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 18 Verse ${n} explanation` };
    }),
  },
];
