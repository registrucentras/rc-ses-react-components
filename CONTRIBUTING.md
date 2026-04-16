# Prisidėjimo (contributing) gairės

Šioje repozitorijoje saugomas `@registrucentras/rc-ses-react-components` paketo išeities kodas.
Šiame faile aprašyta, kaip reikėtų pildyti, keisti ir peržiūrėti bibliotekos komponentus.

## Taikymo sritis

Ši biblioteka yra bendras SES aplikacijų React sąsajos sluoksnis. Pakeitimai turėtų patekti į vieną iš šių kategorijų:

- pakartotinai naudojami UI komponentai ir formų valdikliai;
- bendri išdėstymo arba paslaugų eigai skirti komponentai;
- temos, spalvyno ir ikonų ištekliai, naudojami visoje bibliotekoje;
- bibliotekos komponentų i18n resursai;
- Storybook istorijos ir testai, dokumentuojantys bei tikrinantys viešą elgseną.

Į šią biblioteką nereikėtų dėti aplikacijai specifinės verslo logikos, puslapio lygio duomenų užklausų ar vienkartinių realizacijos detalių, kurios turi likti bibliotekos naudotojo projekte.

## Lokalus paruošimas

CI aplinkoje šiuo metu naudojama Node.js 22 versija. Rekomenduojama ir lokaliai naudoti Node.js 22, kad validacija sutaptų su CI.

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

## Prisidėjimo eiga

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

### Pavadinimai

- Viešiems komponentams, utility funkcijoms ir ikonoms naudokite jau esamą `RcSes` prefiksą.
- Failų ir simbolių pavadinimai turi sutapti pagal prasmę.
- Rinkitės aiškius props pavadinimus vietoj trumpų ar dviprasmiškų.

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

## Pull request kontrolinis sąrašas

Prieš prašydami peržiūros įsitikinkite, kad:

- viešas API yra tipizuotas ir minimalus;
- prireikus atnaujinti vieši eksportai faile `src/library/index.ts`;
- viešiems UI pakeitimams pridėtos arba atnaujintos Storybook istorijos;
- pasikeitusiai elgsenai pridėti arba atnaujinti testai;
- lokaliai sėkmingai praeina `npm run lint`, `npm run test:run` ir `npm run build:lib`;
- įvertintas prieinamumo, i18n ir temos poveikis.

## CI/CD lūkesčiai

CI pull request metu sėkmingai prasileidžia esamas pipeline.
