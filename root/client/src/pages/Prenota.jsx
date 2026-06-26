import ContactForm from "../components/ContactForm";
import {
  intro_prenota
} from "../assets/content/content";

function Prenota() {  
  return (
    <>
      <main>
        <ContactForm 
          title={intro_prenota.title}
          subtitle={intro_prenota.subtitle}
          paragraph={intro_prenota.paragraph}
          />
      </main>
    </>
  );
}

export default Prenota;
