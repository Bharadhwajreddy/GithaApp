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
        1: { eng: "Krishna said: O Arjuna, this body is called the field (kshetra), and one who knows this body is called the knower of the field (kshetrajna).", tel: "Ikkada Krishna em cheppadu antey — Arjuna, ee body ki kshetram ani peru. Oka polam laga annamata. Ee body ni lopalinundi telisinodu evaruntado, vadni kshetrajna antaru antey body ni know chesina vadu ani artham." },
        2: { eng: "O Arjuna, know Me to be the knower of the field in all bodies. The knowledge of the field and the knower of the field I regard as true knowledge.", tel: "Krishna emantunnadu antey — Arjuna, prati oka body lo kurchunna kshetrajna nenu ne ra. Body ante emiti, danilo unna atma ante emiti — ee rendu telusukovadam ne nijamaina jnanam ani naa feeling." },
        8: { eng: "Humility, modesty, nonviolence, tolerance, simplicity, approaching a teacher, purity, steadfastness, and self-control — these I declare to be knowledge.", tel: "Ikkada Krishna jnanam ante emiti cheptunnadu antey — vinayam, ahimsa, opikapaatnam, simplega undadam, guru daggariki velli nerchukovadam, suddham ga undadam, sthiram ga undadam, mind ni control cheskovadam — ivvanni jnanam lakshanalu." },
        13: { eng: "I shall describe that which is to be known, knowing which one attains immortality — the beginningless supreme Brahman, which is said to be neither existent nor non-existent.", tel: "Krishna em cheppadu antey — edi telusukunte chaavam undadu, aa vishayam cheptanu. Adi Brahman antaru — dani ki modalu ledu. Undi antey undi, ledu antey ledu — ala oka special existence adi." },
        28: { eng: "One who sees the Supreme Lord residing equally in all beings, the imperishable within the perishable — that person truly sees.", tel: "Evaraitey nashanam ayye ee body lo, nashanam avvani Bhagavantudni samaanam ga anni praanullo chustado — vade nijam ga chustunnadu. Migatha vaalu chustunnam anukuntaru kani kanlu moosukoni unnatlane." },
        34: { eng: "Those who understand the distinction between the field and the knower of the field, and the process of liberation from material nature, through the eye of knowledge — they attain the Supreme.", tel: "Jnanam ane kannu tho evaraitey body ki atma ki teda telusukuntaro, prakruti bandhanam nundi bayataki ela ravaalo ardham chesukuntaro — vaalu Supreme ni cheri potaru." },
      };
      const gv = key_verses[n] || { eng: `Krishna explains the nature of the body (field), the soul (knower), and the Supreme, and what constitutes true knowledge, Verse ${n}.`, tel: `Ikkada Krishna body ante emiti, danilo unna atma ante emiti, nijamaina jnanam ante emiti — ee vishayalu cheptunnadu, Verse ${n}.` };
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
        1: { eng: "Krishna said: I shall again declare to you that supreme knowledge, the best of all knowledge, by knowing which all the sages have attained supreme perfection.", tel: "Krishna em cheppadu antey — malli oka supreme jnanam cheptanu, anni jnanallo best idi. Idi telusukunna rishulu andaru highest perfection ki cheraru." },
        5: { eng: "Material nature consists of three modes — sattva (goodness), rajas (passion), and tamas (ignorance). These modes bind the imperishable soul to the body, O Arjuna.", tel: "Arjuna, prakruti lo moodu gunalu untayi antey — sattva ante manchitanam, rajas ante aasa korikalu, tamas ante badhakam ajnanam. Ee moodu gunalu atma ni body ki kattesesi pettestayai." },
        6: { eng: "Of these, sattva (goodness), being pure, is illuminating and free from disease. It binds one through attachment to happiness and knowledge.", tel: "Sattva gunam gurinchi cheptey — idi chala pure, velugu istundi, rogalu undavu. Kani ikkada trick emiti antey — happiness ki, jnanam ki attachment puttistundi, aa attachment dwara kattesi petestundi." },
        7: { eng: "Rajas (passion), know it to be of the nature of attraction and longing. It binds the soul through attachment to action.", tel: "Rajas gunam ante emiti antey — idi korikalu, aasa swabhavam. 'Idi kavali, adi kavali' ane feeling. Pani chestune undali ane feeling dwara atma ni kattesey gunnam idi." },
        8: { eng: "Tamas (ignorance), know it to be born of ignorance, deluding all beings. It binds the soul through negligence, laziness, and excessive sleep.", tel: "Tamas gunam ante — idi ajnanam nundi puttindi. Andarni moham lo padestundi. Enti chestam ane feeling, badhakam, ekkuva nidra — ivi dwara atma ni kattestundi." },
        22: { eng: "Krishna said: One who does not hate illumination (sattva), activity (rajas), or delusion (tamas), nor longs for them when they are absent...", tel: "Krishna em cheppadu antey — sattva vachinappudu, rajas vachinappudu, tamas vachinappudu — evaitey dweshinchadu, raakapotey korukonadu..." },
        23: { eng: "...who sits apart like a witness, unshaken by the gunas, knowing that they alone act, who stands firm and does not waver...", tel: "...sakshi laga pakkana kurchoni chustadu, gunalu valla kadilipodu, 'gunale tama pani tamu chestunnay' ani telisi, sthiram ga nilabadiuntadu..." },
        26: { eng: "One who serves Me with unflinching devotion transcends the three modes of material nature and becomes fit for realization of Brahman.", tel: "Evaraitey aagakunda bhakti tho nannu serve chestaru antey — vaalu ee moodu gunalani dati potaru, Brahman ni telusukunedanta varaku cherukovadam ki ready avtaru." },
      };
      const gv = key_verses[n] || { eng: `Krishna explains the three modes of material nature and how to transcend them to attain liberation, Verse ${n}.`, tel: `Ikkada Krishna moodu gunalu — sattva, rajas, tamas — ivi manishini ela control chestayo, vaatini ela datalo cheptunnadu, Verse ${n}.` };
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
        1: { eng: "Krishna said: There is a banyan tree with its roots upward and branches downward. Its leaves are the Vedic hymns. One who knows this tree is the knower of the Vedas.", tel: "Krishna em cheppadu antey — oka chettu undi, daani verlu paina, kommalu kinda. Ulta chettu annamata. Daani akulu Vedic mantras. Ee chettu ni telisinodu antey — vaadiki Vedalu anni telisine." },
        6: { eng: "That supreme abode of Mine is not illumined by the sun or moon, nor by fire or electricity. Those who reach it never return to this material world.", tel: "Naa chota ki surya velugu avasaram ledu, chandra velugu kuda avasaram ledu, nippulu kuda avasaram ledu. Akkadiki okkasari velinodu malli ee lokam ki tirigi radu." },
        7: { eng: "The living entities in this world are My eternal fragmental parts. Due to conditioned life, they are struggling with the six senses including the mind.", tel: "Ee lokam lo unna jeevulanta naa shashwata amshalu ra. Kani emi ayyindi antey — ee samsaram lo padipoyinanduku, mind tho kalisi aaru indriyalato gudda pettukuntunnaru." },
        15: { eng: "I am seated in the hearts of all. From Me come memory, knowledge, and forgetfulness. I am the one to be known by all the Vedas, the compiler of Vedanta, and the knower of the Vedas.", tel: "Nenu andari gundelo kurchunna. Naa nundi memory vastundi, jnanam vastundi, marichipoyedam kuda naa valla ne. Anni Vedalu teluskovalanukunnadi nannu ne, Vedanta rasindi nenu ne, Vedalu telisinodu nenu ne." },
        16: { eng: "There are two types of beings in the world — the perishable and the imperishable. All material beings are perishable, and the soul is imperishable.", tel: "Ee lokam lo rendu rakala vaalu unnaru antey — okatli nashinchipoyevalu, inkotli ennadiki nashinchani vaalu. Material body undedi poyedi, kani atma ennadiki podu." },
        17: { eng: "But besides these two, there is the Supreme Person (Purushottama), the indestructible Lord who pervades and sustains the three worlds.", tel: "Kani ee iddari kanna oka pedda vadu unnadu — Purushottama. Ayana nashanam avvani Prabhu, moodu lokalananta vyapinchi, nilabettevadu." },
        18: { eng: "Because I am transcendental, beyond both the perishable and the imperishable, I am celebrated both in the world and in the Vedas as the Supreme Person (Purushottama).", tel: "Nenu nashinchedi ki, nashinchani dani ki — renditiki ateeatam. Anduke lokam lo nu, Vedas lo nu nannu Purushottama ani pilustaaru." },
        19: { eng: "Whoever knows Me, without doubt, as the Supreme Person — that person knows everything and worships Me with all their being, O Arjuna.", tel: "Evaraitey nannu sandeham lekunda Purushottama ani telusukuntaro — vaadiki antha telisinatte ra Arjuna. Vaadu poortiga naa bhakti lo undipotadu." },
        20: { eng: "This is the most confidential teaching, O Arjuna. Whoever understands this will become wise and will have fulfilled all duties.", tel: "Arjuna, idi annitlo secret aina bodha. Idi ardham cheskunna vadu jnani avtadu, vadi duties anni aipoyinatte." },
      };
      const gv = key_verses[n] || { eng: `Krishna describes the nature of the supreme person and the eternal tree of material existence, Verse ${n}.`, tel: `Ikkada Krishna Purushottama ante evaru, ee samsaram ane chettu swabhavam emiti — aa vishayam cheptunnadu, Verse ${n}.` };
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
        1: { eng: "Krishna said: Fearlessness, purity of heart, steadfastness in knowledge and yoga, charity, self-control, sacrifice, study of scriptures, austerity, and simplicity...", tel: "Krishna em cheppadu antey — daivam lanti gunas evi antey — bhayam lekunda undadam, gunde suddham ga undadam, jnanam lo sthiram ga undadam, daanam cheyyadam, mind control, yajnam, pustakalu chadivadam, tapas, simple ga undadam..." },
        2: { eng: "...nonviolence, truthfulness, freedom from anger, renunciation, peacefulness, not finding faults in others, compassion, freedom from covetousness, gentleness, modesty, and steadiness...", tel: "...evarni hims cheyakapovadam, nijam cheppadam, kopam raakapovadam, vadiliveddam, shanti ga undadam, ithula thappulu vetukakapovadam, karunam, aasa lekunda undadam, mellaga undadam, vinayam, sthiram ga undadam..." },
        3: { eng: "...vigor, forgiveness, fortitude, cleanliness, freedom from malice, and absence of pride — these are the divine qualities, O Arjuna, born of divine nature.", tel: "...tejas, kshaminchadam, dhairyam, suddham, dvesham lekunda, garvam lekunda — Arjuna, ivvanni daiva sampada gurinchi puttina gunalu." },
        4: { eng: "Hypocrisy, arrogance, pride, anger, harshness, and ignorance — these are the qualities of those born with demoniac nature, O Arjuna.", tel: "Ippudu inkoti cheppu antey — show off cheyadam, gaddam, ahankaram, kopam, kruram ga undadam, teliyanitanam — ivvi rakshasa swabhavam tho puttina vala gunalu, Arjuna." },
        5: { eng: "The divine qualities lead to liberation, while the demoniac qualities lead to bondage. Do not worry, O Arjuna — you are born with divine qualities.", tel: "Daiva gunalu unte mokshaaniki dari, rakshasa gunalu unte bondage lo padatavu. Kani Arjuna, nuvvu worry padaku ra — neeku daiva gunalu unnai, nuvvu aa type." },
        21: { eng: "There are three gates to hell that lead to the self-destruction of the soul — lust, anger, and greed. Therefore, one should abandon all three.", tel: "Narakam ki moodu gates untayi antey — kaamam, kopam, lobham. Ee moodu atma ni nashanam chestai. Anduke ee moodu teeseypettu life nundi." },
        24: { eng: "Therefore, let the scriptures be your authority in determining what should be done and what should not be done. Know the scriptural injunctions and act accordingly.", tel: "Anduke shastralu ne nee guide. Emi cheyali, emi cheyakudadu — shastralu nundi telusuko. Shastralu cheppinatu cheyyi." },
      };
      const gv = key_verses[n] || { eng: `Krishna describes the divine and demoniac qualities, and how one should cultivate divine nature for spiritual progress, Verse ${n}.`, tel: `Ikkada Krishna manchiga undadam ante emiti, chedda ga undadam ante emiti — ee rendu swabhaval madhya teda cheptunnadu, Verse ${n}.` };
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
        1: { eng: "Arjuna asked: O Krishna, what is the status of those who do not follow the principles of scripture but worship according to their own faith? Is their faith in goodness, passion, or ignorance?", tel: "Arjuna emani adigadu antey — Krishna, shastralu follow cheyakunda tama nammakam prakaram pooja chese valu em category? Vala nammakam sattva aa, rajas aa, tamas aa?" },
        2: { eng: "Krishna said: According to the three modes of material nature acquired by the embodied soul, faith can be of three kinds — sattvic, rajasic, or tamasic.", tel: "Krishna em cheppadu antey — prati manishi swabhavam prakaram vala nammakam moodu rakalu avutundi — sattvic, rajasic, tamasic." },
        3: { eng: "The faith of each person is in accordance with their nature, O Arjuna. A person is made of their faith. Whatever faith they have, that is what they are.", tel: "Arjuna, prati manishi nammakam vadi swabhavam ni batti untundi. Manishi ante vadi nammakam e ra. Evadi nammakam elanti daitey, vadu alantivadu." },
        7: { eng: "Even the food each person prefers is of three kinds, according to the three modes of material nature. The same is true of sacrifice, austerity, and charity.", tel: "Ento interesting ga antey — evadiki istamaina tindi kuda moodu rakalu untundi gunala batti. Alane yajnam, tapas, daanam kuda moodu moodu rakalu." },
        20: { eng: "Charity given out of duty, without expectation of return, at the proper time and place, to a worthy person — that charity is considered sattvic.", tel: "Ivvadam naa duty ane feeling tho, emanna tirgostundi ane expect cheyakunda, sari aina samayam lo, sari aina chota, deserving vaaniki icche daanam — adi sattvic daanam." },
        23: { eng: "Om Tat Sat — this has been declared as the threefold designation of Brahman. By that, the Brahmanas, the Vedas, and the sacrifices were ordained of old.", tel: "Om Tat Sat — ee moodu matalu Brahman ni indicate chestay. Puraatana kalam lo Brahmanulu, Vedalu, yajnalu anni ee moodu matala dwara ne nirdeshinchabaddayi." },
        28: { eng: "Whatever is sacrificed, given, or performed, and whatever austerity is practiced without faith — it is called 'asat' (unreal), O Arjuna. It is of no value here or hereafter.", tel: "Shraddha lekunda chese yajnam, daanam, tapas — avi 'asat' antaru antey nijam kaaadu annamata, Arjuna. Ee lokam lo nu, paralikam lo nu avi enta value ledu." },
      };
      const gv = key_verses[n] || { eng: `Krishna explains how faith, food, sacrifice, austerity, and charity are each divided into three categories based on the three modes of nature, Verse ${n}.`, tel: `Ikkada Krishna nammakam, tindi, yajnam, tapas, daanam — ivvanni moodu gunala batti ela moodu rakalu avutayo cheptunnadu, Verse ${n}.` };
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
        1: { eng: "Arjuna said: O mighty-armed Krishna, I wish to understand the nature of sannyasa (renunciation) and tyaga (giving up), and the difference between the two.", tel: "Arjuna emani adigadu antey — Krishna, sannyasam ante emiti, tyagam ante emiti, ee renditiki teda emiti — idi naaku ardham cheppav aa?" },
        2: { eng: "Krishna said: The wise understand sannyasa as giving up actions motivated by desire. The learned declare tyaga as giving up the fruits of all actions.", tel: "Krishna em cheppadu antey — aasa tho chese panulu vadileyadam ni sannyasam antaru jnanulu. Panulu chestaru kani phalitam vadileyadam ni tyagam antaru pandithulu." },
        5: { eng: "Acts of sacrifice, charity, and penance should not be abandoned. They must be performed, for sacrifice, charity, and penance are purifiers of the wise.", tel: "Yajnam, daanam, tapas — ivvi matram vadileyakudadu ra. Cheyalsinave. Endukante ivvi jnanulni kuda purify chestai." },
        6: { eng: "All these activities should be performed without attachment and without expectation of results. This is My definite and supreme judgment, O Arjuna.", tel: "Ee panulu anni attachment pettukokunda, result em vastundo ani expect cheyakunda cheyali. Arjuna, idi naa final decision, pakka ga." },
        14: { eng: "The five factors that determine the accomplishment of all action are: the body, the doer, the various senses, the various functions, and the presiding deity (divine will).", tel: "Prati pani jarigidaniki aidu factors untai antey — body, chese vadu, indriyalu, vaati vaati panulu, inka daivam ane divine will." },
        17: { eng: "One who is free from the notion of being the doer, whose intellect is not tainted — even though they kill in this world, they neither kill nor are bound by action.", tel: "'Nenu chesanu' ane feeling leni vadu, buddhi clean ga unna vadu — vadu ee lokam lo champina kuda nijam ga champaledu, karma bondage lo padadu." },
        20: { eng: "That knowledge by which one sees the one imperishable reality in all beings, undivided in the divided — know that knowledge to be sattvic.", tel: "Anni pranullo vibhajinchabadani oka shashwata satyam ni chuse jnanam — veru veru ga kanipistunna vaatilo oka ne reality chuse jnanam — adi sattvic jnanam." },
        23: { eng: "Action that is ordained by scripture, performed without attachment, without love or hatred, and without desire for reward — that action is sattvic.", tel: "Cheyalsina pani ga shastram cheppindi, attachment lekunda, ishtam dvesham lekunda, dini valla naaku em vastundo ane aasa lekunda chese pani — adi sattvic karma." },
        33: { eng: "The unwavering determination by which, through yoga, one controls the activities of the mind, the life breath, and the senses — that determination is sattvic, O Arjuna.", tel: "Yoga dwara mind ni, praanam ni, indriyalani control lo pettukune kadalaani sthiram aina determination — adi sattvic determination, Arjuna." },
        37: { eng: "That happiness which seems like poison in the beginning but is like nectar in the end, born of the light of self-knowledge — that happiness is sattvic.", tel: "Modatlo visham laga cheddaga untundi kani chivari ki amrutam laga tiyygga untundi — atma jnanam nundi vacchina aa sukham — adi sattvic sukham." },
        38: { eng: "That happiness which arises from the contact of the senses with their objects, which seems like nectar in the beginning but is like poison in the end — that is rajasic.", tel: "Indriyalu objects ni touch ayinappudu vacche sukham — modatlo amrutam laga baga untundi kani chivari ki visham laga maaripotundi — adi rajasic sukham." },
        47: { eng: "It is better to perform one's own duty imperfectly than another's duty perfectly. By performing duties prescribed according to one's nature, a person does not incur sin.", tel: "Inkokari duty baga chesedani kanna nee own duty sariga cheyakapoina ade better ra. Nee swabhavam ki taginattu duty chestey paapam antukodu." },
        54: { eng: "Established in Brahman, serene in the self, one neither grieves nor desires. Regarding all beings equally, such a person attains supreme devotion to Me.", tel: "Brahman lo sthiram ga undi, atma lo shanti ga undi, baadha ledu korika ledu, andarni samanam ga chustadu — alanti vadu naa supreme bhakti pondutadu." },
        55: { eng: "By devotion one can truly know Me — who I am and what I am. Then, having known Me in truth, one enters into My being immediately.", tel: "Bhakti dwara nannu nijam ga teluskovachu — nenu evarini, emitini. Alaga nijam ga teluskunna tarwata, vaadu naa lo ne kaligipotadu." },
        56: { eng: "Even while performing all actions, one who takes refuge in Me, by My grace, attains the eternal imperishable abode.", tel: "Anni panulu chestune undi kuda nannu ne nammukoni unnavadu, naa krupa valla, shashwata nashanam kani sthanam pondutadu." },
        61: { eng: "The Supreme Lord dwells in the hearts of all beings, O Arjuna, and by His divine power (maya) causes all beings to revolve as if mounted on a machine.", tel: "Arjuna, Bhagavantadu andari gundello kurchuni unnadu, tana maya shakti tho anni praanulni oka machine lo pettinattu tiragistunnadu." },
        63: { eng: "Thus I have explained to you this knowledge that is more secret than all secrets. Reflect on this fully, and then do as you wish.", tel: "Ila neeku anni secrets lonu pedda secret aina jnanam cheppanu. Bagaa aalochinchu, tarwata neeku em tochitey adi cheyyi." },
        64: { eng: "Hear again My supreme word, the most secret of all. You are very dear to Me, therefore I shall tell you what is good for you.", tel: "Malli oka sari naa supreme mata vinu — annitlo secret idi. Nuvvu naaku chala istam ra, anduke neeku manchidi cheptunnanu." },
        65: { eng: "Always think of Me, become My devotee, worship Me, and bow to Me. I promise you — you will surely come to Me, for you are very dear to Me.", tel: "Eppudu nannu talachuko, naa bhaktudiga avvu, nannu poojinchu, naaku namaskaram pettu. Nenu neeku promise chestunnanu — nuvvu naa daggara ki tappaka ostav, endukante nuvvu naaku chala chala istam." },
        66: { eng: "Abandon all varieties of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.", tel: "Anni dharmalu vadilipettu, nannu ne sharanagati cheyyi. Nenu ninnu anni paapala nundi vidipistanu. Bhayam enduku ra, vadilipettu." },
        72: { eng: "O Arjuna, have you heard this with an attentive mind? Has your delusion born of ignorance been destroyed?", tel: "Arjuna, idi nuvvu shraddhaga vinnava? Nee ajnanam valla vacchina moham poyinda?" },
        73: { eng: "Arjuna said: O Krishna, my delusion is destroyed and I have regained my memory by Your grace. I am now firm and free from doubt. I shall act according to Your word.", tel: "Arjuna annadu — Krishna, naa moham poyindi ra! Nee krupa valla naa telivi tirigi vacchindi. Ippudu sthiram ga unnanu, sandeham poyindi. Nuvvu cheppinatu chestanu." },
        76: { eng: "O King, remembering again and again this wonderful and sacred dialogue between Krishna and Arjuna, I rejoice at every moment.", tel: "O Raja, Krishna Arjuna madhya ee adbhutamaina samvadam malli malli gurthu cheskunte, prati kshanam lo aanandanga untundi naaku." },
        78: { eng: "Wherever there is Krishna, the lord of yoga, and wherever there is Arjuna, the wielder of the bow — there will certainly be prosperity, victory, opulence, and righteousness. This is my conviction.", tel: "Ekkada Yogeshwara Krishna untado, ekkada dhanurdhari Arjuna untado — akkada samruddhi untundi, vijayam untundi, aishwaryam untundi, dharmam untundi. Idi naa pakka nammakam." },
      };
      const gv = key_verses[n] || { eng: `Krishna provides the culminating wisdom on renunciation, duty, knowledge, and the path to liberation in the final chapter, Verse ${n}.`, tel: `Ikkada ee final chapter lo Krishna tyagam, karma, jnanam, moksha daari gurinchi final ga cheptunnadu, Verse ${n}.` };
      return { chapter: 18, sloka: n, sanskrit_devanagari: `॥ १८.${n} ॥`, sanskrit_iast: `[Chapter 18, Verse ${n}]`, english_simplified: gv.eng, telugu_conversational: gv.tel, youtube_search_query: `Bhagavad Gita Chapter 18 Verse ${n} explanation` };
    }),
  },
];
