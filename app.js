// HOW TO ADD CONTENT
// - One object per topic, and every topic is a multi-page document: `pages: [page1, page2, ...]` (one HTML string per A4 page).
//   Add or remove strings to change the page count; the stack and reader follow automatically.
// - Page 1 gets the big title; pages 2+ get a small running header. Start those with <h3>Subtitle</h3>.
// - Each page must fit one A4 sheet (split long text over another page). Handy snippets: ${D} / ${F} stamps,
//   class="frag desk|field", <aside class="note"> sticky note, <mark> highlighter.
// - New topic = new object in this array. `tab` groups it in the top tabs, `short` is the label bottom-right.
// Components for the reader (see style.css): .lead .quote .chips .compare(.no/.yes) .flow .cards(.three/.num) .cols .vs(.col.good/.bad .item) .stats .bars .layers .steps .timeline .checks .callout .src
const D = '<span class="stamp desk">desk</span>', F = '<span class="stamp field">field</span>';
const sheets = [
  // ───────────────────────── 01 Vraagstuk
  { tab: 'Opdracht', title: 'Vraagstuk', pages: [
    `<h3>Briefing</h3>
    <h4>Aanleiding</h4>
    
    <p class="lead">${D}De VPRO wil onderzoeken welke <mark>nieuwe vormen van media</mark> mogelijk worden door de ontwikkeling van nieuwe technologie.</p>
    <p>Binnen het VPRO Medialab wordt geëxperimenteerd met onder andere:</p>
    <div class="chips"><span>AI</span><span>Interactieve media</span><span>Synthetische media</span><span>Nieuwe interfaces</span></div>
    <div class="compare">
      <div class="no"><small>Niet het doel</small><p>Technologie alleen inzetten om bestaande producties sneller, goedkoper of makkelijker te maken.</p></div>
      <div class="yes"><small>Wel het doel</small><p>Technologie die leidt tot een nieuwe media-ervaring of vertelvorm.</p></div>
    </div>
    <h4>Opdracht</h4>
    <p class="lead">Ontwikkel en onderzoek een vernieuwend mediaconcept waarin nieuwe technologie een <mark>essentiële rol</mark> speelt.</p>
    <p>Het concept moet laten zien hoe technologie de manier waarop mensen media maken, beleven of consumeren kan veranderen.</p>
    <ol class="flow"><li><b>Maken</b></li><li><b>Beleven</b></li><li><b>Consumeren</b></li></ol>
    <p>Het medium staat daarbij niet vast. Het concept kan bestaan uit:</p>
    <div class="chips"><span>Video</span><span>Audio</span><span>Interactieve media</span><span>Generatieve AI</span><span>Een game</span><span>Een nieuwe interface</span><span>Een combinatie</span></div>`,
    `<h3>Uitgangspunten uit de briefing</h3>
    <p>Tijdens de ontwikkeling houden we rekening met:</p>
    <div class="cards">
      <div class="card num"><i>1</i><h4>Vernieuwing</h4><p>Het concept moet verder gaan dan een bestaand mediaformat waar simpelweg AI aan wordt toegevoegd.</p></div>
      <div class="card num"><i>2</i><h4>Experiment</h4><p>Er moet ruimte zijn om nieuwe technologie daadwerkelijk uit te proberen.</p></div>
      <div class="card num"><i>3</i><h4>Toegevoegde waarde</h4><p>De technologie moet een duidelijke functie hebben binnen de media-ervaring.</p></div>
      <div class="card num"><i>4</i><h4>Journalistieke kwaliteit</h4><p>Betrouwbaarheid, herkomst van materiaal en redactionele verantwoordelijkheid blijven bewaakt.</p></div>
      <div class="card num"><i>5</i><h4>Ethiek en rechten</h4><p>Bewust omgaan met gegenereerde content, auteursrecht en verantwoord gebruik van technologie.</p></div>
      <div class="card num"><i>6</i><h4>Toegankelijkheid</h4><p>Waar relevant onderzoeken of technologie nieuwe doelgroepen toegang kan geven tot VPRO-content.</p></div>
    </div>`,
    `<h3>Doel</h3>
    <p class="lead">Door middel van <mark>experiment en prototyping</mark> ontdekken welke toegevoegde waarde nieuwe technologie kan hebben voor de VPRO.</p>
    <p>We onderzoeken niet alleen of een concept technisch mogelijk is, maar vooral wat de technologie daadwerkelijk toevoegt aan:</p>
    <div class="cards three"><div class="card"><h4>De ervaring</h4></div><div class="card"><h4>De inhoud</h4></div><div class="card"><h4>De vertelvorm</h4></div></div>`,
    `<h3>Hoofd- en deelvragen</h3>
    <h4>Het vraagstuk</h4>
    <p class="lead">${D}Er is een razendsnelle opkomst van generatieve AI. De VPRO wil <mark>voorop blijven lopen in grensverleggende storytelling</mark> en onderzoeken hoe emerging technologies het medialandschap veranderen.</p>
    <div class="compare">
      <div class="no"><small>Het probleem</small><p>Traditionele lineaire audio- en videovormen, zoals gewone podcasts of uitzendingen, zijn vaak passief: de gebruiker luistert of kijkt slechts toe.</p></div>
      <div class="yes"><small>De kans</small><p>Opkomende technologieën, zoals generatieve audio, adaptieve media en interactie op locatie, om nieuwe vertelvormen te ontwerpen.</p></div>
    </div>
    <blockquote class="quote small">Hoe kan de VPRO met deze technologieën een verhaal <mark>zintuiglijk tot leven wekken</mark> en de gebruiker <mark>actief betrekken</mark>?</blockquote>
    <h4>Hoofdvragen</h4>
    
    <p><b>Centrale vraag uit de briefing</b></p>
    <blockquote class="quote small">${D}Op welke manier kan de VPRO met nieuwe technologie experimenteren om tot <mark>vernieuwende mediaconcepten en vertelvormen</mark> te komen?</blockquote>
    <p><b>Onze hoofdvraag</b></p>
    <blockquote class="quote">Op wat voor manieren kunnen <mark>AI en nieuwe media</mark> worden ingezet om vernieuwende mediaformats voor de VPRO te ontwikkelen?</blockquote>
    <p>Uit de onderzoeken volgen deelvragen. Klik een vraag open voor het antwoord dat het onderzoek tot nu toe geeft.</p>`,
    `<h3>Deelvragen</h3>
    <details open><summary>Deelvraag 1: Hoe kunnen generatieve AI en Object-Based Audio worden ingezet om een dynamische geluidservaring te creëren die meebeweegt met de fysieke context van de gebruiker?</summary>
      <p>Nog te onderzoeken in het prototype. Eerste aanwijzingen uit het onderzoek: gelaagde audio (aparte sporen voor stem, muziek, sfeer en archief), archiefbeelden en historische soundscapes op de plek zelf, en omgevingsgeluid als actieve laag.</p></details>
    <details><summary>Deelvraag 2: Hoe borgt de VPRO redactionele betrouwbaarheid en authenticiteit wanneer historisch archiefmateriaal wordt gecombineerd met synthetische of AI-gegenereerde geluidslagen?</summary>
      <p>Nog te onderzoeken. Vertrekpunt uit de briefing: betrouwbaarheid, herkomst van materiaal en redactionele verantwoordelijkheid blijven bewaakt, en duidelijk maken waar informatie vandaan komt.</p></details>
    <details><summary>Hoe bouwt de VPRO haar storytelling op en welke best practices kunnen hieruit worden afgeleid?</summary>
      <p>${D}Een verhaal begint klein, bij een persoon, observatie of vraag, en wordt steeds verder verdiept: van verwondering naar persoonlijke ervaring, onderzoek, verdieping en maatschappelijke betekenis.</p></details>
    <details><summary>Hoe kan een maatschappelijk onderwerp zo worden verteld dat iemand met weinig voorkennis nieuwsgierig wordt, betrokken blijft en na afloop het gevoel heeft het onderwerp beter te begrijpen?</summary>
      <p>${D}Storytelling moet de verbinding vormen tussen aandacht en verdieping: niet het onderwerp zo simpel mogelijk maken, maar een toegankelijke ingang creëren waardoor de gebruiker de complexiteit wil ontdekken.</p></details>
    <details><summary>Hoe bouwen we één journalistiek verhaal dat mensen via verschillende media kunnen ontdekken, volgen en verdiepen?</summary>
      <p>${D}Door iedere plek een eigen functie te geven: sociale media wekken nieuwsgierigheid, herkenbare makers creëren betrokkenheid, langere producties bieden context en controleerbaarheid.</p></details>
    <details><summary>Welke rol kan ieder platform spelen binnen de gebruikersreis van ons verhaal?</summary>
      <p>${D}TikTok en Instagram voor ontdekking en korte verticale storytelling, YouTube voor langere video en verdieping, een website of artikel voor bronnen en context. Nieuwe platformen alleen als daar een relevante community is.</p></details>
    <details><summary>Wat voegt de technologie daadwerkelijk toe aan de ervaring, inhoud en vertelvorm?</summary>
      <p>Dit is de kern van de opdracht en wordt beantwoord door experiment en prototyping. Nog te onderzoeken.</p></details>`,
    `<h3>Afbakening: gewenste oplevering</h3>
    <div class="timeline">
      <div class="phase"><small>Fase 1</small><b>Concept en eerste experimenten</b><p>We ontwikkelen een sterk mediaconcept en voeren eerste experimenten uit.</p><div class="chips"><span>Concept</span><span>Eerste prototypes</span><span>Bevindingen over de technologie</span></div></div>
      <div class="gate"><span>Feedback van de VPRO</span></div>
      <div class="phase"><small>Fase 2</small><b>Het gekozen concept verder ontwikkelen</b><p>De nadruk ligt op maken, testen, verbeteren en onderzoeken wat wel en niet werkt.</p></div>
    </div>`,
    `<h3>Afbakening: wat valt erbinnen en erbuiten (briefing)</h3>
    <div class="vs">
      <div class="col good"><small>Binnen de opdracht</small>
        <div class="item"><span>Een concept waarin nieuwe technologie een essentieel onderdeel is</span></div>
        <div class="item"><span>Een open medium: video, audio, interactief, generatieve AI, game, interface of een combinatie</span></div>
        <div class="item"><span>Een doelgroep die per concept wordt bepaald</span></div>
        <div class="item"><span>Experiment en prototyping, ook met nieuwe doelgroepen via toegankelijkheid</span></div>
      </div>
      <div class="col bad"><small>Buiten de opdracht</small>
        <div class="item"><span>Technologie alleen inzetten om bestaande producties sneller, goedkoper of makkelijker te maken</span></div>
        <div class="item"><span>Een bestaand mediaformat waar simpelweg AI aan wordt toegevoegd</span></div>
        <div class="item"><span>Uit het onderzoek: automatisch op ieder nieuw platform willen zitten, of journalistiek simpelweg korter maken</span></div>
      </div>
    </div>`,
    `<h3>Afbakening: het eindresultaat en succescriteria</h3>
    <p>Het uiteindelijke resultaat moet inzicht geven in:</p>
    <div class="cards">
      <div class="card"><h4>Nieuwe mogelijkheden</h4><p>voor media en storytelling</p></div>
      <div class="card"><h4>Kansen en beperkingen</h4><p>van de gekozen technologie</p></div>
      <div class="card"><h4>De meerwaarde</h4><p>die de technologie daadwerkelijk heeft</p></div>
      <div class="card"><h4>De pasvorm</h4><p>van het concept bij de VPRO</p></div>
      <div class="card"><h4>Kwaliteit behouden</h4><p>hoe journalistieke en ethische kwaliteit bewaakt blijft</p></div>
    </div>
    <h4>Het project is geslaagd wanneer het concept…</h4>
    <ul class="checks"><li>een daadwerkelijk nieuwe media-ervaring of vertelvorm onderzoekt</li><li>technologie gebruikt als essentieel onderdeel</li><li>experimenteel en onderscheidend is</li><li>aansluit bij de identiteit en inhoudelijke waarden van de VPRO</li><li>rekening houdt met betrouwbaarheid, rechten en ethiek</li><li>door prototypes en tests nieuwe inzichten oplevert</li></ul>
    <p class="callout">Een experiment hoeft niet volledig te slagen. Ook een prototype dat niet werkt kan waardevol zijn wanneer duidelijk wordt waarom het niet werkt en welke inzichten daaruit voortkomen.</p>`] },

  // ───────────────────────── 02 Context & trends
  { tab: 'Opdracht', title: 'Context &amp; trends', short: 'Context &amp; trends', pages: [
    `<h3>Generatieve AI en passieve media</h3>
    <p class="lead">${D}De opkomst van generatieve AI gaat <mark>razendsnel</mark>. De VPRO wil onderzoeken hoe emerging technologies het medialandschap veranderen.</p>
    <ol class="flow"><li><small>Nu</small><b>Lineair en passief</b><span>Gewone podcasts of uitzendingen: de gebruiker luistert of kijkt slechts toe.</span></li><li><small>Straks</small><b>Zintuiglijk en actief</b><span>Generatieve audio, adaptieve media en interactie op locatie betrekken de gebruiker in het verhaal.</span></li></ol>`,
    `<h3>Van nieuws zoeken naar nieuws tegenkomen</h3>
    <p class="lead">${D}Er vindt een verschuiving plaats van vaste nieuwsconsumptie naar een <mark>versnipperde, platformgerichte</mark> manier van mediagebruik.</p>
    <p>Nieuws wordt steeds vaker ontdekt tussen andere content, waarbij video, makers en algoritmische aanbevelingen een grotere rol spelen. Op TikTok, Instagram of YouTube kom je een maatschappelijk verhaal tegen zonder ernaar te zoeken, en het concurreert met entertainment, humor, influencers en persoonlijke video's.</p>
    <div class="stats"><div class="stat"><b>7%</b><span>van de Nederlanders gebruikt uitsluitend sociale media voor nieuws</span></div><div class="stat"><b>±50%</b><span>maakt zich veel zorgen over online mis- en desinformatie</span></div></div>
    <p class="src">Bron: Commissariaat voor de Media, Digital News Report Nederland 2026</p>
    <p>Gevolg: een verhaal moet ook aantrekkelijk zijn voor iemand die nog niet weet dat hij of zij geïnteresseerd is. Een verrassende observatie, menselijke ervaring of interessante vraag creëert eerst nieuwsgierigheid, daarna volgt de journalistieke context.</p>`,
    `<h3>Short-form video als ingang</h3>
    <p class="lead">Online video groeit. Short-form is niet alleen entertainment, maar kan de <mark>eerste laag van een journalistiek verhaal</mark> zijn.</p>
    <div class="bars"><small>Gebruik van social video voor nieuws (internationaal)</small>
      <div class="bar"><span>2020</span><i style="--w:52%"></i><b>52%</b></div>
      <div class="bar"><span>2025</span><i style="--w:65%"></i><b>65%</b></div></div>
    <p class="src">Bron: Reuters Institute, Digital News Report</p>
    <p>Een korte verticale video hoeft niet het hele onderwerp te behandelen: één opvallende observatie, vraag of persoonlijke ervaring is genoeg om interesse te wekken. Een langere video, podcast of artikel biedt daarna context en verdieping. De formats vervangen elkaar niet, <b>ze versterken elkaar</b>.</p>`,
    `<h3>TikTok: van entertainment naar discovery</h3>
    <div class="stats"><div class="stat"><b>63%</b><span>van de TikTok-gebruikers die zoeken, ontdekt daar nuttige informatie die verder gaat dan waarnaar ze zochten</span></div></div>
    <p class="src">Bron: TikTok trendrapport 2026. Commerciële platformbron: bruikbaar om TikTok te begrijpen, geen onafhankelijke meting van de samenleving.</p>
    <p>Een gebruiker kan beginnen met een vraag over wonen, technologie of een gebeurtenis en via persoonlijke verhalen en uitlegvideo's bij andere perspectieven uitkomen. Content moet dus vindbaar én nieuwsgierigheidsgedreven zijn.</p>
    <div class="compare"><div class="no"><small>Onderwerp</small><p>“De woningmarkt uitgelegd”</p></div><div class="yes"><small>Vraag met spanning</small><p>“Waarom staan hier woningen leeg terwijl mensen geen huis kunnen vinden?”</p></div></div>`,
    `<h3>Van instituut naar menselijke verteller</h3>
    <ol class="flow"><li><b>Institutionele afzender</b></li><li><b>Herkenbare maker</b></li></ol>
    <p>De persoon die informatie vertelt wordt belangrijker. Internationaal verschuift nieuwsconsumptie richting creators en persoonlijkheden; in Nederland is dat minder ver, traditionele nieuwsmerken en journalisten krijgen op sociale platformen nog relatief veel aandacht. De betrouwbaarheid hoeft dus niet te verdwijnen, de presentatie kan persoonlijker.</p>
    <div class="chips"><span>SPILNEWS: jonge journalisten, influencerachtige stijl</span><span>NU.nl: video-first strategie</span><span>NOS Stories: groot bereik op TikTok en Instagram</span></div>
    <p class="src">Onderzoek: SPIL (Mediahuis, juni 2025) maakt alleen video en podcasts voor TikTok, Instagram en YouTube; slechts 36% van de jongeren voelt zich vertegenwoordigd door de media. NOS Stories begon in 2015 als NOS Kort op Instagram (2018: 300.000+ volgers); een bron voor TikTok-bereik is niet gevonden. Over de video-first strategie van NU.nl is nog niets gevonden.</p>
    <blockquote class="quote small">Het gaat er niet om dat journalistiek op influencers moet lijken, maar dat de maker <mark>zichtbaarder onderdeel</mark> wordt van de storytelling.</blockquote>
    <h4>Authenticiteit boven perfectie</h4>
    <p>TikTok noemt onder de term Reali-TEA een beweging richting eerlijkere verhalen, echte processen en behind-the-scenescontent. De maker kan het onderzoeksproces zichtbaar maken: welke vraag stond aan het begin, welke locatie wordt bezocht, welke informatie komt onverwacht naar voren.</p>
    <p class="callout">Laagdrempelig in vorm, professioneel in inhoud.</p>`,
    `<h3>Gelaagd: artikel, platformen en AI</h3>
    <div class="layers">
      <div><small>Ontdekken</small><b>TikTok, Instagram</b><span>Korte verticale storytelling die nieuwsgierigheid wekt</span></div>
      <div><small>Volgen</small><b>YouTube</b><span>Langere video en verdieping</span></div>
      <div><small>Verdiepen</small><b>Website, artikel</b><span>Bronnen, cijfers, interviews en context die in een korte video niet passen</span></div>
    </div>
    <p>Het nieuwsartikel verandert van eindproduct naar <b>verdiepingslaag</b>: sociale media maken het onderwerp ontdekkingswaardig, journalistieke artikelen maken het begrijpelijk en controleerbaar. Dat wordt belangrijker nu het vertrouwen in online informatie onder druk staat.</p>
    <div class="cols"><div class="card"><h4>Nieuwe platformen</h4><p>Nederlandse nieuwsorganisaties verhuizen deels van X naar Bluesky, maar Threads en Bluesky hebben voor nieuws nog een beperkt bereik. Niet ieder platform is automatisch een kans.</p></div><div class="card"><h4>AI als toegangspoort</h4><p>Steeds meer mensen vragen een AI-systeem om nieuws. Herkomst, onderzoeker en onderbouwing moeten duidelijk zijn.</p></div></div>
    <p class="callout">Niet: “Op welke nieuwe sociale media moeten we zitten?”<br>Wel: “Welke rol kan ieder platform spelen binnen de gebruikersreis van ons verhaal?”</p>`] },

  // ───────────────────────── 03 Doelgroep
  { tab: 'Opdracht', title: 'Doelgroep', pages: [
    `<h3>Primaire doelgroep</h3>
    
    <blockquote class="quote">${D}Nieuwsgierige mediagebruikers die geïnteresseerd zijn in maatschappelijke en actuele onderwerpen, maar deze op een <mark>toegankelijke en aantrekkelijke manier</mark> willen ontdekken.</blockquote>
    <p>Bewust geen demografische kenmerken zoals leeftijd, geslacht of woonplaats: die zeggen niet automatisch iets over hoe iemand media consumeert. De doelgroep wordt benaderd vanuit:</p>
    <div class="chips"><span>Mediagedrag</span><span>Behoeften</span><span>Frustraties</span><span>Interesses</span><span>Gebruikscontext</span></div>
    <p>Vanuit de briefing: de precieze doelgroep ligt niet vooraf vast en kan per concept worden bepaald. Het concept past wel bij de identiteit van de VPRO: <b>nieuwsgierig, onafhankelijk en eigenzinnig</b>. Technologie kan media ook toegankelijk maken voor nieuwe doelgroepen, bijvoorbeeld door andere talen, vormen van interactie of toegankelijkheidsmogelijkheden.</p>
    <h4>Jonge mediagebruikers</h4>
    
    <blockquote class="quote">${D}Jonge mediagebruikers die <mark>digital-native</mark>, mobiel georiënteerd en gewend aan interactieve, gepersonaliseerde platforms zijn.</blockquote>
    <div class="vs">
      <div class="col good"><small>Waar ze waarde aan hechten</small>
        <div class="item"><span>Authenticiteit</span></div>
        <div class="item"><span>Rauwe verhalen</span></div>
        <div class="item"><span>Maatschappelijke diepgang</span></div>
      </div>
      <div class="col bad"><small>Waar ze van afhaken</small>
        <div class="item"><span>Passieve programma's</span></div>
        <div class="item"><span>Belerende programma's</span></div>
        <div class="item"><span>Stoffige praatprogramma's</span></div>
      </div>
    </div>
    <p class="callout">Ze zoeken unieke, zintuiglijke belevingen waarin vermaak, cultuur en ontdekking in het echte leven samenkomen.</p>
    <h4>Mediagebruik: van kort contact naar verdieping</h4>
    <p>De doelgroep is niet noodzakelijk actief op zoek naar uitgebreide journalistieke verdieping. Een onderwerp komt eerst onder de aandacht via een korte video, fragment of bericht.</p>
    <ol class="flow"><li><small>1</small><b>Scrollen</b><span>vluchtige aandacht, content concurreert met alles</span></li><li><small>2</small><b>Nieuwsgierig</b><span>een vraag, beeld of onverwachte situatie stopt het scrollen</span></li><li><small>3</small><b>Verdiepen</b><span>video, podcast, website, documentaire</span></li><li><small>4</small><b>Zelf zoeken</b><span>aanvullende informatie opzoeken</span></li></ol>
    <div class="cols"><div class="card"><h4>Sociale media</h4><p>Ontdekking en nieuwsgierigheid</p></div><div class="card"><h4>Lange video, podcast, artikel</h4><p>Uitleg en verdieping</p></div></div>
    <blockquote class="quote small">Er is verschil tussen <mark>snel de aandacht krijgen</mark> en <mark>snel alle informatie vertellen</mark>.</blockquote>
    <p>Een goede opening hoeft het onderwerp nog niet uit te leggen: een vraag, situatie of conflict waardoor de gebruiker wil weten wat er daarna gebeurt, is genoeg. Wie bewust kiest voor een lange productie investeert meer aandacht en geeft ruimte aan complexere informatie en meerdere perspectieven.</p>
    <h4>Behoeften en frustraties</h4>
    <div class="vs">
      <div class="col good"><small>Behoeften</small>
        <div class="item"><b>Begrijpelijkheid</b><span>Complexe onderwerpen begrijpelijk, zonder de inhoud te versimpelen. Een persoonlijk verhaal als ingang.</span></div>
        <div class="item"><b>Relevantie</b><span>Niet alleen wat er gebeurt, maar waarom het ertoe doet: wat betekent dit in de praktijk?</span></div>
        <div class="item"><b>Authenticiteit en betrouwbaarheid</b><span>Een onderzoekende vertelvorm: beginnen bij een observatie of vraag, niet bij een opgelegde boodschap.</span></div>
        <div class="item"><b>Tempo en voortgang</b><span>Niet voortdurend snel, wel het gevoel dat het verhaal vooruitgaat.</span></div>
        <div class="item"><b>Inhoudelijke verdieping</b><span>Na afloop meer begrijpen dan aan het begin.</span></div>
      </div>
      <div class="col bad"><small>Frustraties en afhaakmomenten</small>
        <div class="item"><b>Te lang onduidelijk</b><span>De productie heeft te lang nodig om duidelijk te maken waar het over gaat.</span></div>
        <div class="item"><b>Te veel informatie tegelijk</b><span>Veel feiten, namen en cijfers zonder dat duidelijk is waarom ze belangrijk zijn: cognitieve belasting.</span></div>
        <div class="item"><b>Te oppervlakkig</b><span>Snelle beelden en opvallende titels, maar weinig nieuwe informatie.</span></div>
        <div class="item"><b>Te sterk gestuurde boodschap</b><span>Als vooraf duidelijk is welke conclusie je moet trekken, voelt het minder onderzoekend en betrouwbaar.</span></div>
      </div>
    </div>
    <h4>Interesses</h4>
    <p class="lead">Het gemeenschappelijke zit niet in één thema, maar in <mark>nieuwsgierigheid naar verhalen die iets laten zien wat niet direct zichtbaar is</mark>.</p>
    <div class="chips"><span>Maatschappelijke veranderingen</span><span>Technologie</span><span>Cultuur</span><span>Identiteit</span><span>Menselijk gedrag</span><span>Actuele ontwikkelingen</span><span>Onbekende werelden</span><span>Persoonlijke ervaringen</span></div>
    <div class="compare"><div class="no"><small>Niet nodig</small><p>Vooraf geïnteresseerd zijn in het <b>onderwerp</b>, zoals kunstmatige intelligentie, woningnood of arbeidsomstandigheden.</p></div><div class="yes"><small>Wel mogelijk</small><p>Interesse in het <b>verhaal</b>, via een interessante persoon, onverwachte gebeurtenis of herkenbare situatie.</p></div></div>
    <aside class="note">“Na het bekijken begrijp je iets wat je hiervoor nog niet zag.”<small>De inhoudelijke belofte aan de doelgroep</small></aside>`,
    `<h3>Stakeholders</h3>
    <p>Naast de primaire doelgroep zijn meer partijen betrokken. Hun belangen botsen soms met elkaar.</p>
    <div class="cards">
      <div class="card"><h4>Maker of redactie</h4><p>Belang: inhoudelijk sterk én aantrekkelijk genoeg om bekeken te worden.</p><em>Spanning: journalistieke verdieping vs narratieve toegankelijkheid.</em></div>
      <div class="card"><h4>Experts en bronnen</h4><p>Belang: een correcte weergave van informatie en voldoende context.</p><em>Spanning: specialistische kennis is niet direct toegankelijk.</em></div>
      <div class="card"><h4>Hoofdpersonen</h4><p>Belang: een eerlijke en zorgvuldige representatie van hun ervaring.</p><em>Spanning: een persoonlijk verhaal is meer dan een middel voor emotie.</em></div>
      <div class="card"><h4>Mediaorganisatie / opdrachtgever</h4><p>Belang: kwaliteit, bereik en aansluiting bij de identiteit van het merk.</p><em>Spanning: optimaliseren voor bereik vs journalistieke verdieping.</em></div>
      <div class="card"><h4>Mediaplatformen</h4><p>Bepalen mede hoe content wordt ontdekt: formats, thumbnails, titels, aanbevelingen.</p><em>Spanning: de platformlogica mag het verhaal niet volledig bepalen.</em></div>
    </div>
    <h4>Stakeholdermap</h4>
    <p class="lead">Wie heeft iets te maken met ons project, en <mark>hoeveel invloed en belang</mark> hebben ze? Klik een stakeholder voor het actieplan.</p>
    <div class="smap">
      <span class="ax y">Invloed ↑</span>
      <div class="grid"><div class="q tevreden"><h4>Tevreden houden</h4><small>Veel invloed, weinig belang</small><div class="chips"><button data-s="rechten">Rechthebbenden van archief en muziek</button><button data-s="platformen">Mediaplatformen</button></div></div><div class="q nauw"><h4>Nauw betrekken</h4><small>Veel invloed, veel belang</small><div class="chips"><button data-s="vpro">VPRO Medialab (opdrachtgever)</button><button data-s="docent">Docent / beoordelaar</button></div></div><div class="q monitor"><h4>Monitoren</h4><small>Weinig invloed, weinig belang</small><div class="chips"><button data-s="studenten">Medestudenten</button><button data-s="toegang">Nieuwe doelgroepen via toegankelijkheid</button></div></div><div class="q op"><h4>Op de hoogte houden</h4><small>Weinig invloed, veel belang</small><div class="chips"><button data-s="doelgroep">Primaire doelgroep: jonge mediagebruikers</button><button data-s="sprekers">Hoofdpersonen en sprekers</button><button data-s="experts">Experts en bronnen</button><button data-s="redactie">Maker of redactie</button></div></div></div>
      <span class="ax x">Belang →</span>
    </div>
    <div class="cols"><div class="card"><h4>Zo lees je de matrix</h4><p><b>Veel invloed + veel belang:</b> nauw contact, actief betrekken. <b>Veel invloed + weinig belang:</b> tevreden houden. <b>Weinig invloed + veel belang:</b> op de hoogte houden. <b>Weinig invloed + weinig belang:</b> af en toe inchecken.</p></div>
    <div class="card"><h4>Status</h4><p>Digitaal, versie 1.0. De plaatsing is een eerste inschatting op basis van de briefing en het onderzoek en moet nog met de stakeholders zelf worden gecontroleerd.</p></div></div>
    <p class="src">Methode: stakeholdermapping (Smart Media Production, blok 05). Stakeholders komen uit de briefing, het onderzoek en de cursusvoorbeelden.</p>
    <h4>Actieplan per stakeholder</h4>
    <p>Per stakeholder: wat willen ze, hoe houden we ze betrokken (samenwerking, contact, feedback) en aan welke (eind)producten koppelen we ze.</p>
    <div class="cards plan"><div class="card" id="sh-vpro"><h4>VPRO Medialab (opdrachtgever)</h4><span class="tagq nauw">Nauw betrekken</span><dl><dt>Belang</dt><dd>Een concept met een echt nieuwe media-ervaring, waarin technologie essentieel is en dat past bij de identiteit van de VPRO.</dd><dt>Betrokken houden</dt><dd>Feedbackmoment na fase 1; daarna regelmatig contact over de gekozen richting.</dd><dt>Gekoppeld aan</dt><dd>Concept, prototype en eindresultaat</dd></dl></div><div class="card" id="sh-docent"><h4>Docent / beoordelaar</h4><span class="tagq nauw">Nauw betrekken</span><dl><dt>Belang</dt><dd>Een onderbouwd en afgerond product dat laat zien dat we zelfstandig met stakeholders afstemmen (S 2.3).</dd><dt>Betrokken houden</dt><dd>Feedback vragen op tussenproducten en de stakeholdermap zelf.</dd><dt>Gekoppeld aan</dt><dd>Alle (tussen)producten</dd></dl></div><div class="card" id="sh-rechten"><h4>Rechthebbenden van archief en muziek</h4><span class="tagq tevreden">Tevreden houden</span><dl><dt>Belang</dt><dd>Auteursrecht en verantwoord gebruik van archiefmateriaal en tracks (rechten en ethiek uit de briefing).</dd><dt>Betrokken houden</dt><dd>Vroeg checken wat mag en onder welke voorwaarden; niet lastigvallen met halve ideeën.</dd><dt>Gekoppeld aan</dt><dd>Archieflaag en muzieklaag van de podwalk</dd></dl></div><div class="card" id="sh-platformen"><h4>Mediaplatformen</h4><span class="tagq tevreden">Tevreden houden</span><dl><dt>Belang</dt><dd>Eigen regels voor formats, thumbnails, titels en aanbevelingen.</dd><dt>Betrokken houden</dt><dd>Regels kennen en vooraf meenemen in de ontwerpkeuzes.</dd><dt>Gekoppeld aan</dt><dd>Kanalen waarop het verhaal wordt ontdekt</dd></dl></div><div class="card" id="sh-doelgroep"><h4>Primaire doelgroep: jonge mediagebruikers</h4><span class="tagq op">Op de hoogte houden</span><dl><dt>Belang</dt><dd>Authenticiteit, rauwe verhalen en maatschappelijke diepgang; geen passief of belerend format.</dd><dt>Betrokken houden</dt><dd>Het prototype laten zien en reacties ophalen (nog toe te voegen als fieldresearch).</dd><dt>Gekoppeld aan</dt><dd>Prototype van de podwalk</dd></dl></div><div class="card" id="sh-sprekers"><h4>Hoofdpersonen en sprekers</h4><span class="tagq op">Op de hoogte houden</span><dl><dt>Belang</dt><dd>Een eerlijke en zorgvuldige representatie van hun ervaring.</dd><dt>Betrokken houden</dt><dd>Op de hoogte houden van hoe hun verhaal wordt gebruikt; laten meekijken.</dd><dt>Gekoppeld aan</dt><dd>Verhalen en stemlaag van de route</dd></dl></div><div class="card" id="sh-experts"><h4>Experts en bronnen</h4><span class="tagq op">Op de hoogte houden</span><dl><dt>Belang</dt><dd>Een correcte weergave van informatie met voldoende context.</dd><dt>Betrokken houden</dt><dd>Feiten laten controleren en feedback vragen op de inhoud.</dd><dt>Gekoppeld aan</dt><dd>Inhoud van de stops</dd></dl></div><div class="card" id="sh-redactie"><h4>Maker of redactie</h4><span class="tagq op">Op de hoogte houden</span><dl><dt>Belang</dt><dd>Inhoudelijk sterk én aantrekkelijk genoeg om bekeken te worden.</dd><dt>Betrokken houden</dt><dd>Meenemen in keuzes tussen journalistieke verdieping en toegankelijkheid.</dd><dt>Gekoppeld aan</dt><dd>Verhaalopbouw per stop</dd></dl></div><div class="card" id="sh-studenten"><h4>Medestudenten</h4><span class="tagq monitor">Monitoren</span><dl><dt>Belang</dt><dd>Een duidelijk en bruikbaar ontwerp; ze geven feedback op onze producten.</dd><dt>Betrokken houden</dt><dd>Af en toe feedback vragen, maar niet alleen bij hen blijven.</dd><dt>Gekoppeld aan</dt><dd>Tussenproducten</dd></dl></div><div class="card" id="sh-toegang"><h4>Nieuwe doelgroepen via toegankelijkheid</h4><span class="tagq monitor">Monitoren</span><dl><dt>Belang</dt><dd>Toegang tot VPRO-content via andere talen, vormen van interactie of toegankelijkheidsmogelijkheden (briefing).</dd><dt>Betrokken houden</dt><dd>Volgen en onderzoeken waar de technologie extra toegang geeft.</dd><dt>Gekoppeld aan</dt><dd>Interface van de app</dd></dl></div></div>
    <p class="callout">Feedback vragen we bij verschillende stakeholders, niet alleen bij medestudenten of docenten.</p>`] },

  // ───────────────────────── 04 Onderzoek & inzichten
  { tab: 'Onderzoek', title: 'Onderzoek &amp; inzichten', short: 'Onderzoek &amp; inzichten', pages: [
    `<h3>Overzicht van het onderzoek</h3>
    <div class="cards three">
      <div class="card"><h4>Onderzoekskader</h4><p>Context, vraagstuk, doelgroep, afbakening en hoofdvragen van ons eigen project</p><em>Eigen kader</em></div>
      <div class="card"><h4>Best practice: storytelling</h4><p>Hoe de VPRO verhalen opbouwt</p><em>Deskresearch</em></div>
      <div class="card"><h4>Best practice: cases</h4><p>Vijf VPRO-series en wat ze betekenen voor een podwalk</p><em>Deskresearch</em></div>
      <div class="card"><h4>Doelgroepanalyse</h4><p>Mediagedrag, behoeften, frustraties, stakeholders</p><em>Deskresearch</em></div>
      <div class="card"><h4>Trendanalyse</h4><p>Hoe mensen nieuws ontdekken en consumeren</p><em>Deskresearch</em></div>
    </div>
    <p class="callout">Fieldresearch: nog toe te voegen. In de aangeleverde documenten staat alleen deskresearch.</p>`,
    `<h3>Trendanalyse: wat het onderzoek laat zien</h3>
    <p class="lead">De grootste trend is niet één platform of format, maar dat de <mark>route naar journalistieke informatie</mark> verandert.</p>
    <div class="vs"><div class="col bad"><small>Uitdaging</small><div class="item"><span>Traditionele journalistieke content krijgt niet automatisch aandacht. Het publiek komt niet meer vanzelf naar de opdrachtgever toe.</span></div></div><div class="col good"><small>Kans</small><div class="item"><span>De betrouwbaarheid en kwaliteit van journalistiek combineren met de toegankelijkheid en persoonlijkheid van sociale media.</span></div></div></div>
    <p>Niet journalistiek simpelweg “korter” of “meer TikTok” maken, maar <b>platformgerichte storytelling</b> waarbij ieder medium een eigen functie heeft: sociale media wekken nieuwsgierigheid, herkenbare makers creëren betrokkenheid, langere producties bieden context, controleerbaarheid en verdieping. TikTok, Instagram, YouTube en artikelen zijn zo onderdelen van één verhaalwereld.</p>`,
    `<h3>Best practice: het storytellingmodel van de VPRO</h3>
    <p class="lead">De VPRO combineert <mark>journalistieke verdieping</mark> met creatieve en verhalende vertelvormen. De vertelvorm is onderdeel van de manier waarop een onderwerp wordt onderzocht en betekenis krijgt.</p>
    <ol class="steps big">
      <li><b>Verwondering / trigger</b><span>Er gebeurt iets opvallends, onverwachts of problematisch: nieuwsgierigheid.</span></li>
      <li><b>Menselijke ingang</b><span>Een persoon, situatie of concrete gebeurtenis maakt het onderwerp toegankelijk.</span></li>
      <li><b>Centrale vraag</b><span>Een vraag waarop nog geen volledig antwoord bestaat.</span></li>
      <li><b>Zoektocht</b><span>De maker, hoofdpersoon of journalist probeert antwoord te krijgen.</span></li>
      <li><b>Complicatie en verdieping</b><span>De werkelijkheid blijkt complexer dan gedacht.</span></li>
      <li><b>Uitzoomen naar context</b><span>De persoonlijke situatie wordt gekoppeld aan een groter maatschappelijk vraagstuk.</span></li>
      <li><b>Onderliggende betekenis</b><span>Wat zegt dit uiteindelijk over ons, onze samenleving of de wereld waarin we leven?</span></li>
    </ol>`,
    `<h3>Best practice: de principes erachter</h3>
    <div class="cards">
      <div class="card"><h4>Begin bij een vraag</h4><p>Een information gap: het verschil tussen wat de kijker weet en wil weten.</p></div>
      <div class="card"><h4>Klein in de ingang, groot in de betekenis</h4><p>Persoonlijke ervaring, concreet probleem, groter vraagstuk, maatschappelijke context.</p></div>
      <div class="card"><h4>De zoektocht is de motor</h4><p>Iedere ontdekking brengt het verhaal verder en roept een nieuwe vraag op (Argos: HUMAN en VPRO).</p></div>
      <div class="card"><h4>Spanning door ontwikkeling</h4><p>Niet door sensatie: wat is er gebeurd, waarom, wie is verantwoordelijk, wat zegt het over het systeem?</p></div>
      <div class="card"><h4>Een herkenbaar perspectief</h4><p>Duidelijk vanuit welk perspectief het verhaal wordt verteld, met een controleerbare feitelijke basis.</p></div>
      <div class="card"><h4>Vorm en inhoud als één geheel</h4><p>Beeld, geluid, montage en stilte zijn betekenisdragend, geen decoratie.</p></div>
    </div>
    <p class="callout">Van verwondering, naar persoonlijke ervaring, naar onderzoek, naar verdieping, naar maatschappelijke betekenis.</p>`,
    `<h3>Best practice: cases (1 t/m 3)</h3>
    <p class="lead">${D}Vijf VPRO-series, elk geanalyseerd op <mark>vorm, formule, succesfactor en implementatie</mark> voor onze podwalk.</p>
    <div class="cards cases"><div class="card case"><h4>1. 50 jaar hiphop in Nederland: Iemand moet het doen</h4><figure class="frame"><a href="https://www.vpro.nl/50-jaar-hiphop-in-nederland-iemand-moet-het-doen/info/50-jaar-hiphop-in-nederland" target="_blank" rel="noopener"><img src="https://images.vpro.nl/1ub8n6eicyrd/w_1200/50jr-hiphop-nl-imhd-vpro-2025-beeldmerk-c-jay-sunsmith.jpg" alt="Beeldmerk van 50 jaar hiphop in Nederland" loading="lazy" decoding="async" referrerpolicy="no-referrer"></a><figcaption>Beeldmerk, © Jay Sunsmith / VPRO</figcaption></figure><dl><dt>Vorm</dt><dd>Documentaireserie over de geschiedenis en evolutie van de Nederlandse hiphopcultuur.</dd><dt>Formule</dt><dd>Per aflevering ligt de focus op een specifiek tijdperk. Artiesten vertellen het verhaal van de aflevering, maar worden ondersteund door archiefmateriaal en het spelen van de tracks waar ze over praten.</dd><dt>Succesfactor</dt><dd>Meeslepende manier van storytelling: door het afwisselen van interviews met de artiesten, archiefbeelden en ondertussen de tracks, wordt je hele zintuiglijke beleving betrokken.</dd><dt>Implementatie</dt><dd>Deze serie is perfect om een concrete fysieke immersive podwalk-route op te baseren. Net zoals in de serie combineren we gesproken geschiedenisvertelling met andere vormen van geluid en visuals om de zintuigen actief te prikkelen en de luisteraar echt in het verhaal mee te trekken.</dd><dt>Onderzoek</dt><dd>Zesdelige serie van Ivan Barbosa en Sacha Vermeulen, coproductie met Scenery, uitgezonden vanaf 30 november 2025 op NPO 3 en NPO Start. Aflevering 1 (Grondleggers) behandelt de jaren zeventig en tachtig. Ook de keerzijde komt aan bod: commercialisering, mediaframing en de persoonlijke tol.</dd></dl></div><div class="card case"><h4>2. 30 jaar Dutch Dance</h4><figure class="frame"><a href="https://www.vpro.nl/programmas/30jaardutchdance" target="_blank" rel="noopener"><img src="https://images.vpro.nl/3e9e1qwcpgl7/w_1200/30-jaar-dutch-dance-social.jpg" alt="Beeld van 30 jaar Dutch Dance" loading="lazy" referrerpolicy="no-referrer"></a><figcaption>Beeld: 30 jaar Dutch Dance, VPRO</figcaption></figure><dl><dt>Vorm</dt><dd>Verhalende documentaireserie over de geschiedenis van dutch dance.</dd><dt>Formule</dt><dd>Iedere aflevering behandelt een specifieke fase in de evolutie van de Nederlandse dance. Persoonlijke verhalen van dj’s en organisatoren worden gemixt met archiefmateriaal van clubnachten.</dd><dt>Succesfactor</dt><dd>Maakt de clubcultuur tastbaar en historisch urgent door rauwe beelden van legendarische, inmiddels verdwenen clubs te combineren met de euforische tracks van toen. Hierdoor is het meeslepend.</dd><dt>Implementatie</dt><dd>Serie gebruiken als onderwerp van een immersive podwalk. Inspelen op immersie door op meerdere zintuigen in te spelen: terwijl de gebruiker de route loopt en de podcast luistert, toont de app ondertussen archiefbeelden van vroeger op exact die plek met bijbehorende historische soundscapes.</dd><dt>Onderzoek</dt><dd>Drieluik uitgezonden van 20 oktober tot 3 november 2018 (Pionieren, Harder harder harder, De wijde wereld). Het project heeft ook podcasts en een website vol interviews en archiefmateriaal, dus de archieflaag bestaat al online.</dd></dl></div><div class="card case"><h4>3. De Roze Revolutie</h4><figure class="frame"><a href="https://www.vpro.nl/de-roze-revolutie/info/over-de-serie" target="_blank" rel="noopener"><img src="https://images.vpro.nl/j4awf2lxwp7/w_1200/source.jpg" alt="Beeld uit De Roze Revolutie" loading="lazy" referrerpolicy="no-referrer"></a><figcaption>Beeld: De Roze Revolutie, VPRO</figcaption></figure><dl><dt>Vorm</dt><dd>Vierdelige verhalende documentaireserie over vijftig jaar LHBTQIA+-emancipatiestrijd in Nederland.</dd><dt>Formule</dt><dd>Iedere aflevering focust op een specifiek thema en historisch kantelpunt van de LHBTIQ+ gemeenschap. De hoofdpersonen zitten in een fysieke ruimte waar historische beelden en archieffragmenten 360 graden om hen heen worden geprojecteerd terwijl ze hun verhaal vertellen.</dd><dt>Succesfactor</dt><dd>De driedimensionale setting waarin sprekers letterlijk worden omringd door geprojecteerde archiefbeelden maakt het verhaal tastbaar. De dialoog tussen verschillende generaties maakt het voor leeftijden interessant en relevant.</dd><dt>Implementatie</dt><dd>Serie gebruiken als onderwerp voor één van de podwalks. Net zoals in de aflevering inspelen op een immersieve ervaring.</dd><dt>Onderzoek</dt><dd>Vierdelige serie van regisseur Michiel van Erp, uitgezonden van 10 tot 31 mei 2021. Van Erp onderzoekt vanuit zijn persoonlijke verwondering de geschiedenis van de LHBTQIA+-beweging in Nederland.</dd></dl></div></div>`,
    `<h3>Best practice: cases (4 en 5)</h3>
    <div class="cards cases"><div class="card case"><h4>4. De nieuwe generaties van Suriname</h4><figure class="frame"><a href="https://www.vpro.nl/de-nieuwe-generaties-van-suriname/" target="_blank" rel="noopener"><img src="https://images.vpro.nl/5ovt6hw5klu1/w_1200/de-nieuwe-generaties-van-suriname-2025-vpro-still2-c-vpro-omroep-zwart.jpg" alt="Still uit De nieuwe generaties van Suriname" loading="lazy" referrerpolicy="no-referrer"></a><figcaption>Still, © VPRO / Omroep Zwart</figcaption></figure><dl><dt>Vorm</dt><dd>Vierdelige verhalende documentaireserie over identiteit, cultureel erfgoed en hoe jonge Nederlandse Surinamers zich opnieuw verbinden met hun roots.</dd><dt>Formule</dt><dd>De hoofdpersonen onderzoeken wat ze hebben meegekregen van hun (groot)ouders en hoe ze die erfenis op hun eigen, hedendaagse manier voortzetten.</dd><dt>Succesfactor</dt><dd>Spreekt een jonge, biculturele generatie direct aan doordat het niet blijft hangen in nostalgie of enkel historisch leed, maar focust op trots, eigentijdse creativiteit en toekomstvisie.</dd><dt>Implementatie</dt><dd>Serie als inspiratiebron gebruiken voor een maatschappelijke en culturele podwalkroute over de Surinaams-Nederlandse diaspora en stadsgeschiedenis (bijvoorbeeld in Amsterdam Zuidoost of Oost). Net als in de afleveringen koppelen we familie- en herkomstverhalen aan concrete fysieke plekken waar die geschiedenis nog voelbaar is.</dd><dt>Onderzoek</dt><dd>Serie van Amanda van Hesteren, een samenwerking van Omroep Zwart en de VPRO (coproductie Scenery), najaar 2025 op NPO 3 en NPO Start. Jongeren starten in Suriname een project: een boksschool nieuw leven inblazen, cassaveteelt, een theatervoorstelling, een ziekenhuisontwerp.</dd></dl></div><div class="card case"><h4>5. YOUS &amp; YAY: In het wild</h4><figure class="frame"><a href="https://www.vpro.nl/yous-yay-in-het-wild/info/over-seizoen-1" target="_blank" rel="noopener"><img src="https://images.vpro.nl/5j8juilyi900/w_1200/source.jpg" alt="Beeld uit Yous &amp; Yay in het wild" loading="lazy" referrerpolicy="no-referrer"></a><figcaption>Beeld: Yous &amp; Yay in het wild, VPRO</figcaption></figure><dl><dt>Vorm</dt><dd>Verhalende interview- en wandelpodcast op locatie met prominente makers en kunstenaars.</dd><dt>Formule</dt><dd>De presentatoren nemen per aflevering één gast mee op pad in de buitenlucht of op een betekenisvolle openbare plek. Geen statische studio-opstelling: omgevingsgeluiden (voetstappen, verkeer, voorbijgangers, weersomstandigheden) vormen een natuurlijk decor en sturen soms spontaan het gesprek. Ongehaaste, diepgaande en associatieve dialogen.</dd><dt>Succesfactor</dt><dd>De intieme, rauwe setting: doordat er gewandeld wordt in de openbare ruimte ontstaat er veel sneller openheid en kwetsbaarheid dan tijdens een traditioneel studio-interview. Hoge herkenbaarheid voor jongvolwassenen dankzij de authentieke, ongefilterde VPRO-tone-of-voice en de gedeelde leefwereld tussen hosts en gasten. Het decor leeft mee: de luisteraar krijgt door de continue achtergrondgeluiden het zintuiglijke gevoel daadwerkelijk fysiek mee te lopen.</dd><dt>Implementatie</dt><dd>De serie bewijst dat wandelen mensen openstelt voor introspectie en maatschappelijke verhalen, wat de kern vormt van onze immersieve podwalk. We hanteren dezelfde informele, wandelende vertelstijl: de podwalk klinkt niet als een belerende museumgids, maar als een toffe maker die informeel met je meepraat terwijl je zelf door de stad loopt. Omgevingsgeluid als actieve laag: we filteren het fysieke straatgeluid niet weg, maar laten het vloeiend versmelten met de audiolagen en soundscapes in de app.</dd><dt>Onderzoek</dt><dd>Yousef Gnaoui (Yous) en Pepijn Lanen (Yay) ontvangen gasten; seizoen 1 in december 2024, seizoen 2 vanaf 22 maart op VPRO en NPO 3. Let op: de VPRO-pagina’s beschrijven dit als televisieserie, in onze analyse staat het als wandelpodcast. Controleer welk format we bedoelen.</dd></dl></div></div>`,
    `<h3>Doelgroeponderzoek</h3>
    <p class="lead">${D}Het gemeenschappelijke zit niet in één thema, maar in <mark>nieuwsgierigheid naar verhalen die iets laten zien wat niet direct zichtbaar is</mark>.</p>
    <div class="cards plan"><div class="card"><h4>Mediagebruik</h4><dl><dt>Onderzoek</dt><dd>Een onderwerp komt eerst onder de aandacht via een korte video, fragment of bericht.</dd><dt>Inzicht</dt><dd>Er is verschil tussen snel de aandacht krijgen en snel alle informatie vertellen.</dd><dt>Ontwerpkeuze</dt><dd>Een opening die nieuwsgierigheid wekt, daarna pas verdieping.</dd></dl></div><div class="card"><h4>Behoeften en frustraties</h4><dl><dt>Onderzoek</dt><dd>Behoefte aan begrijpelijkheid, relevantie en authenticiteit; afhaken bij te lang onduidelijk, te veel informatie en een te sterk gestuurde boodschap.</dd><dt>Inzicht</dt><dd>Complexe onderwerpen kunnen begrijpelijk zijn zonder dat de inhoud wordt versimpeld.</dd><dt>Ontwerpkeuze</dt><dd>Een persoonlijk verhaal als ingang, informatie doseren, onderzoekend in plaats van sturend vertellen.</dd></dl></div><div class="card"><h4>Interesses</h4><dl><dt>Onderzoek</dt><dd>Geen vaste thema's: maatschappelijke veranderingen, technologie, cultuur, identiteit en menselijk gedrag.</dd><dt>Inzicht</dt><dd>Interesse in het verhaal gaat vóór interesse in het onderwerp.</dd><dt>Ontwerpkeuze</dt><dd>Een interessante persoon, onverwachte gebeurtenis of herkenbare situatie als ingang.</dd></dl></div></div>
    <p class="callout">Fieldresearch (gesprekken en tests met de doelgroep): nog toe te voegen.</p>`,
    `<h3>Van onderzoek naar ontwerpkeuze</h3>
    <p class="lead">Elke ontwerpkeuze volgt uit een <mark>onderzoek</mark> en het <mark>inzicht</mark> dat daaruit komt.</p>
    <div class="cards plan"><div class="card"><h4>Eerst nieuwsgierigheid</h4><dl><dt>Onderzoek</dt><dd>Trendanalyse: nieuws wordt vaak ontdekt tussen andere content, niet gezocht.</dd><dt>Inzicht</dt><dd>Een verhaal moet ook aantrekkelijk zijn voor wie nog niet weet dat hij of zij geïnteresseerd is.</dd><dt>Ontwerpkeuze</dt><dd>Beginnen met verwondering en een vraag in plaats van uitleg.</dd></dl></div><div class="card"><h4>Ieder medium een eigen functie</h4><dl><dt>Onderzoek</dt><dd>Trendanalyse: ontdekken, volgen en verdiepen gebeurt op verschillende plekken.</dd><dt>Inzicht</dt><dd>Sociale media wekken nieuwsgierigheid, langere producties geven context en verdieping.</dd><dt>Ontwerpkeuze</dt><dd>Vanaf het begin denken in lagen: één verhaalwereld.</dd></dl></div><div class="card"><h4>Zintuigen actief prikkelen</h4><dl><dt>Onderzoek</dt><dd>Best practice: 50 jaar hiphop en 30 jaar Dutch Dance wisselen interviews, archief en tracks af.</dd><dt>Inzicht</dt><dd>Het afwisselen van vormen betrekt de hele zintuiglijke beleving.</dd><dt>Ontwerpkeuze</dt><dd>Interviews, archief en tracks afwisselen; archiefbeelden en soundscapes op de plek zelf.</dd></dl></div><div class="card"><h4>Een toon alsof iemand meeloopt</h4><dl><dt>Onderzoek</dt><dd>Best practice: YOUS &amp; YAY wandelen met hun gast; omgevingsgeluid vormt het decor.</dd><dt>Inzicht</dt><dd>Wandelen in de openbare ruimte geeft openheid en het gevoel fysiek mee te lopen.</dd><dt>Ontwerpkeuze</dt><dd>Informele, wandelende vertelstijl en omgevingsgeluid als actieve laag.</dd></dl></div><div class="card"><h4>Verhalen aan plekken koppelen</h4><dl><dt>Onderzoek</dt><dd>Best practice: De Roze Revolutie en De nieuwe generaties van Suriname.</dd><dt>Inzicht</dt><dd>Een dialoog tussen generaties en persoonlijke verhalen maken het onderwerp tastbaar en relevant.</dd><dt>Ontwerpkeuze</dt><dd>Familie- en herkomstverhalen koppelen aan plekken waar de geschiedenis nog voelbaar is.</dd></dl></div><div class="card"><h4>Onderzoekend, niet sturend</h4><dl><dt>Onderzoek</dt><dd>Doelgroepanalyse: afhaken bij belerende en te sterk gestuurde programma's.</dd><dt>Inzicht</dt><dd>Als vooraf duidelijk is welke conclusie je moet trekken, voelt het minder betrouwbaar.</dd><dt>Ontwerpkeuze</dt><dd>Ruimte laten aan de gebruiker; herkomst van informatie zichtbaar maken.</dd></dl></div></div>
    <p class="callout">Fieldresearch (gesprekken en tests met de doelgroep): nog toe te voegen. Deze lijn is nu gebaseerd op deskresearch.</p>`,
    `<h3>Lessen uit de best practice</h3>
    <p>De VPRO zet storytelling in als een proces van geleidelijke betekenisgeving. Vijf lessen voor een eigen mediaproductie:</p>
    <ol class="steps">
      <li><b>Begin met verwondering in plaats van uitleg</b><span>Formuleer een centrale vraag die nieuwsgierigheid oproept.</span></li>
      <li><b>Kies een menselijke ingang</b><span>Laat een groter thema ervaren worden via een concreet persoon, moment of situatie.</span></li>
      <li><b>Doseer informatie</b><span>Geef niet direct het antwoord, maar bouw het verhaal op als een reeks ontdekkingen.</span></li>
      <li><b>Laat vorm en inhoud samenwerken</b><span>Bepaal niet alleen wat het publiek moet weten, maar ook wat het moet zien, horen en ervaren.</span></li>
      <li><b>Zoek naar de laag onder het onderwerp</b><span>Niet alleen “waar gaat dit verhaal over?”, maar vooral “waar gaat het eigenlijk over?”</span></li>
    </ol>`,
    `<h3>Wat doelgroep en trends toevoegen</h3>
    <div class="cards">
      <div class="card"><h4>Eerst nieuwsgierigheid, dan verdieping</h4><p>Storytelling vormt de verbinding tussen aandacht en verdieping.</p></div>
      <div class="card"><h4>Ieder medium een eigen functie</h4><p>Vanaf het begin nadenken over lagen: ontdekken, volgen, verdiepen. Eén verhaalwereld.</p></div>
      <div class="card"><h4>Laagdrempelig in vorm, professioneel in inhoud</h4><p>Een herkenbare maker die het onderzoeksproces zichtbaar maakt.</p></div>
      <div class="card"><h4>Herkomst zichtbaar</h4><p>Duidelijk maken waar informatie vandaan komt, wie het onderzocht heeft en waarop uitspraken zijn gebaseerd.</p></div>
      <div class="card"><h4>Onderzoekend, niet sturend</h4><p>Ruimte laten aan de gebruiker om zelf betekenis te geven.</p></div>
    </div>
    <p class="callout">Ontwerpvraag: hoe kan een maatschappelijk onderwerp zo worden verteld dat een gebruiker met weinig voorkennis nieuwsgierig wordt, betrokken blijft en na afloop het onderwerp echt beter begrijpt?</p>`,
    `<h3>Voor de podwalk</h3>
    <p>Uit de best practices volgen concrete uitgangspunten voor het podwalk-format:</p>
    <ol class="steps">
      <li><b>Wissel interviews, archief en tracks af</b><span>Gesproken geschiedenisvertelling gecombineerd met andere vormen van geluid en visuals, om de zintuigen actief te prikkelen.</span></li>
      <li><b>Archief op de plek zelf</b><span>De app toont archiefbeelden van vroeger op exact die plek, met bijbehorende historische soundscapes.</span></li>
      <li><b>Omgevingsgeluid als actieve laag</b><span>Het straatgeluid niet wegfilteren, maar laten versmelten met de audiolagen en soundscapes in de app.</span></li>
      <li><b>Een informele toon, alsof iemand meeloopt</b><span>Informele, wandelende vertelstijl: geen belerende museumgids, maar de toon van een toffe maker in de stad. Er is geen gids: je loopt zelf.</span></li>
      <li><b>Persoonlijke verhalen aan plekken koppelen</b><span>Familie- en herkomstverhalen aan concrete plekken waar de geschiedenis nog voelbaar is, met een dialoog tussen generaties.</span></li>
      <li><b>Eén thema of tijdperk per route</b><span>Net als per aflevering: een specifiek tijdperk of historisch kantelpunt.</span></li>
    </ol>`,
    `<h3>Bronnen waarnaar het onderzoek verwijst</h3>
    <ul class="checks plain">
      <li>Commissariaat voor de Media: Digital News Report Nederland 2026</li>
      <li>Reuters Institute: Digital News Report (social video voor nieuws, creators)</li>
      <li>TikTok: trendrapport 2026 (discovery, Reali-TEA)</li>
      <li>VPRO: eigen omschrijving en criteria voor documentairevoorstellen</li>
      <li>Argos (HUMAN en VPRO): werkwijze verhalende onderzoeksjournalistiek</li>
      <li>Onderzoekskader VPRO (eigen document): context, vraagstuk, doelgroep, afbakening en hoofdvragen</li>
      <li>Best practice analyse VPRO (eigen document): vijf VPRO-series, van 50 jaar hiphop tot YOUS &amp; YAY</li>
      <li>Nederlandse voorbeelden: SPILNEWS, NU.nl, NOS Stories</li>
    </ul>`] },

  // ───────────────────────── 05 Het concept
  { tab: 'Concept', title: 'Het concept', pages: [
    `<h3>Het platformidee</h3>
    <p class="lead">De <mark>VPRO Immersive Podwalk-app</mark> is een overkoepelend, schaalbaar platform voor interactieve, locatiegebonden podwalks.</p>
    <p>Binnen dit platform worden bestaande en toonaangevende programma's, series, documentaires en films van de VPRO doorontwikkeld naar fysieke buitenervaringen. Door lineaire televisie- en archiefcontent te transformeren naar interactieve wandelroutes, laten we deze VPRO-onderwerpen extra leven en voelbaar worden via een complete, multizintuiglijke ervaring: audio, beeld, fysieke omgeving en augmented reality.</p>
    <p>In plaats van een eenmalig project is de app een <b>doorlopende bibliotheek van routes</b>, waarin steeds nieuwe onderwerpen en verhaallijnen uit het VPRO-oeuvre worden toegevoegd. Technologie is de directe brug tussen het verhaal en de fysieke wereld: de luisteraar loopt de route en de app projecteert archiefbeelden, 3D-objecten en historische soundscapes van toen op exact die plek in het heden.</p>
    <div class="stats"><div class="stat"><b>41</b><span>minuten pilot-route</span></div><div class="stat"><b>5</b><span>historische knooppunten in Amsterdam</span></div><div class="stat"><b>1</b><span>platform, steeds nieuwe routes</span></div></div>
    <p class="callout">Pilot-route: <b>50 Jaar Hiphop in Nederland</b>. Deze eerste, volledig uitgewerkte aflevering is het proof-of-concept voor het hele platform: een route van Vondelpark tot Spuistraat die via spatial audio, WebAR en AI tot leven komt.</p>`,
    `<h3>Waar gaat de podcast over?</h3>
    <p class="lead">De pilot-route is gebaseerd op <mark>50 jaar hiphop in Nederland: Iemand moet het doen</mark>, een zesdelige VPRO-reeks over de opkomst, evolutie en maatschappelijke impact van de Nederlandse hiphopcultuur.</p>
    <p>De route focust op de pioniersjaren en de overgang naar de undergroundscene in Amsterdam.</p>
    <ol class="steps">
      <li><b>Vondelpark</b><span>De Surinaamse funk-grooves.</span></li>
      <li><b>Paradiso</b><span>De doorbraak van Amerikaanse hiphopgrootheden: hier zette Run-D.M.C. in 1988 de zaal op zijn kop.</span></li>
      <li><b>Leidseplein</b><span>Straatbattles, waar b-boys hun karton uitrolden.</span></li>
      <li><b>Café De Duivel</b><span>De geboorte van Nederhop.</span></li>
      <li><b>Spuistraat</b><span>De rauwe kraak- en hiphopcultuur.</span></li>
    </ol>
    <div class="cards three"><div class="card"><h4>Stemmen</h4><p>Artiesten, dj's en pioniers vertellen zelf hun persoonlijke verhalen, direct gekoppeld aan de straten van Amsterdam.</p></div><div class="card"><h4>Archief</h4><p>Authentiek NPO- en VPRO-beeldmateriaal, radio-interviews en historische soundscapes, live over de huidige stad heen gelegd.</p></div><div class="card"><h4>Tracks</h4><p>De bepalende muziek (o.a. funkbreaks, Run-D.M.C., Grandmaster Flash, Extince) die de wandelpas stuurt en de sfeer per stop bepaalt.</p></div></div>`,
    `<h3>Waarom een podwalk?</h3>
    <div class="compare"><div class="no"><small>Documentaire of podcast</small><p>Lineair en passief: de gebruiker luistert of kijkt slechts toe vanaf een bank of scherm.</p></div><div class="yes"><small>Een podwalk</small><p>De fysieke omgeving wordt het podium en het canvas.</p></div></div>
    <ol class="steps">
      <li><b>VPRO-thema's laten leven</b><span>Een maatschappelijk of cultureel onderwerp blijft niet hangen in theorie, maar wordt een tastbare, zintuiglijke herinnering doordat je er zelf doorheen beweegt.</span></li>
      <li><b>De plek is het verhaal</b><span>Je staat op de exacte plek waar Run-D.M.C. in 1988 Paradiso op zijn kop zette, of waar b-boys hun karton uitrolden op het Leidseplein.</span></li>
      <li><b>Archief ontmoet augmented reality</b><span>De smartphonecamera is een tijdmachine via WebAR: archiefbeelden en 3D-objecten (vintage platenspelers, gigantische gettoblasters) over de muren en pleinen van nu.</span></li>
      <li><b>Alle zintuigen tegelijk</b><span>Straatgeluiden van passerende trams en voetgangers vloeien samen met 3D-binaural audio, historische opnames en beats op je koptelefoon.</span></li>
      <li><b>Wandelen maakt open en actief</b><span>Geen belerende geschiedenisles, maar een ontdekkingstocht waarin de luisteraar zelf opdrachten uitvoert en onderdeel wordt van de subcultuur.</span></li>
    </ol>`,
    `<h3>Interactieve functies en AR-lagen</h3>
    <p class="lead">In plaats van alleen luisteren nodigt de app de gebruiker bij <mark>elke stop</mark> uit tot gerichte, actieve interactie.</p>
    <div class="cards three">
      <div class="card"><h4>WebAR: archief en 3D-objecten</h4><p>Richt je camera op het podium van het Vondelpark Openluchttheater om een vintage platenkoffer te openen, transformeer de gevel van Paradiso virtueel in een enorme jaren '80-boombox, of bekijk historische straatfoto's van het Leidseplein die over het huidige straatbeeld heen faden.</p></div>
      <div class="card"><h4>Doe-interacties</h4><p>Haptisch en visueel: zelf over het scherm scratchen op een virtuele draaitafel bij Café De Duivel, of met een digitale spuitbus je eigen tag als augmented reality achterlaten op de muren van de Spuistraat.</p></div>
      <div class="card"><h4>AI-gids Professor Soortkill</h4><p>Geïnspireerd op de vaste culturele duider uit de NPO-serie. Terwijl de audiotrack doorloopt, open je op elk moment de chat voor vragen over jargon, Smibanese en straattaal, artiestenbiografieën of de historische context van de stop.</p></div>
    </div>`,
    `<h3>Muziek, locatie en samen: ideeën</h3>
    <p class="lead">Dit zijn ideeën uit feedback en eigen ideeën. Ze staan als <mark>idee of demo</mark> in het prototype of zijn nog niet uitgewerkt, niet als werkende functie.</p>
    <div class="cards three">
      <div class="card"><h4>Muziekfragmenten</h4><p>Bij een stop een korte snippet van een track waar de artiest over praat, met hiphop als thema. Niet meer in het prototype, het blijft een idee. Rechten worden vooraf gecheckt.</p></div>
      <div class="card"><h4>VPRO-items op locatie</h4><p>Loop je ergens waar de VPRO eerder iets maakte, dan verschijnt dat archiefitem vanzelf. Vraagt archiefmateriaal met locatiegegevens.</p></div>
      <div class="card"><h4>Punten en ontgrendelen</h4><p>Het verhaal van een stop loopt gelijk op met je wandeling en ontgrendelt in drie delen. Je kunt pauzeren en terugspoelen, maar niet vooruit; loop je achter, dan haalt de app dat in. Elke stop levert punten op bij aankomst. Een spelelement dat het lopen beloont; de puntenwaarden zijn voorbeeldwaarden.</p></div><div class="card"><h4>Samen en community</h4><p>Anderen betrekken: zien hoeveel mensen hier eerder waren, routes delen en een community rond de podwalk. Echte multiplayer valt buiten de scope (geen back-end).</p></div>
    </div>`,
    `<h3>Immersive layers</h3>
    <p class="lead">Hoe is de ervaring opgebouwd? <mark>Vier lagen</mark> die tegelijk werken.</p>
    <div class="layers">
      <div><small>Verhaal</small><b>Gesproken geschiedenis</b><span>De overkoepelende gids en stemmen van pioniers leiden de luisteraar stapsgewijs door de stadschronologie.</span></div>
      <div><small>Beeld en interactie</small><b>WebAR en AI</b><span>Visuele reconstructies op locatie en een direct aanspreekbare AI-kennislaag via Professor Soortkill.</span></div>
      <div><small>Geluid</small><b>Adaptieve soundscapes en muziek</b><span>Beats die versnellen tijdens de wandelinstructies tussen stops, en tracks die op vol volume knallen zodra je op een bestemming stilstaat.</span></div>
      <div><small>Plek</small><b>Omgevingsbewustzijn</b><span>De podwalk sluit de buitenwereld niet af: omgevingsgeluid blijft een bewuste component van de ervaring.</span></div>
    </div>
    <h4>Wanneer hoor en doe je wat?</h4>
    <div class="cols"><div class="card"><h4>Onderweg: wandelen tussen stops</h4><p>De host geeft duidelijke navigatie-instructies op het ritme van instrumentale hiphop- en funkloops. De muziek is wandelbegeleiding, terwijl achtergrondverhalen de brug slaan naar de volgende locatie.</p></div><div class="card"><h4>Op de stop: aankomst en verdieping</h4><p>Zodra je de GPS-locatie bereikt, activeert de stop. De muziek dimt voor het historische verhaal, waarna een prompt volgt om je smartphone erbij te pakken voor het WebAR-element of de luistersessie van de hoofdtrack.</p></div></div>`,
    `<h3>Afbakening format: onze scope</h3>
    <div class="vs">
      <div class="col good"><small>Wat het wél is</small>
        <div class="item"><span>Een platformconcept voor interactieve VPRO-podwalks, gedemonstreerd met een functioneel en klikbaar mobiel Figma-prototype</span></div>
        <div class="item"><span>Een concrete, uitgewerkte pilot van 41 minuten langs 5 specifieke stops rond 50 Jaar Hiphop in Nederland</span></div>
        <div class="item"><span>Gelaagde audio met vloeiende transities tussen wandelbegeleiding, sfeer, archief en muziektracks</span></div>
        <div class="item"><span>Geïntegreerde WebAR-interacties en een contextuele AI-chatbotpersona (Professor Soortkill)</span></div>
      </div>
      <div class="col bad"><small>Wat het niet is</small>
        <div class="item"><span>Een eenmalige, op zichzelf staande audiotour zonder koepelplatform</span></div>
        <div class="item"><span>Een statische webpagina of traditionele podcastfeed met standaard afspeelknoppen</span></div>
        <div class="item"><span>Een generieke, kale ChatGPT-interface zonder redactionele VPRO-stem of hiphopcontext</span></div>
        <div class="item"><span>Een volledig geprogrammeerde back-end of live release in de App Store of Google Play Store</span></div>
      </div>
    </div>`] },

  // ───────────────────────── 06 Prototype
  { tab: 'Concept', title: 'Prototype', pages: [
    `<h3>Wat we maken</h3>
    <p class="lead">Een <mark>interactieve, locatiegebonden podwalk</mark>: een fysieke route gekoppeld aan verhalen, met gelaagde audio en een tijdschakelaar tussen nu en het archief.</p>
    <p>Het prototype is een visueel, klikbaar idee. Het werkt nog niet echt, maar laat zien hoe de gebruiker de route ervaart, van starten tot afronden.</p>
    <ol class="steps">
      <li><b>Welkom</b><span>Eén belofte in drie stappen, met afstand en duur.</span></li>
      <li><b>Over de route</b><span>Waar de podcast over gaat en waarom je hem loopt.</span></li>
      <li><b>Voor je begint</b><span>Koptelefoon en locatie, elk met een reden. Pas daarna kun je door.</span></li>
      <li><b>Route</b><span>Het hele traject en alle stops op een kaart, vóór de start.</span></li>
      <li><b>Lopen</b><span>Afstand en richting naar de volgende stop. Aankomst wordt vanzelf herkend.</span></li>
      <li><b>Luisteren</b><span>De tijdschakelaar Nu ↔ Toen is de hoofdbediening. De geluidsmix met losse lagen (stem, muziek, sfeer, archief) zit achter een knop.</span></li>
      <li><b>Klaar</b><span>Een duidelijk einde met een weg terug naar het begin.</span></li>
    </ol>
    <p class="callout">Locaties, afstanden en teksten zijn plaatshouders. Het muziekfragment, het VPRO-item onderweg en de community zijn ideeën uit feedback, als demo uitgewerkt. De pilot-route (50 Jaar Hiphop, 5 stops van Vondelpark tot Spuistraat) staat in het concept; het prototype gebruikt nog plaatshouders. In de scope staat een klikbaar front-end prototype in Figma.</p>`,
    `<h3>Probeer het zelf</h3>
    <p>Klik door de route. Met “Demo: ik ben er al” sla je het lopen over.</p>
    <iframe class="proto" src="prototype.html?embed" title="Podwalk prototype" loading="lazy"></iframe>
    <p class="src"><a href="prototype.html" target="_blank" rel="noopener">Open het prototype op een eigen pagina →</a></p>`] },
];

