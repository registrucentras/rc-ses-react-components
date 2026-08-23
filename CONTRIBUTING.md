# Prisidėjimo (contributing) gairės

Šioje repozitorijoje saugomas `@registrucentras/rc-ses-react-components` paketo išeities kodas.
Šiame faile aprašyta, kaip reikėtų pildyti, keisti ir peržiūrėti bibliotekos komponentus.

Gairės taikomos visiems, kurie prisideda prie bibliotekos. Bibliotekos savininkas yra Savitarnos
komanda: ji peržiūri pull request'us, priima sprendimus dėl viešo API ir leidžia naujas paketo versijas.

## Taikymo sritis

Ši biblioteka yra bendras SES aplikacijų React sąsajos sluoksnis. Pakeitimai turėtų patekti į vieną iš šių kategorijų:

- pakartotinai naudojami UI komponentai ir formų valdikliai;
- bendri išdėstymo arba paslaugų eigai skirti komponentai;
- temos, spalvyno ir ikonų ištekliai, naudojami visoje bibliotekoje;
- bibliotekos komponentų i18n resursai;
- Storybook istorijos ir testai, dokumentuojantys bei tikrinantys viešą elgseną.

Į šią biblioteką nereikėtų dėti aplikacijai specifinės verslo logikos, puslapio lygio duomenų užklausų ar vienkartinių realizacijos detalių, kurios turi likti bibliotekos naudotojo projekte.

## Prieš pradedant: dizaino ir architektūros derinimas

Prieš rašant kodą pakeitimas turi būti suderintas dviem lygiais:

1. **Dizainas.** Dizainas suderinamas su produkto savininku (PO) ir už dizainą atsakingu asmeniu.
   Realizacija turi atitikti patvirtintą Figma dizainą.
2. **Komponentų architektūra.** Suderinus dizainą, su Savitarnos komanda dar reikia suderinti, kaip
   pakeitimas atrodys bibliotekoje: ar bus kuriamas naujas komponentas, ar išplečiamas esamas, kur
   komponentas gyvens ir koks bus jo viešas API.

## Prieiga ir GitHub paskyra

