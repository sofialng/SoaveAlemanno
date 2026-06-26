import PageIntro from "../components/PageIntro";
import TxtImg from "../components/TxtImg";
import ImgTxt from "../components/ImgTxt";
import Cards from "../components/Cards";
import PatternZigZag from "../components/PatternZigZag";
import PatternStars from "../components/PatternStars";
import TxtLayout from "../components/TxtLayout";

import {
  intro_chisono,
  chi_sono,
  se_dovessi_descrivermi,
  mariella,
  perche_noi,
  certificazione
} from "../assets/content/content";

function About() {  
  return (
    <>
      <main>
        <div className="w-full px-6 pt-30 pb-2 md:px-12 bg-secondary-light">
        <PageIntro
          header={intro_chisono.subtitle}
          title={intro_chisono.title}
          text={intro_chisono.paragraph}
          />
          </div>

        <PatternZigZag
          children={
            <TxtImg 
              picture={chi_sono.picture}
              title={chi_sono.title}
              subtitle={chi_sono.subtitle}
              paragraph={chi_sono.paragraph}
              />
          }
        />

        <Cards 
          title={se_dovessi_descrivermi.title}
          subtitle={se_dovessi_descrivermi.subtitle}
          cards={se_dovessi_descrivermi.cards}/>

        <PatternStars
          children={
            <ImgTxt 
              picture={mariella.picture}
              title={mariella.title}
              subtitle={mariella.subtitle}
              paragraph={mariella.paragraph}
              />
          } 
          />

         <TxtLayout 
          title={perche_noi.title}
          subtitle={perche_noi.subtitle}
          paragraph={perche_noi.paragraph}
          cards={perche_noi.cards}
          quote_block={perche_noi.quote_block}
          title_2={perche_noi.title_2}
          paragraph_2={perche_noi.paragraph_2}
            />

          <TxtImg 
            picture={certificazione.picture}
            title={certificazione.title}
            subtitle={certificazione.subtitle}
            paragraph={certificazione.paragraph}
            />

      </main>
    </>
  );
}

export default About;
