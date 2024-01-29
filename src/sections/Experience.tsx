import Section from "../layouts/Section";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
   return (
      <Section className="bg-gradient-to-t from-deepbread-teagreen to-deepbread-lightgreen">
         <div className="text-6xl font-bold pt-10 pb-3">Experience</div>
         <div className="">Aiming for the best slowly, but surely</div>
         <div>
            <ExperienceCard />
         </div>
      </Section>
   );
};

export default Experience;
