import Section from '../layouts/Section';
import AwardCard from '../components/AwardCard';

const Awards = () => {
  return (
    <Section className="bg-gradient-to-t from-deepbread-lightgreen to-white">
      <div className="h-full flex flex-col">
        <div className="text-6xl font-bold pt-10 pb-3">Awards</div>
        <div className="">Thanks to my precious friends, and myself as well</div>
        <div className="grid grid-cols-3 justify-center self-center items-center h-full gap-12">
          <AwardCard />
          <AwardCard />
          <AwardCard />
        </div>
      </div>
    </Section>
  );
};

export default Awards;