// short menu terms, one per page of each folder
const TERMS = [
  ['Briefing', 'Uitgangspunten', 'Doel', 'Hoofdvragen', 'Deelvragen', 'Afbakening: oplevering', 'Afbakening: binnen en buiten', 'Afbakening: succescriteria'],
  ['Generatieve AI', 'Nieuwsgebruik', 'Short-form video', 'TikTok', 'Menselijke verteller', 'Platformen en AI'],
  ['Primaire doelgroep', 'Stakeholders'],
  ['Overzicht', 'Trendanalyse', 'Storytellingmodel', 'Principes', 'Cases 1-3', 'Cases 4-5', 'Doelgroeponderzoek', 'Onderzoek → ontwerpkeuze', 'Lessen', 'Doelgroep en trends', 'Voor de podwalk', 'Bronnen'],
  ['Het platformidee', 'Waar gaat het over', 'Waarom een podwalk', 'Interactie en AR', 'Muziek, locatie en samen', 'Immersive layers', 'Afbakening format'],
  ['Wat we maken', 'Probeer het zelf'],
];
sheets.forEach((s, i) => (s.terms = TERMS[i]));
const $ = s => document.querySelector(s), N = sheets.length;
// VPRO palette, one per folder: [tab colour, tab text colour]
const COLORS = [['#0000ff', '#fff'], ['#0cdf0c', '#121212'], ['#8080ff', '#121212'], ['#000099', '#fff'], ['#0cdf0c', '#121212'], ['#0000ff', '#fff'], ['#8080ff', '#121212']];
const colorOf = i => COLORS[i % COLORS.length][0], textOf = i => COLORS[i % COLORS.length][1];
const nameOf = s => (s.short || s.title).replace(/&shy;/g, '').replace(/&amp;/g, '&'); // plain text, also safe for innerHTML
// the folder front: used for the stack AND as the hero of the opened website
const folder = (s, i) => `<span class="tab">${String(i + 1).padStart(2, '0')} · ${nameOf(s)}</span>
  <div class="fbody"><small>${s.tab}</small><div class="ftitle"><h2>${s.title}</h2></div></div>`;