Biblioteka saugoma [GitHub](https://github.com/registrucentras/rc-ses-react-components), todėl prisidėjimui reikia GitHub paskyros.

- Naudokite bet kurią GitHub paskyrą: tinka ir asmeninė, ir su RC el. paštu susieta paskyra.
  Reikalavimų dėl el. pašto adreso nėra.
- Paskyros profilyje turi būti nurodytas tikras vardas, kad pull request'ų autorius būtų atpažįstamas.

**Paslaugų teikėjų komandos dirba fork modelyje:** susikuriate asmeninę arba komandos repozitorijos
kopiją (fork), dirbate joje ir teikiate pull request'ą į pagrindinę repozitoriją.

**Savitarnos komandos nariai** šakas gali kurti tiesiai pagrindinėje repozitorijoje. Visa kita darbo
tvarka, aprašyta žemiau, yra tokia pati.

## Darbo tvarka

Repozitorijoje naudojamos dvi ilgaamžės šakos:

- `develop`: darbinė šaka, į kurią patenka visi pakeitimai;
- `main`: atitinka paskutinę išleistą paketo versiją.

Eiga:

```
develop
  -> feature šaka SAV-XXXX-... (fork'e arba pagrindinėje repozitorijoje)
  -> pull request į develop
  -> Savitarnos komandos peržiūra ir patvirtinimas
  -> merge į develop
  -> develop į main (versijos leidyba, atlieka Savitarnos komanda)
```

Praktinės taisyklės:

- Feature šakas kurkite **nuo `develop`**, ne nuo `main`.
- Šakos pavadinimas turi prasidėti Jira užduoties numeriu, pvz. `SAV-6446-text-wrap-in-list-with-icons`.
- Pull request'o bazinė šaka visada `develop`. Pull request'ų tiesiai į `main` neteikiame.
- Pull request'o pavadinime nurodykite užduotį, pvz. `SAV-6446: Wrap longer texts in list with icons`.
- Aprašymą pildykite pagal `.github/pull_request_template.md`: nuoroda į Jira užduotį, trumpas
  paaiškinimas, ekrano nuotraukos, kontrolinis sąrašas ir žinomos rizikos.
- Dirbdami fork'e, prieš teikdami pull request'ą, atnaujinkite savo `develop` šaką pagal pagrindinę
  repozitoriją, kad peržiūroje nebūtų nesusijusių pakeitimų.
- Pull request'us peržiūri Savitarnos komanda. Į `develop` jungiama tik po patvirtinimo.
- Į `main` patenka tik patvirtintas kodas, ir tai daro Savitarnos komanda leisdama naują versiją
  (žr. [Versijų leidyba](#versijų-leidyba)).

## Lokalus paruošimas

CI aplinkoje šiuo metu naudojama Node.js 22 versija. Rekomenduojama ir lokaliai naudoti Node.js 22, kad validacija sutaptų su CI.

Dirbdami fork'e, klonuokite savo kopiją ir pagrindinę repozitoriją pridėkite kaip `upstream`, kad
galėtumėte atsinaujinti `develop` šaką:

```bash
git clone git@github.com:<jūsų-paskyra>/rc-ses-react-components.git
cd rc-ses-react-components
git remote add upstream git@github.com:registrucentras/rc-ses-react-components.git
git fetch upstream
git checkout -b SAV-XXXX-trumpas-aprasymas upstream/develop
```

Priklausomybių įdiegimas:

```bash
npm i
```

Dažniausiai naudojamos komandos:

```bash
npm run dev
npm run storybook
npm run lint
npm run test:run
npm run build:lib
```

## Repozitorijos struktūra

- `src/components`: komponentų realizacijos.
- `src/theme`: temos išplėtimai, spalvynas ir MUI pritaikymai.
- `src/assets`: bendros ikonos, logotipas ir kiti vizualiniai ištekliai.
- `src/i18n`: bibliotekos vertimai ir lokalizacijos konfigūracija.
- `src/stories`: viešų komponentų Storybook istorijos.
- `src/examples`: demonstraciniai srautai ir pavyzdinės formos.
- `src/library/index.ts`: viešas paketo įėjimo taškas. Visi vieši API turi būti eksportuojami čia.
- `.storybook`: Storybook konfigūracija ir test runner nustatymai.

## Pakeitimo apimtis

Pakeitimai turėtų būti siauri ir aiškūs. Vienas pull request paprastai turėtų spręsti vieną iš šių uždavinių:

- pridėti naują komponentą;
- išplėsti esamą komponentą;
- sutaisyti klaidą;
- pagerinti dokumentaciją arba Storybook padengimą;
- atnaujinti temos elgseną arba prieinamumą.

Prieš atidarant pull request, įsitikinkite, kad šios komandos prasileidžia be klaidų:

```bash
npm run lint
npm run test:run
npm run build:lib
```

Komandą `npm run storybook` paleiskite tada, kai pakeitimas veikia atvaizdavimą, būsenas, valdiklius ar dokumentaciją.

## Reikalavimai komponentams

Nauji vieši komponentai turi būti paruošti naudojimui produkcinėje aplinkoje, o ne tik vizualiai atrodantys teisingai.

### Naujas komponentas ar esamo išplėtimas

Ar kuriamas naujas komponentas, ar išplečiamas esamas, sprendžiama derinant su Savitarnos komanda
(žr. [Prieš pradedant](#prieš-pradedant-dizaino-ir-architektūros-derinimas)). Bendra taisyklė:

- Jei dizainas yra to paties komponento nauja iteracija arba papildomas variantas, **esamas
  komponentas keičiamas vietoje**, o naujas elgsenos variantas atveriamas per props.
- Naujas komponentas kuriamas tada, kai keičiasi pati komponento paskirtis arba jo viešas API su
  esamu nebesuderinamas.
- Jei senojo elgsenos varianto atsisakoma, tai laužantis pakeitimas: jį reikia suderinti su Savitarnos
  komanda ir suplanuoti bibliotekos naudotojų projektuose.

### Pavadinimai

- Viešiems komponentams, utility funkcijoms ir ikonoms naudokite jau esamą `RcSes` prefiksą.
- Failų ir simbolių pavadinimai turi sutapti pagal prasmę.
- Rinkitės aiškius props pavadinimus vietoj trumpų ar dviprasmiškų.
- **Komponentų pavadinimuose nenaudokite versijų sufiksų** (`V2`, `New`, `Old` ir pan.). Šioje
  bibliotekoje versiją apibrėžia paketo versija, o ne komponento pavadinimas.

### API projektavimas

- Teikite pirmenybę aiškiai tipizuotiems props.
- Viešas API turi būti mažas ir aiškus.
- Neeksponuokite vidinių realizacijos detalių per props.
- Props pašalinimas, pervadinimas, numatytosios elgsenos keitimas ir eksportuojamų simbolių pakeitimai laikomi laužančiais pakeitimais(breaking changes).

### Realizacija

- Pirmenybę teikite kompozicijai, o ne giliai išsišakojusiai komponento logikai.
- Aplikacijai specifinė logika neturi patekti į biblioteką.
- Prieš kurdami naują variantą, pirmiausia pernaudokite jau esančius bendrus blokus.
- Importams iš `src` naudokite `@` aliasą.
- Laikykitės esamų formatavimo ir importų rikiavimo taisyklių.

## Vieši eksportai

Viskas, kas skirta bibliotekos naudotojams, turi būti eksportuojama iš `src/library/index.ts`.

Jei komponentas nėra eksportuojamas šiame faile, jis laikomas vidiniu, net jei egzistuoja `src/components` kataloge.

Pridėdami naują viešą komponentą:

1. pridėkite realizaciją;
2. pridėkite Storybook padengimą;
3. pridėkite testus;
4. eksportuokite komponentą iš `src/library/index.ts`.

## Stilizavimas ir tema

Ši biblioteka sukurta MUI pagrindu ir remiasi bendra SES tema.

- Visuotiniams MUI stiliaus pakeitimams teikite pirmenybę temos išplėtimams `src/theme/light` kataloge.
- Komponentui specifinei elgsenai ar kompozicijai teikite pirmenybę wrapper komponentui `src/components` kataloge.
- Nekoduokite spalvų, tarpų ar tipografijos reikšmių tiesiogiai, jei turėtų būti naudojamas esamas temos tokenas arba MUI temos nustatymas.
- Kortelės paviršius (fonas, rėmelis, radius, paddingai, gap) priklauso vienam komponentui - `RcSesCardShell`; jo reikšmės gyvena `src/theme/cards.ts`.
- Presetai ir receptai gali turėti kompoziciją bei tekstus, bet niekada savo paddingų, rėmelių ar fonų. Jei recepto dizainui reikia kitokio paviršiaus, prop'as pridedamas apvalkale, o ne recepte.
- Išlaikykite nuoseklią vizualinę elgseną pagal jau egzistuojančią SES dizaino kalbą.
- Jei pakeitimas vizualiai veikia kelis komponentus, prieš jungiant peržiūrėkite poveikį Storybook aplinkoje.

## Prieinamumas(Accessibility)

Prieinamumas yra komponento realizacijos dalis.

- Kai įmanoma, naudokite semantinius HTML elementus.
- Užtikrinkite klaviatūros valdymą visiems interaktyviems valdikliams.
- Suteikite prieinamus pavadinimus, žymas, pagalbinį tekstą ir klaidų tekstą ten, kur tai aktualu.
- Išsaugokite aiškiai matomą fokusavimo elgseną.

## Storybook dokumentacija

Storybook šiame projekte yra pagrindinis bibliotekos dokumentacijos sluoksnis.

Vieši UI pakeitimai turėtų būti lydimi Storybook atnaujinimų.

Bent minimaliai istorijos turėtų padengti:

- numatytąją būseną;
- svarbius variantus;
- neaktyvias ir klaidų būsenas, jei tai aktualu;
- interaktyvias būsenas, kai elgsena nėra triviali;
- tuos props derinius, kuriuos bibliotekos naudotojai greičiausiai kopijuos.

Istorijų pavadinimai ir args turėtų būti trumpi ir orientuoti į bibliotekos naudotoją. Istorijos turi atspindėti realų naudojimą, o ne dirbtines props kombinacijų matricas.

Išleistos versijos Storybook publikuojamas adresu
[ses-react-storybook.registrucentras.lt](https://ses-react-storybook.registrucentras.lt/). Peržiūrai
iš atskiros šakos Savitarnos komanda gali rankiniu būdu paleisti `Deploy Storybook to GitHub Pages`
darbo eigą; ji publikuoja Storybook adresu `/preview/<šakos-pavadinimas>/`. Tai veikia tik tada, kai
šaka yra pagrindinėje repozitorijoje, todėl fork'e dirbantiems peržiūrą reikia derinti su Savitarnos
komanda.

## Testavimas

Testai turi tikrinti elgseną, o ne realizacijos smulkmenas.

- Pridėkite arba atnaujinkite testus, kai keičiasi netrivialus atvaizdavimas, būsenų valdymas, validacija, valdymas klaviatūra ar integracinė elgsena.
- Testus laikykite kuo arčiau tikrinamo kodo.
- Venkite trapių assert'ų, priklausančių nuo atsitiktinės DOM struktūros.
- Pirmenybę teikite prieinamiems selektoriams, pvz. `getByRole`, `getByLabelText`, `getByText`.
- Kai sudėtiniam komponentui reikia stabilių vidinių identifikatorių testams ar E2E scenarijams, teikite pirmenybę aiškiai tipizuotam `testIds` props objektui.
- `testIds` reikšmės turi būti atvaizduojamos į `data-testid` atributus tik tose komponento dalyse, kur vartotojams reikia stabilių slot identifikatorių.
- Nenaudokite `slotProps`, `className` ar kitų stilizavimo API vien tik testų identifikatoriams perduoti, jei komponentui labiau tinka atskiras `testIds` kontraktas.

UI pakeitimams užtikrinkite, kad storybook ir testai išliktų suderinti.

## Internacionalizacija

Biblioteka šiuo metu turi lietuviškus ir angliškus resursus.

- Bet koks naujas naudotojui matomas tekstas turi būti pridedamas į atitinkamą i18n namespace kataloge `src/i18n/namespaces`.
- Pakartotinai naudojamuose komponentuose nekoduokite išverstų tekstų tiesiogiai.
- Jei komponentas priklauso nuo lokalės jautraus datų atvaizdavimo, išlaikykite suderinamumą su esama `date-fns` ir MUI lokalizacijos sąranka.
- Patikrinkite abi kalbas, jei pakeitimas veikia žymas, pagalbinį tekstą, validacijos tekstą ar datų formatavimą.

## Priklausomybės

Naujas priklausomybes pridėkite atsargiai.

- Pirmiausia rinkitės utility funkcijas, kurios repozitorijoje jau naudojamos.
- Naujos runtime priklausomybės turi turėti aiškų pagrindimą.
- Su React, MUI, i18n ir datų bibliotekomis susiję versijų pakeitimai tiesiogiai veikia bibliotekos naudotojus, todėl juos vertinkite ypač atsargiai.
- Peer dependencies ir runtime dependencies turi atitikti realią bibliotekos naudotojų schemą.
- `package.json` versijos lauko nekeiskite (žr. [Versijų leidyba](#versijų-leidyba)).

## Pull request kontrolinis sąrašas

Prieš prašydami peržiūros įsitikinkite, kad:

- pakeitimas suderintas su PO, dizainu ir Savitarnos komanda;
- pull request'o bazinė šaka yra `develop`, o pavadinime nurodytas Jira užduoties numeris;
- aprašymas užpildytas pagal pull request šabloną;
- viešas API yra tipizuotas ir minimalus;
- prireikus atnaujinti vieši eksportai faile `src/library/index.ts`;
- viešiems UI pakeitimams pridėtos arba atnaujintos Storybook istorijos;
- pasikeitusiai elgsenai pridėti arba atnaujinti testai;
- lokaliai sėkmingai praeina `npm run lint`, `npm run test:run` ir `npm run build:lib`;
- įvertintas prieinamumo, i18n ir temos poveikis;
- `package.json` versija nepakeista.

## Versijų leidyba

Naujas paketo versijas leidžia **tik Savitarnos komanda**. Prisidedantiems tai reiškia, kad
`package.json` versijos lauko pull request'uose keisti nereikia: versija pakeliama atskirai, ruošiant
leidybą.

Leidybos eiga:

1. Savitarnos komanda `develop` šakoje pakelia `package.json` versiją;
2. sukuriamas ir sujungiamas pull request iš `develop` į `main`;
3. GitHub'e paskelbiamas release, kuris paleidžia `Build and Publish` darbo eigą;
4. paketas publikuojamas į npm kaip `@registrucentras/rc-ses-react-components`, o išleistos versijos
   Storybook publikuojamas į GitHub Pages.

Jei release pažymėtas kaip prerelease, paketas publikuojamas su `rc` dist-tag, todėl `npm i` ir toliau
parsiunčia stabilią `latest` versiją.

## CI/CD lūkesčiai

Kiekvienam pull request'ui `Build and Publish` darbo eiga su Node.js 22 paleidžia `npm run lint`,
`npm run test:run` ir `npm run build:lib`, o testų rezultatus prideda kaip pull request'o patikrinimą.
Pull request'as turi būti žalias: publikavimo žingsnis vykdomas tik paskelbus release.
