export type DataFileProp = {
    name?: string
    description: string
    image?: string
    images?: string[]
    video?:string
}

export const IndividualsData: DataFileProp[] = [
    //tickets 003- 018
    {
        name: "LEON",
        description: "Jag är produktägare och teknisk/stridsdesigner i detta team. Som teknisk designer har jag en djup förståelse för Unreal Engine och dess funktioner. Jag designar fienderna, deras attackmönster och hanterar balansering. Jag designar också hur karaktären fungerar, inklusive trollformler och rörelser. Som produktägare presenterar jag spelet, jag är involverad i alla aspekter av dess utveckling, oavsett om det är konst, VFX, programmering eller design. Som designer har jag välsignats med den långsammaste datorn som mänskligheten känner till. Vissa säger att det är en smart strategi för att göra oss bättre på att optimera våra spel. Och det fungerade.",
        image: "./images/leon.jpg"
    },

    {
        name: "ALEJANDRO",
        description: "Hej, jag heter Alejandro och jag arbetade med både berättelse och nivådesign för Thornbound. Det har varit en mycket lärorik, utmanande och rolig upplevelse! Jag arbetade med att sätta historien i spelet både för vad den handlar om och hur den framställs i spelet. Jag arbetade också med nivådesignen i samarbete med Ghazaleh, vi delade upp arbetet och jag fick göra hälften av fängelsehålan, huvudhallen och övervåningen i slottet! Jag hade möjlighet att bli riktigt kreativ i detta projekt där jag kunde skriva en mer djupgående historia, idéutveckla och implementera roliga pussel och nivåer för spelaren och mycket mer! Jag hade turen att få utrymme och frihet att skapa allt genom välsignelsen som är mitt team!",
        image: "./images/alejandro.jpg"
    },

    {
        name: "SIMON",
        description: "Hej, jag är Simon, jag är vanligtvis nivådesigner men för detta projekt har jag varit ljuddesigner. Jag är en kreativ person och skulle vilja arbeta med allt uttrycksfullt i framtiden, men jag fokuserar främst på nivådesign.",
        image: "./images/simon.png"
    },

    {
        name: "GHAZALEH",
        description: "Digital Drömskapare & Kreativ Hantverkare. Om mina design hade en hjärtslag skulle de dunka i takt med sena nattens spellistor och för många koppar te. Som 3D-miljökonstnär och visuell berättare skulpterar jag världar där spelare förlorar sig själva — från avlägsna galaxer till mysiga bytorget. Jag lever i den söta punkten där konst möter teknik, finjusterar varje tillgång för att flyta smidigt genom pipelinen, håller designers, animatörer och kodare alla leende (eller åtminstone inte drar sig i håret). Visst, jag glömmer ibland vad 'normala arbetstider' betyder, men att se våra världar andas med liv? Det är mitt bränsle. Med rötter i konceptkonst, grafisk design och en passion för atmosfärisk belysning, älskar jag varje textur, skugga och liten rekvisita, eftersom detaljer inte bara är detaljer — de är historien.",
        image: "./images/ghazaleh.png"
    },

    {
        name: "ILYA",
        description: "Konstmagiker & Arbetsflödesviskare, Om pixlar kunde prata skulle mina skrika, 'Skapat med kärlek... och förmodligen klockan 2 på morgonen.' Som miljökonstnär och pipeline-problemlösare säkerställde jag att allt såg vackert ut och flöt smidigt mellan konstavdelningen, designers och animatörer, som en väloljad kreativitetsmaskin. Jag kan ha en liten vana av att överarbeta (okej, kanske inte så liten), men när jag ser vår spelvärld komma till liv kan jag bara inte sluta le. Det finns något magiskt med att se vad vi har byggt tillsammans som team — det är bättre än koffein. Med bakgrund inom UI/UX-design och fotografi bringar jag ett skarpt öga för detaljer och en kärlek till visuell harmoni",
        image: "./images/erics.png"
    },

    {
        name: "EVANGELIA",
        description: "Jag var rekvisitakonstnär för detta spel — så om du ser en cool tunna eller mystisk låda, var det förmodligen jag. Att arbeta på detta projekt var fantastiskt, främst tack vare den fantastiska teamenergin (och mycket kaffe). Min största bossstrid? Tiden. Men med lite strategisk tidshantering och några sena nätter lyckades jag samla ihop tillgångar jag är stolt över. Nu avslutar jag mina studier på Future Games, skärper mina färdigheter och förbereder mig för att gå med i spelbranschen. Min dröm? Att hjälpa till att skapa världar där spelare kan gå vilse — och kanske till och med snubbla över en av mina rekvisita",
        image: "./images/EVANGELIA.JPG"
    },

    {
        name: "BARRY",
        description: "Min roll som konstnärlig direktör för Thornbound inkluderade att säkerställa att konstavdelningen var anpassad till designavdelningen gällande spelets visuella aspekter, i termer av miljötillgångar, animationer och visuella effekter. Dessutom inkluderade min roll att säkerställa att konstnärernas arbetsbelastning var hanterbar och att leveranser gjordes i tid. Som animatör tillhandahöll jag motion capture-animationer, rengöringar och handanimerade animationer för spelets fiender, samt några ytterligare spelarkaraktärsanimationer.",
        image: "./images/barry.png"
    },

    {
        name: "SHENGAN",
        description: "Jag arbetade som gameplay-animatör på detta projekt. Jag skapade grundrörelseanimationen och attackanimationerna för vår huvudkaraktär. Detta var min första gång att prova saker som lokomotion, och jag är verkligen nöjd med hur det blev. Det var mycket roligt att arbeta med vårt fantastiska team. Mina favoritspel genom tiderna är Yakuza 0 och Devil May Cry. Jag kommer att fortsätta fokusera på karaktärsanimationer i framtiden.",
        image: "./images/shengen.png"
    },

    {
        name: "ERIC",
        description: "På detta projekt har jag skapat en så bred mängd olika effekter. Som den enda VFX-konstnären på projektet har jag skapat allt från magiska shaders till eldtrollformler, elektriska kraftfält och animerade eldshaders. Jag hade möjlighet att experimentera och leka med en massa nya tekniker, och genom att kombinera det med tidigare kunskap känner jag att jag har lyckats skapa en bra uppsättning olika magiska effekter, fortfarande alla inom samma värld. Jag fungerade också som ljuskonstnär för nivån och hjälpte till att ge spelet den slutliga push och polering mot stämningen och estetiken vi satte upp för i början.",
        image: "./images/erics.png"
    },

    {
        name: "BRIAN",
        description: "Hej, jag är en av programmerarna som arbetade på Thornbound. Min roll i teamet fokuserade mest på UI-implementering, men jag arbetade ofta med andra diverse funktioner, som till exempel några lätta pussel och ett checkpoint-system. Det största hindret jag stötte på var, ärligt talat, mig själv. Jag har inte mycket programmeringserfarenhet under bältet i allmänhet, men i princip ingen i C++ och Unreal, så en massa tid spenderades bara på att lära om grundläggande saker och lära sig arbetsflödet i Unreal. Men jag tycker att den delen faktiskt var roligast och jag känner verkligen att jag har blivit mycket bättre, vilket gör mig mycket tacksam för att ha arbetat på detta spel med detta fantastiska team.",
        image: "./images/brain.png"
    },

    {
        name: "DORUK",
        description: "Jag skapade vapensystemen, karaktärsrörelse och siktande system tillsammans med lite kamerarbete. Deltog i ljudimplementeringen och hjälpte till att sätta upp FMOD-ljudintegration. Jag var också versionskontrollchef och hjälpte teamet med olika problem vi hade med tekniken och Perforce. Jag tyckte verkligen om att se hela detta projekt komma ihop och jag är otroligt imponerad av vad våra teammedlemmar kunde komma på!",
        image: "./images/doruk.png"
    },

    {
        name: "GALINA",
        description: "Som del av projektet arbetade jag med att utveckla fiendens AI-beteende och gameplay-mekaniker i Unreal Engine 5. Mitt huvudfokus var att skapa anpassade uppgifter för Behavior Tree, sätta upp fiendens rörelse och attacker, och hantera interaktioner med spelaren. Den mest intressanta och utmanande uppgiften var att implementera ett QTE-system (Quick Time Event) där spelaren måste trycka på en nyckel upprepade gånger för att knuffa bort fienden under dess attack. Denna erfarenhet förstärkte mitt intresse för att arbeta med gameplay-system och AI, vilket är det område jag skulle vilja fortsätta utveckla inom som spelutvecklare.",
        image: "./images/galla.png"
    },

    {
        name: "JAMIE",
        description: "Hej, jag heter Jamie och min roll var programmerare under utvecklingen av Thornbound. Jag var främst ansvarig för att göra interaktionssystemet i spelet, detta inkluderar allt du kan interagera med som att plocka upp föremål, öppna dörrar, placera statyer etc. Det jag tyckte om med denna stora uppgift var utmaningen eftersom vi behövde att upplockningen skulle fungera på ett specifikt sätt och detta var också en typ av hinder. I framtiden skulle jag vilja se tillbaka på detta system jag gjorde och göra det bättre från början.",
        image: "./images/jamie.png"
    },

    {
        name: "AIDA",
        description: "Hej, jag är Aida, en aspirerande spelproducent med bakgrund inom företagsledning och hjärtat inställt på spelutveckling. Studerar för närvarande Agile Project Management på Futuregames. Som både producent och release manager i GP3 producerar jag workshops, leder sprints, spårar framsteg i Jira, rensar blockerare, ordnar playtestare, Q/A och buggtracker, hanterar byggpipelines och säkerställer smidig leverans. Med VD-erfarenhet, UX-tänkande och en kärlek till teknik håller jag team anpassade utan att döda stämningen. Jag har levererat SaaS-produkter, pitchat för kunglighet. Nu vill jag hjälpa till att skapa upplevelser som spelare älskar och team tycker om att bygga.",
        image: "./images/aida.jpg"
    },

    {
        name: "OLA",
        description: "Som release manager i vårt team har jag varit ansvarig för att planera och koordinera lanseringar och säkerställa att allt händer i tid. Jag har också varit involverad i att skapa strukturen för våra interna processer. Det roligaste för mig har varit att se hur alla delar av spelet har fallit på plats, från idé till det färdiga spelet. I framtiden vill jag fortsätta arbeta på spännande projekt där teknik och kreativitet möts.",
        image: "./images/ola.png"
    },

    {
        name: "LOTTEN",
        description: "Att stå bakom team 10 i denna kreativa process har varit fantastiskt! Thornbound var ett av mina team under GP3 & Web Project, och att vara del av resan från att lära känna varandra, till brainstorming, till att strukturera arbetsflödet var riktigt coolt! En ny sak jag fick lära mig var att arbeta mycket med JIRA. Jag lärde mig grunderna och höll sedan en workshop för teamet. Jag vet att detta kommer att vara värdefullt för mig i framtiden! Tillsammans med Aida och Ola hjälpte jag teamet med Miro Structure, planering, facilitering, säkerställde att teamet var på rätt spår och inte överskattade omfattningen. Lättare sagt än gjort! Men i slutändan kommer detta att vara en upplevelse jag aldrig kommer att glömma och vem vet, kanske arbetar jag inom gaming!",
        image: "./images/lotten.jpg"
    },
]