// build stack + tabs (static, centered stack; hovering a sheet lifts it so its name shows)
const hover = sheets.map(() => 0), lift = sheets.map(() => 0), away = sheets.map(() => 0), awayT = sheets.map(() => 0); // away: 1 = slid out of view
let picked = -1, flying = false; // picked = index of the opened sheet; flying = its own animation drives it
// neighbours rise too, the closer the higher, but never as high as the hovered one (1)
const neighbour = d => 0.28 * 0.5 ** (d - 1);
const setHover = (i, v) => { hover.forEach((_, j) => (hover[j] = v ? (j === i ? 1 : neighbour(Math.abs(j - i))) : 0));  $('#cur').innerHTML = v ? nameOf(sheets[i]) + ` <small style="font-size:12px;color:var(--mute)">${i + 1}/${N}</small>` : ''; $('#hint').style.opacity = 0; };
const els = sheets.map((s, i) => {
  const el = Object.assign(document.createElement('article'), { className: 'sheet folder', innerHTML: folder(s, i) });
  el.style.setProperty('--c', colorOf(i)); el.style.setProperty('--t', textOf(i));
  el.onclick = () => open(i);
  el.tabIndex = 0; el.setAttribute('role', 'button'); el.setAttribute('aria-label', 'Open map ' + nameOf(s));
  el.onkeydown = e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), open(i));
  el.onfocus = () => picked < 0 && setHover(i, 1); el.onblur = () => picked < 0 && setHover(i, 0);
  el.onmouseenter = () => picked < 0 && setHover(i, 1);
  el.onmouseleave = () => picked < 0 && setHover(i, 0);
  $('#stack').append(el);
  return el;
});
const tabs = [...new Set(sheets.map(s => s.tab))];
$('#tabs').innerHTML = tabs.map(t => `<button>${t}</button>`).join('');
$('#tabs').onclick = e => { const b = e.target.closest('button'); b && goTo(sheets.findIndex(s => s.tab === b.textContent)); };
// hovering a tab lifts that group of sheets
$('#tabs').onmouseover = $('#tabs').onmouseout = e => {
  if (picked > -1 || !e.target.matches('button')) return;
  const on = e.type === 'mouseover' ? 1 : 0;
  sheets.forEach((s, i) => s.tab === e.target.textContent && (hover[i] = on));
  e.target.classList.toggle('on', !!on);
};

