import Section from "../layouts/Section";
const Intro = () => {
   return (
      <Section className="bg-gradient-to-b from-deepbread-white to-white flex gap-8">
         <div className="bg-deepbread-teagreen p-36 rounded-full shadow-md"></div>
         <div className="flex flex-col w-1/3">
            <div className="text-4xl font-bold py-3">Hi! I am a...</div>
            <div className="bg-white p-5 rounded-xl shadow-md w-full">???</div>
         </div>
      </Section>
   );
};

export default Intro;
