import Earth from './../components/earth';
import Water from './../components/water';
import ContactForm from './../components/contactForm';

const Contact = () => {
    return(
        <>
        <div className="earth__container">
            <Earth />
            <Water />
            <ContactForm />
            </div>
        </>
    )
}
export default Contact