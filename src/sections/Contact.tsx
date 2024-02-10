import Section from '../layouts/Section';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section className="bg-deepbread-brown text-white relative flex flex-col justify-center">
      <div className="h-full flex flex-col">
        <div className="text-6xl font-bold pt-10 pb-3">Contact</div>
        <div className="">Get connected with me!</div>
        <div className="flex flex-row justify-center self-center items-center h-full mt-m10 gap-4">
          <Link to="https://github.com/ImgyeongLee" target="_blank" className="px-5 py-2 text-8xl text-white">
            <FaGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/imgyeong-lee-228295242/"
            target="_blank"
            className="px-5 py-2 text-8xl text-white">
            <FaLinkedin />
          </Link>
          <Link to="https://www.instagram.com/deepbread33/" target="_blank" className="px-5 py-2 text-8xl text-white">
            <FaInstagramSquare />
          </Link>
          <Link to="https://twitter.com/DONTEXIST_3" target="_blank" className="px-5 py-2 text-8xl text-white">
            <FaTwitterSquare />
          </Link>
          <div className="px-5 py-2 text-8xl text-white">
            <FaDiscord />
          </div>
        </div>
      </div>
      <Footer />
    </Section>
  );
};

export default Contact;
