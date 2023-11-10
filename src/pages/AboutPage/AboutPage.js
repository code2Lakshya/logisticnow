import HeroSectionc from "../../components/HeroSectionc/HeroSectionc";
import Interested from "../HomePage/Interested/Interested";
import { About } from "./About/About";
import './AboutPage.css';
import { useScrollToTop } from "../../utils/Hooks/useScrollToTop";

const AboutPage = () => {

useScrollToTop();

    return (
        <div className="about-page margin-top">
            <HeroSectionc
                heading='About Us'
                desc='We are a technology-enabled logistics company that aims to deliver reliability through our network and provide transparency to our clients.'
            />
            <About />
            <Interested />
        </div>
    );
}
export default AboutPage;