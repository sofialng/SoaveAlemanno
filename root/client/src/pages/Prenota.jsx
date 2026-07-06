import ContactForm from "../components/ContactForm";
import {
  intro_prenota
} from "../assets/content/content";

function Prenota() {  
  return (
    <>
      <main>
        <ContactForm 
          intro={intro_prenota}
          />
      </main>
    </>
  );
}

export default Prenota;
