import Navbar from '../components/Navbar';
import Body from './Body';

const Main = () => {
  return (
    <div className="h-full w-full flex flex-col items-center cursor-default select-none bg-deepbread-white font-roboto">
      <Navbar />
      <Body />
    </div>
  );
};

export default Main;
