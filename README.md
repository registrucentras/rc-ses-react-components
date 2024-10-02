# RC-SES React komponentų biblioteka

Šioje repozitorijoje rasite RC-SES React komponentų bibliotekos išeities kodą. Biblioteką sudaro:
 - pagal bendrą RC-SES gidą stilizuoti funkcionalūs paslaugų užsakymo formų komponentai;
 - struktūriniai sąsajos išdėstymo komponentai formų ir paslaugos užsakymo puslapio atvaizdavimui;
 - pavyzdinės (demo) formos komponentas su visais šioje bibliotekos versijoje prieinamais komponentais;

## Prerekvizitai

1. Įsitikinkite, kad turite įdiegtą bent **18.3** arba naujesnę [Node.js](https://nodejs.org/en) versiją;
2. Jei to dar nepadarėte, lokaliai klonuokite `rc-ses-react-components` projektą:
    ```bash
    git clone git@github.com:registrucentras/rc-ses-react-components.git
    ```
3. Terminale atidarykite klonuoto projekto šakinį aplanką ir sudiekite projektui reikiamas bibliotekas:
    ```bash
    npm i
    ```

## Pavyzdinės formos

Repozitorijoje galite rasti pavyzdės formos ir komponentų implementaciją (`src\examples\MultipleStepForm\**`).

Norėdami peržiūrėti pavyzdinę formą naršyklėje:

 - sukompiliuokite aplikaciją: `npm run build`;
 - startuokite aplikaciją *preview* rėžime: `npm run preview`;
 - naršyklėje atidarykite [http://localhost:4173/](http://localhost:4173/);

Alternatyviai, esant poreikiui pavyzdinės formos peržiūra galima ir *development* rėžime:

 - sukompiliuokite aplikaciją: `npm run dev`;
 - naršyklėje atidarykite [http://localhost:5173/](http://localhost:5173/);

## *npm* biblioteka

Versijuojama sukompiliuota *npm* biblioteka bus prieinama artimiausiu metu.