const STACK_RX = -24, STACK_RY = -58; // keep in sync with #stack in style.css
const PHONE = matchMedia('(max-width:700px)').matches; // phone: narrower stack, taller folders (keep in sync with the media query at the end of style.css)
const FW = 56, FH = PHONE ? 52 : 31.5; // folder size in em, keep in sync with .folder in style.css
let P = 10; // px per em of the stack (sheet transforms are in px so a sheet can change its own font-size)
const measure = () => (P = parseFloat(getComputedStyle($('#stack')).fontSize));
measure(); addEventListener('resize', measure);
const gap = 7;   // em between sheets (smaller = closer together)
const lifted = 9; // em a hovered sheet moves up
// same function list in both states so the browser interpolates them smoothly
// dy: local shift so a sheet whose height changes (card -> hero) stays centred; the sheet is anchored by its top edge
const T = (y, z, ry, rx, s, dy = 0) => `translate3d(0,${y * P}px,${z * P}px) rotateY(${ry}deg) rotateX(${rx}deg) scale(${s}) translateY(${dy}px)`;
const AWAY = 22; // em above the stack where the others wait while a sheet is open; they slide down from there on return
const stackT = (i, s = 1) => T(-lift[i] * lifted + away[i] * AWAY, (i - (N - 1) / 2) * -gap, 0, 0, s);              // sheets sit on one diagonal line, centered
// counter-rotated so it faces the screen, at full width, top-aligned like the website hero it turns into
const flownT = () => T(0, 0, -STACK_RY, -STACK_RX, 1, -((innerHeight - FH * readerFont()) / 2) * Math.cos(STACK_RX * Math.PI / 180)); // x cos: measured, the local shift is stretched by the stack's tilt
function frame() {
  els.forEach((el, i) => {
    away[i] += (awayT[i] - away[i]) * 0.1;
    if (flying && i === picked) return; // the opened sheet is driven by its own animation; its lift stays frozen meanwhile
    lift[i] += (hover[i] - lift[i]) * 0.07;
    el.style.transform = stackT(i);
  });
  requestAnimationFrame(frame);
}
frame();