export const FeaturesItems: DataFileProp[] = [
    //from tickets 020-024
    {
        description: "Som Zerim, en erfaren pensionerad magiker som har en ung dotterdotter Elira med en dödlig sjukdom utan fungerande botemedel. Hitta och kämpa dig genom dödsfällan som är Castle Kravia, fylld med fiender, fällor och pussel. Avslöja de fördömda hemligheterna från tidigare äventyrare och själva slottet för att få tag på den sällsynta och skyddade blomman Virellis, som sägs bota alla skador och sjukdomar eller ge odödlighet till den som konsumerar den, för att rädda Elira. Tror du att du kan komma ut levande?",
        video: "./images/video.mp4"
    },

    {
        name: "Trollformler",
        description: "Zerim använder eld- och åskmagin, hämtad från kristallerna som växer inom slottet. Eld brinner hetast men når inte särskilt långt, vilket gör den användbar för närstrid när siktetid är begränsad. Åska är svalare men har större räckvidd, vilket gör den utmärkt för att hålla Zerim på avstånd från de förbannade.",
        image: "./images/spell.png"
    },

    {
        name: "Smygande",
        description: "Även i sin ålderdom förblir Zerim lätt på fötterna. Att sakta ner och smyga sig på de förbannade skalarna låter dig ta bort dem i smyg. Alternativt kan det verka frestande att storma in med brinnande händer, kasta trollformler höger och vänster, tills du tar slut på kristaller och slottets fulla vrede jagar dig djupare in i katakomberna.",
        image: "./images/stealth.png"
    },

    {
        name: "Pussel",
        description: "Slottet är fullt av pussel och fällor. Zerim behöver traversera slottets mörka och vindlande korridorer, fyllda med lömska pussel och fällor. Obehagliga berättelser antydde att slottet självt var ute efter att samla din själ.",
        image: "./images/puzzle.png"
    },
]

