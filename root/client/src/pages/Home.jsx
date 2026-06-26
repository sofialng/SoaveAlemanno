import Hero from "../components/Hero";
import Intro from "../components/Intro";
import TxtImg from "../components/TxtImg";
import ImgTxt from "../components/ImgTxt";
import ImageStripe from "../components/ImageStripe";
import Journey from "../components/Journey";
import QuoteBlock from "../components/QuoteBlock";
import TransparentDescription from "../components/Mosaic";
import ServiceExplorer from "../components/ServiceExplorer";
import SalentoSection from "../components/Map";
import WeddingTypes from "../components/Carousel";
import BoxToForm from "../components/BoxToForm";
import PatternFlowers from "../components/PatternFlowers"
import PatternZigZag from "../components/PatternZigZag";

import { 
  intro, 
  dove_i_sogni,
  scenografie_d_amore,
  wedding_stories,
  wedding_journey,
  wedding_experience,
  quote_auster,
  quote_caramagna,
  services,
  salento,
  wedding_types
} from "../assets/content/content";

function Home() {
  return (
    <>
      <main>
        <Hero />

        <Intro title={intro.title} text={intro.paragraph} />
       
        <section id="DoveISogni">
          <PatternFlowers
            children={
              <TxtImg 
                picture={dove_i_sogni.picture}
                title={dove_i_sogni.title}
                subtitle={dove_i_sogni.subtitle}
                paragraph={dove_i_sogni.paragraph}
                />
            }
            />
        </section>

        <div className="bg-secondary-light">
          <ImgTxt
            picture={scenografie_d_amore.picture}
            title={scenografie_d_amore.title}
            subtitle={scenografie_d_amore.subtitle}
            paragraph={scenografie_d_amore.paragraph}
            reverse={true}
          />
        </div>

        <QuoteBlock
          quote={quote_caramagna.quote}
          author={quote_caramagna.author}
          subtitle={quote_caramagna.subtitle}
        />

        <ImageStripe
          picture={wedding_stories.picture}
          title={wedding_stories.title}
          subtitle={wedding_stories.subtitle}
          paragraph={wedding_stories.paragraph}
          button={wedding_stories.button}
        />

        <Journey
          title={wedding_journey.title}
          subtitle={wedding_journey.subtitle}
          paragraph={wedding_journey.paragraph}
          items={wedding_journey.items}
        />

        <TransparentDescription
          image={wedding_experience.picture}
          title={wedding_experience.title}
          subtitle={wedding_experience.subtitle}
          paragraph={wedding_experience.paragraph}
        />

        <QuoteBlock
          quote={quote_auster.quote}
          author={quote_auster.author}
          subtitle={quote_auster.subtitle}
        />

        <div className="bg-secondary-light">
          <ServiceExplorer 
            title={services.title}
            subtitle={services.subtitle}
            paragraph={services.paragraph}
            data={services.list} 
          />
        </div>

        <PatternZigZag
          children={
            <SalentoSection 
              image={salento.image}
              title={salento.title}
              subtitle={salento.subtitle}
              paragraph={salento.paragraph}
            />
          }
          />

        <WeddingTypes 
          tipi={wedding_types}
        />
   
        <div className="bg-secondary-light">
          <BoxToForm />
        </div>

      </main>
    </>
  );
}

export default Home;