// the hint fades out softly on the first scroll/swipe too (hovering a sheet does the same)
['wheel', 'touchmove'].forEach(ev => addEventListener(ev, () => ($('#hint').style.opacity = 0), { passive: true, once: true }));
// megamenu: one tile per folder (built from the sheets), each with an icon
const svg = d => `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ICONS = [
  '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',                                   // vraagstuk: target
  '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-4 3-6 6.5-6s6.5 2 6.5 6"/><circle cx="17.5" cy="9" r="2.5"/><path d="M17 14.2c2.6.3 4.5 2 4.5 5.3"/>', // doelgroep: people
  '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',      // context: globe
  '<path d="M7 2v15h15M2 7h15v15"/>',                                                                // afbakening: crop frame
  '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1 1-1.1 1.8M12 17h.01"/>', // hoofdvragen: question
  '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',                                // uitgangspunten: compass
  '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',                                           // onderzoek: search
];
$('#mega').innerHTML = `<div class="mm-head"><h2>Belangrijkste onderwerpen</h2><p>VPRO Medialab, creative debrief</p></div>` + sheets.map((s, i) =>
  `<div class="mm-tile"><button class="mm-main" data-i="${i}"><span class="mm-ico">${svg(ICONS[i % ICONS.length])}</span><b>${nameOf(s)}</b><small>${s.tab}</small></button>` +
  `<ul>${s.pages.map((_, k) => `<li><button data-i="${i}" data-k="${k}">${s.terms[k]}</button></li>`).join('')}</ul></div>`).join('');
// the menu always fits the window: find the largest text size (9-16px) at which it stays within 100vh x 100vw
const fitMenu = () => {
  const m = $('#mega'); let lo = 8, hi = 16;
  m.classList.add('measuring'); // tiles un-shifted, so the measurement is the open state
  for (let k = 0; k < 8; k++) { const f = (lo + hi) / 2; m.style.setProperty('--f', f + 'px'); m.scrollHeight <= innerHeight && m.scrollWidth <= innerWidth ? (lo = f) : (hi = f); }
  m.style.setProperty('--f', (lo < 12 ? 13 : lo) + 'px'); // too small to read: keep a readable size and let the menu scroll
  m.classList.remove('measuring');
};
addEventListener('resize', fitMenu);
fitMenu();
document.fonts?.ready.then(fitMenu); // the web font changes the metrics
const menu = on => { on && fitMenu(); document.body.classList.toggle('menu', on); $('#menuBtn').setAttribute('aria-expanded', on); $('#menuTxt').textContent = on ? 'Sluiten' : 'Menu'; };
$('#menuBtn').onclick = () => menu(!document.body.classList.contains('menu'));
// the menu stays available while a folder is open: same folder = scroll to its page, other folder = close this one, then open that one
const SCROLL_PAD = 70; // px kept above a page we scroll to, so it doesn't sit under the sticky bar
const goTo = (i, k = -1) => {
  if (picked === i && !$('#reader').hidden) return void $('#reader').scrollTo({ top: k >= 0 ? $('#pages').querySelectorAll('.page')[k].offsetTop - SCROLL_PAD : 0, behavior: REDUCED ? 'auto' : 'smooth' });
  if (picked < 0) return open(i, k);
  close(); // go home first; the next folder opens once the stack has settled
  const t = setInterval(() => picked < 0 && (clearInterval(t), open(i, k)), 40);
};
$('#mega').onclick = e => { const b = e.target.closest('button'); if (b) { menu(false); goTo(+b.dataset.i, b.dataset.k === undefined ? -1 : +b.dataset.k); } };
addEventListener('click', e => document.body.classList.contains('menu') && !e.target.closest('#mega,#menuBtn') && menu(false));
addEventListener('keydown', e => { if (e.key !== 'Escape') return; if (document.body.classList.contains('menu')) menu(false); else close(); });

// open: the clicked sheet slides out of the stack to the centre, the rest slides away, then the reader appears
// over it and the following pages slide in one by one
const readerFont = () => innerWidth / FW; // the folder becomes exactly screen-wide
const heroU = () => Math.max(Math.min(readerFont(), innerHeight / FH), 9); // chrome fits the screen height, readable on phones
function fit() {
  const pages = $('#pages'), hero = pages.firstElementChild;
  pages.style.fontSize = readerFont() + 'px';
  if (!hero) return;
  hero.style.setProperty('--u', heroU() + 'px');
  hero.style.height = innerHeight + 'px'; // the hero header is exactly 100vw x 100vh
}
// the folder card and the hero are the same element: the flight animates its shape too, so nothing "adjusts" afterwards
const cardPose = (i, small) => ({ transform: stackT(i, small), height: FH * readerFont() + 'px', '--u': readerFont() + 'px' });
const heroPose = () => ({ transform: flownT(), height: innerHeight + 'px', '--u': heroU() + 'px' });
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches; // no flights, glides or parallax
const fly = (el, from, to, ms, ease) => el.animate([from, to], { duration: REDUCED ? 1 : ms, easing: ease, fill: 'forwards' });
let openAnim = null, opening = false, closing = false, openEvt = null, openLift = 0;
let startAt = -1; // page to scroll to when opened from the menu
function open(i, k = -1) {
  if (picked > -1) return;
  startAt = k;
  picked = i; flying = true;
  els[i].classList.add('picked');
  $('#hint').style.opacity = 0; // stays hidden once you've found out how it works
  // the sheet is laid out at reading size from the start and scaled DOWN into the stack, so the text stays crisp the whole flight
  const R = readerFont(), small = P / R;
  openLift = lift[i];
  els[i].style.fontSize = R + 'px';
  // the rest fades out very quickly, then (invisible) is moved out of the way: no sliding at the start
  els.forEach((el, j) => { if (j !== i) { el.style.opacity = 0; setTimeout(() => (away[j] = awayT[j] = -1), 160); } });
  document.body.classList.add('opened');
  opening = true; openEvt = window.event; // the click that opened it must not also close it
  openAnim = fly(els[i], cardPose(i, small), heroPose(), 750, 'cubic-bezier(.22,.8,.2,1)');
  openAnim.finished.then(() => { opening = false; if (picked === i && !closing) showReader(i); }).catch(() => {});
}
// eased scroll of the reader whose duration grows with the distance; any wheel, touch or key press by the user takes over
let glideId = 0;
function glide(to) {
  if (REDUCED) return void ($('#reader').scrollTop = to);
  const rd = $('#reader'), from = rd.scrollTop, id = ++glideId, t0 = performance.now(), ms = Math.min(1500, 500 + Math.abs(to - from) * 0.12);
  const ease = t => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
  const step = now => { if (id !== glideId || picked < 0) return; const p = Math.min(1, (now - t0) / ms); rd.scrollTop = from + (to - from) * ease(p); p < 1 && requestAnimationFrame(step); };
  requestAnimationFrame(step);
}
['wheel', 'touchstart', 'keydown'].forEach(ev => $('#reader').addEventListener(ev, () => glideId++, { passive: true }));
// stats and bars: numbers count up and bars fill, once, the first time they are mostly in view (siblings stagger)
function revealOnScroll(pages) {
  if (REDUCED) return pages.querySelectorAll('.stat,.bar,.card.num').forEach(el => el.classList.add('in'));
  const io = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, b = el.querySelector('b'), d = [...el.parentNode.children].indexOf(el) * 150;
    io.unobserve(el); el.style.setProperty('--d', d + 'ms');
    setTimeout(() => el.classList.add('in'), 0);
    const m = b && el.matches('.stat,.bar') && (b.dataset.to || '').match(/^(\D*)(\d+)(.*)$/);
    if (!m) return;
    const t0 = performance.now() + d, ms = 1400;
    (function tick(now) { const t = Math.min(1, Math.max(0, (now - t0) / ms)); b.textContent = m[1] + Math.round(m[2] * (1 - (1 - t) ** 3)) + m[3]; t < 1 && requestAnimationFrame(tick); })(performance.now());
  }), { root: $('#reader'), threshold: 0.6 });
  pages.querySelectorAll('.stat,.bar,.card.num').forEach(el => {
    const b = el.matches('.stat,.bar') && el.querySelector('b'), m = b && b.textContent.match(/^(\D*)(\d+)(.*)$/);
    if (m) (b.dataset.to = b.textContent, b.textContent = m[1] + '0' + m[3]); // start at zero, so there is no flash of the final value
    io.observe(el);
  });
}
function showReader(i) {
  const s = sheets[i], pages = $('#pages'), n = s.pages.length;
  // hero = the folder itself, then one full-width website section per page
  pages.innerHTML = `<article class="sheet folder in">${folder(s, i).replace(/<\/div>$/, '<div class="cue">Scroll ↓</div></div>')}</article>` +
    s.pages.map((h, p) => `<section class="page"><div class="inner"><span class="eyebrow">${p + 1} / ${n}</span>${h}</div></section>`).join('');
  // footer: the neighbouring folders by name, plus a way back up and out
  const pv = (i + N - 1) % N, nx = (i + 1) % N, num = j => String(j + 1).padStart(2, '0');
  const mega = sheets.map((t, j) => `<div class="${j === i ? 'cur' : ''}"><button data-i="${j}"><small>${num(j)}</small>${nameOf(t)}</button><ul>${t.terms.map((term, k) => `<li><button data-i="${j}" data-k="${k}">${term}</button></li>`).join('')}</ul></div>`).join('');
  pages.insertAdjacentHTML('beforeend', `<footer class="pfoot"><div class="inner">
    <div class="pf-mega">${mega}</div>
    <div class="pf-nav"><button data-i="${pv}"><small>← Vorige map</small><b>${num(pv)} · ${nameOf(sheets[pv])}</b></button><button data-i="${nx}"><small>Volgende map →</small><b>${num(nx)} · ${nameOf(sheets[nx])}</b></button></div>
    <div class="pf-bar"><span>VPRO Medialab · creative debrief</span><button data-top>Naar boven ↑</button><button data-close>Sluit map ✕</button></div></div></footer>`);
  new IntersectionObserver(([en]) => document.body.classList.toggle('atfoot', en.isIntersecting), { root: $('#reader') }).observe(pages.lastElementChild); // the fixed prev/next bar steps aside for the footer's own
  revealOnScroll(pages);
  $('#rPrev').textContent = '‹ ' + nameOf(sheets[pv]); $('#rNext').textContent = nameOf(sheets[nx]) + ' ›';
  pages.style.setProperty('--c', colorOf(i));
  pages.firstElementChild.style.setProperty('--c', colorOf(i));
  pages.firstElementChild.style.setProperty('--t', textOf(i));
  fit();
  $('#reader').hidden = false;
  $('#reader').scrollTop = 0; // after unhiding, or the scroll is ignored
  if (startAt >= 0) { // opened from the menu: the folder appears at its top, then scrolls down to the page
    const k = startAt;
    setTimeout(() => { const t = picked === i && pages.querySelectorAll('.page')[k]; t && glide(Math.max(0, t.offsetTop - SCROLL_PAD)); }, 600);
  }
  startAt = -1;
}
function close() {
  const i = picked;
  if (i < 0 || closing) return;
  closing = true;
  const tm = { fly: 520, ret: 200, per: 60, hold: 700 };
  $('#reader').hidden = true; // reader goes away instantly; the sheet flies straight back into its slot
  hover.fill(0); lift[i] = opening ? openLift : 0; // closed mid-flight: land in the pose it left, then settle (no snap)
  // the others slide back in (nearest first) with a quick fade as the sheet arrives
  els.forEach((el, j) => j !== i && setTimeout(() => { awayT[j] = 0; el.style.transition = 'opacity .55s ease'; el.style.opacity = 1; setTimeout(() => (el.style.transition = ''), 650); }, tm.ret + Math.abs(j - i) * tm.per)); // soft fade-in while sliding back, not a pop
  document.body.classList.remove('opened', 'atfoot'); $('#sbar')?.classList.remove('on');
  let back;
  if (opening) { back = openAnim; back.reverse(); } // closed mid-flight: just run the flight backwards from where it is
  else { els[i].style.fontSize = readerFont() + 'px'; back = fly(els[i], heroPose(), cardPose(i, P / readerFont()), tm.fly, 'cubic-bezier(.3,.7,.2,1)'); } // font re-synced in case the window was resized while reading
  back.finished.then(() => {
    els[i].getAnimations().forEach(an => an.cancel());
    els[i].style.fontSize = ''; // back to stack size, visually identical
    els[i].style.transform = stackT(i);
    flying = opening = false;
    setTimeout(() => { els[i].classList.remove('picked'); picked = -1; closing = false; els.forEach((el, j) => el.matches(':hover') && setHover(j, 1)); }, tm.hold); // hover stays off until the others are back
  });
}
// clicking anywhere (or Esc) closes, also while the sheet is still flying out
addEventListener('click', e => picked > -1 && !closing && e !== openEvt && $('#reader').hidden && !e.target.closest('.sheet.picked') && close());
$('#close').onclick = () => close();
addEventListener('resize', fit);

// smooth wheel scrolling in the reader (touch and keyboard stay native)
{
  const rd = $('#reader'); let target = 0, raf = 0;
  const step = () => {
    const d = target - rd.scrollTop;
    if (Math.abs(d) < 1) { rd.scrollTop = target; raf = 0; return; }
    rd.scrollTop += Math.sign(d) * Math.max(1, Math.abs(d) * 0.12);
    raf = requestAnimationFrame(step);
  };
  rd.addEventListener('wheel', e => {
    if (e.ctrlKey) return; // pinch-zoom
    e.preventDefault();
    if (!raf) target = rd.scrollTop;
    target = Math.max(0, Math.min(rd.scrollHeight - rd.clientHeight, target + e.deltaY * (e.deltaMode === 1 ? 33 : 1)));
    raf = raf || requestAnimationFrame(step);
  }, { passive: false });
}

// folder navigation without the menu or hover (phones): a picker under the stack and prev/next while a folder is open
{
  let sel = 0;
  const phone = matchMedia('(max-width:700px),(hover:none)'); // keep in sync with the picker media query in style.css
  const pick = i => { sel = (i + N) % N; phone.matches && setHover(sel, 1);$('#pOpen').innerHTML = `<small>${String(sel + 1).padStart(2, '0')} / ${N}</small>${nameOf(sheets[sel])}`; };
  document.body.insertAdjacentHTML('beforeend',
    '<div id="picker"><button id="pPrev" aria-label="Vorige map">‹</button><button id="pOpen"></button><button id="pNext" aria-label="Volgende map">›</button></div>' +
    '<div id="rnav"><button id="rPrev" aria-label="Vorige map"></button><button id="rNext" aria-label="Volgende map"></button></div>');
  $('#pages').addEventListener('click', e => {
    const b = e.target.closest('.pfoot button'); if (!b) return;
    if (b.dataset.i !== undefined) goTo(+b.dataset.i, b.dataset.k === undefined ? -1 : +b.dataset.k); else if (b.hasAttribute('data-top')) $('#reader').scrollTo({ top: 0, behavior: 'smooth' }); else close();
  });
  $('#pPrev').onclick = e => (e.stopPropagation(), pick(sel - 1));
  $('#pNext').onclick = e => (e.stopPropagation(), pick(sel + 1));
  $('#pOpen').onclick = e => (e.stopPropagation(), open(sel));
  $('#rPrev').onclick = e => (e.stopPropagation(), goTo((picked + N - 1) % N));
  $('#rNext').onclick = e => (e.stopPropagation(), goTo((picked + 1) % N));
  pick(0);
}

// stakeholder map: a chip jumps to (and highlights) its action plan
$('#pages').addEventListener('click', e => {
  const b = e.target.closest('.smap [data-s]'); if (!b) return;
  const c = $('#sh-' + b.dataset.s); if (!c) return;
  $('#pages').querySelectorAll('.plan .sel').forEach(x => x.classList.remove('sel'));
  c.classList.add('sel'); $('#reader').scrollTo({ top: $('#reader').scrollTop + c.getBoundingClientRect().top - 120, behavior: 'smooth' });
});

// sticky parallax header: the hero title drifts slower than the scroll and fades; once the hero is gone a compact bar takes over
{
  document.body.insertAdjacentHTML('beforeend', '<div id="sbar"><b></b><span></span></div><nav id="toc" aria-label="Onderwerpen in deze map"></nav>');
  const rd = $('#reader'), bar = $('#sbar'), toc = $('#toc'); let tick = false, shown = -1;
  toc.onclick = e => { const b = e.target.closest('button'); b && goTo(picked, +b.dataset.k); };
  const upd = () => {
    tick = false;
    if (rd.hidden || picked < 0) return bar.classList.remove('on'), toc.classList.remove('on');
    const y = rd.scrollTop, h = innerHeight, hero = $('#pages').firstElementChild;
    if (shown !== picked) {
      shown = picked; bar.style.setProperty('--c', colorOf(picked)); bar.style.setProperty('--t', textOf(picked));
      bar.firstChild.textContent = `${String(picked + 1).padStart(2, '0')} · ${nameOf(sheets[picked])}`;
      toc.innerHTML = '<small>In deze map</small>' + sheets[picked].terms.map((t, k) => `<button data-k="${k}">${t}</button>`).join('');
    }
    bar.classList.toggle('on', y > h * 0.6); toc.classList.toggle('on', y >= (hero?.offsetHeight || h) - 120); // only once the hero is scrolled past
    if (hero && !REDUCED) { hero.style.setProperty('--py', Math.min(y, h * 1.2) * 0.5 + 'px'); hero.style.setProperty('--po', Math.max(0, 1 - y / (h * 0.7))); }
    let cur = null; $('#pages').querySelectorAll('.page').forEach(p => { if (p.offsetTop <= y + h * 0.3) cur = p; });
    bar.lastChild.textContent = cur?.querySelector('h3')?.textContent || '';
    const at = cur ? [...$('#pages').querySelectorAll('.page')].indexOf(cur) : -1;
    toc.querySelectorAll('button').forEach((b, k) => b.classList.toggle('cur', k === at));
  };
  rd.addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
}

// ---------- search: index of every page, word suggestions, spelling correction ----------
const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const words = s => norm(s).match(/[a-z0-9]+/g) || [];
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const DOC = [], VOC = new Map(); // DOC: one entry per page; VOC: word -> how often it occurs
sheets.forEach((s, i) => s.pages.forEach((h, k) => {
  const text = new DOMParser().parseFromString(h.replace(/</g, ' <'), 'text/html').body.textContent.replace(/­/g, '').replace(/\s+/g, ' ').trim(); // DOMParser: nothing loads or runs
  const d = { i, k, head: `${nameOf(s)} · ${s.terms[k]}`, title: norm(nameOf(s) + ' ' + s.terms[k]), text, n: norm(text) };
  DOC.push(d);
  words(text + ' ' + d.head).forEach(w => w.length > 2 && VOC.set(w, (VOC.get(w) || 0) + 1));
}));
const lev = (a, b) => { let p = [...Array(b.length + 1).keys()]; for (let i = 1; i <= a.length; i++) { const c = [i]; for (let j = 1; j <= b.length; j++) c[j] = Math.min(p[j] + 1, c[j - 1] + 1, p[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); p = c; } return p[b.length]; };
// a typed word is fine if it starts some known word; otherwise take the closest known word (1 edit up to 4 letters, 2 edits above), most frequent wins ties
const fix = t => {
  if (t.length < 3 || [...VOC.keys()].some(w => w.startsWith(t))) return t;
  let best = t, bd = t.length < 5 ? 2 : 3, bc = 0;
  for (const [w, c] of VOC) { if (Math.abs(w.length - t.length) > 2) continue; const d = lev(t, w); if (d < bd || (d === bd && c > bc)) (bd = d, bc = c, best = w); }
  return best;
};
const stem = t => (t.length > 4 ? t.replace(/(en|s)$/, '') : t); // podwalks = podwalk
const rx = (ts, flags) => new RegExp('(?<![a-z0-9])(' + ts.map(stem).join('|') + ')[a-z0-9]*', flags);
const find = ts => DOC.map(d => {
  let sc = 0;
  for (const t of ts) { const c = (d.n.match(rx([t], 'g')) || []).length; if (!c) return null; sc += c + (rx([t]).test(d.title) ? 10 : 0); }
  return { d, sc, ts };
}).filter(Boolean);
// "pod walks" also means "podwalks": try the typed words and every glued pair, keep each page's best score
const glue = ts => {
  const out = [];
  for (let j = 0; j < ts.length; j++) {
    const g = ts[j] + (ts[j + 1] ?? '');
    if (j < ts.length - 1 && (!VOC.has(ts[j]) || !VOC.has(ts[j + 1])) && [...VOC.keys()].some(w => w.startsWith(g))) (out.push(g), j++);
    else out.push(ts[j]);
  }
  return out;
};
const findAll = ts => find(ts).sort((a, b) => b.sc - a.sc).slice(0, 6);
const snip = (d, ts) => {
  const m = rx(ts).exec(d.n), s = Math.max(0, (m ? m.index : 0) - 50), t = d.text.slice(s, s + 150);
  let out = '', last = 0;
  for (const x of d.n.slice(s, s + 150).matchAll(rx(ts, 'g'))) { out += esc(t.slice(last, x.index)) + '<mark>' + esc(t.slice(x.index, x.index + x[0].length)) + '</mark>'; last = x.index + x[0].length; }
  return (s ? '…' : '') + out + esc(t.slice(last)) + '…';
};
const START = ['podwalk', 'doelgroep', 'tiktok', 'storytelling', 'muziek', 'stakeholders', 'cases', 'prototype'].filter(w => VOC.has(w));
const SB = $('#searchBtn'), S = $('#search'), SQ = $('#sq'), SR = $('#sres');
const chips = ws => ws.map(w => `<button data-w="${w}">${w}</button>`).join('');
let hits = [];
const render = () => {
  const ts = words(SQ.value);
  if (!ts.length) { $('#ssug').innerHTML = chips(START); $('#snote').textContent = 'Populair: klik een woord of begin te typen.'; SR.innerHTML = ''; return; }
  const glued = glue(ts), fixed = glued.map(fix), changed = fixed.join(' ') !== glued.join(' '), last = fixed.at(-1);
  const more = [...VOC].filter(([w]) => w.startsWith(last) && w !== last).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([w]) => w);
  $('#ssug').innerHTML = chips(more);
  hits = findAll(fixed);
  $('#snote').innerHTML = changed ? `Bedoelde je <b>${esc(fixed.join(' '))}</b>? Resultaten hiervoor.` : hits.length ? `${hits.length} ${hits.length === 1 ? 'resultaat' : 'resultaten'}` : '';
  SR.innerHTML = hits.length ? hits.map((h, n) => `<button class="sr" data-n="${n}"><small>${esc(h.d.head)}</small><span>${snip(h.d, h.ts)}</span></button>`).join('') : `<p>Niets gevonden voor “${esc(SQ.value.trim())}”. Probeer een ander woord.</p>`;
};
// once the folder has opened, scroll to the passage that matched and flash it
const reveal = (i, k, ts) => {
  let n = 0;
  const t = setInterval(() => {
    if (++n > 300) return clearInterval(t);
    if (picked !== i || $('#reader').hidden || opening || closing) return;
    clearInterval(t);
    setTimeout(() => {
      const rd = $('#reader'), w = document.createTreeWalker($('#pages').querySelectorAll('.page')[k], NodeFilter.SHOW_TEXT), re = rx(ts);
      for (let nd; (nd = w.nextNode());) if (re.test(norm(nd.data))) {
        const el = nd.parentElement;
        rd.scrollTo({ top: el.getBoundingClientRect().top - rd.getBoundingClientRect().top + rd.scrollTop - 140, behavior: REDUCED ? 'auto' : 'smooth' });
        el.classList.remove('hit'); void el.offsetWidth; el.classList.add('hit');
        return;
      }
    }, 700);
  }, 100);
};
const searchOpen = () => S.classList.contains('on');
const search = on => {
  if (on === searchOpen()) return;
  on && menu(false);
  S.classList.toggle('on', on); SB.setAttribute('aria-expanded', on);
  if (on) { render(); SQ.focus(); SQ.select(); } else SB.focus();
};
SB.onclick = () => search(true);
$('#sx').onclick = () => search(false);
SQ.oninput = render;
S.onclick = e => {
  e.stopPropagation();
  const w = e.target.closest('[data-w]'), r = e.target.closest('.sr');
  if (w) { const ts = words(SQ.value); SQ.value = (ts.length > 1 ? ts.slice(0, -1).join(' ') + ' ' : '') + w.dataset.w; render(); SQ.focus(); } // a suggestion replaces the word being typed
  else if (r) { const h = hits[+r.dataset.n]; search(false); goTo(h.d.i, h.d.k); reveal(h.d.i, h.d.k, h.ts); }
  else if (e.target === S) search(false);
};
addEventListener('keydown', e => {
  if (e.key === 'Escape' && searchOpen()) return (e.stopImmediatePropagation(), search(false));
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') return (e.preventDefault(), search(!searchOpen()));
  if (!searchOpen()) return;
  const list = [SQ, ...SR.querySelectorAll('.sr')], at = list.indexOf(document.activeElement);
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); list[(at + (e.key === 'ArrowDown' ? 1 : -1) + list.length) % list.length].focus(); }
  else if (e.key === 'Enter' && document.activeElement === SQ) SR.querySelector('.sr')?.click();
}, true);
// the search button sits left of the menu button, whatever size or place the menu button has
const placeSearch = () => { const m = $('#menuBtn').getBoundingClientRect(), c = $('#close').getBoundingClientRect(), r = c.width ? c : m; Object.assign(SB.style, { top: m.top + 'px', right: innerWidth - r.left + 8 + 'px', height: m.height + 'px' }); };
const ro = new ResizeObserver(placeSearch); ro.observe($('#menuBtn')); ro.observe($('#close'));
addEventListener('resize', placeSearch);
new MutationObserver(placeSearch).observe(document.body, { attributes: true, attributeFilter: ['class'] }); // Esc button appears with body.opened
placeSearch();
