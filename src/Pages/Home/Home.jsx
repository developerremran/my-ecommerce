
import Banner from './Banner';
import Slide from './Slide';
import FetureProducts from './FetureProducts/FetureProducts';
import NewsLetter from './NewsLetter/NewsLetter';
import CategoryDataShow from './CategoryData/CategoryDataShow';
 

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Slide></Slide>
           <FetureProducts></FetureProducts>
           {/* <FetureProducts></FetureProducts> */}
           <NewsLetter></NewsLetter>
           <CategoryDataShow></CategoryDataShow>
        </div>
    );
};

export default Home;