export const CreditsItems: DataFileProp[] = [
    // for credits page from tickets 029-030
    {
        name: "Fab och CGTrader",
        description: "Förutom de tillgångar som skapats av våra konstnärer användes tillgångar från online-marknadsplatser som Fab och CGtrader för att ytterligare assistera våra konstnärer, gällande både karaktärer och rekvisita. Dessa tillgångar från marknadsplatsen har använts på ett sätt där konstnärerna ändrar mesh eller texturer för att passa spelets konstnärliga riktning och för att behålla konstnärernas engagemang genom hela produktionsprocessen.",
        image: "./images/credit picture1.jpg"
    },

    {
        name: "Bakgrundskonst",
        description: "Vi skulle vilja ge en hedersomnämnelse till vår klasskamrat, Antonia Mertes, från Animation och VFX-klassen 2024, Futuregames Stockholm, där hon assisterade med att tillhandahålla illustrationen som används på bakgrundskonsten för vår webbsida och Itch.IO-miniatyr.",
        image: "./images/credit picture2.png"
    }
]

export const LoreItems: DataFileProp[] = [
    //tickets 026-028
    {
        name: "ZERIM",
        description:
            "Efter att ha lagt sin magikerhatt på hyllan slog sig Zerim ner för årtionden sedan för att bilda familj, livet har varit fridfullt eftersom han nu är den enda vårdnadshavaren för sin dotterdotter Elira tills hon blev allvarligt sjuk. Med varje botemedel, brygd och till och med magi försökt för att bota sjukdomen känner han sig besegrad tills han påminns om en gammal saga. En blomma som heter Virellis som kan bota allt och alla, han rotar igenom sina journaler från sina tidigare dagar och hittar en anteckning med den förmodade platsen för Virellis i det glömda Castle Kravia. Han ger sig ut på en sista resa för att rädda Elira från hennes grymma öde.",
        images: [
            "./images/zerim01.png",
            "./images/zerim02.png",
            "./images/zerim03.png",
            "./images/zerim01.png",
        ],
    },

    {
        name: "VIRELLIS",
        description:
            "Det finns inte mycket information inspelad om denna blomma, allt ligger i rykten och sagor som de flesta anser vara en myt. Men den grova förmodade dokumentationen säger att den kan bota alla skador eller sjukdomar när den används på en annan men den erbjuder också ett annat alternativ. För dem som väljer att använda den på sig själva kan konsumering av den ge dig evigt liv... Många har vågat söka efter denna blomma för att få tag på blomman och beviljas evigt liv, men ingen har återvänt.",
        images: [
            "./images/virellis01.png",
            "./images/virellis02.png",
            "./images/virellis03.png",
            "./images/virellis01.png",
        ],
    },

    {
        name: "KRAVIA HERRSÄTE",
        description:
            "Det fanns en gång en rik lärde, intresserad av det arkana och alla dess skapelser, särskilt den sällsynta sorten. Hennes namn var Corryn Vaunt, det sägs att hon var ägaren till detta slott och vissa spekulerar att hon har Virellis skyddad inuti det, hon kan till och med ha byggt slottet runt det. Många har vågat vandra in i dess hallar, men ingen har kunnat komma tillbaka och berätta om vad som finns inuti det.",
        images: [
            "./images/kravor01.png",
            "./images/kravor02.png",
            "./images/kravor03.png",
            "./images/kravor01.png",
        ]
    }
];