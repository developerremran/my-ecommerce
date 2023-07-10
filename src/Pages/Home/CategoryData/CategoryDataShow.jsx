import CategoryData from "../../../API/CategoryData";
import TitleBox from "../../../ShearSection/TItle/TitleBox";

import c1 from '../../../Image/Category/282259-0001_2-494x593.jpeg'
import c2 from '../../../Image/Category/589864-5295_1-494x593.jpeg'
import c3 from '../../../Image/Category/booking-494x593.jpg'
import c4 from '../../../Image/Category/hoodie_4_front-494x593.jpg'

const CategoryDataShow = () => {
    const[productCategory,productCategory1,productCategory2] = CategoryData();
    return (
        <div className="mt-20 my-20">
            <TitleBox title={'FEATURED CATEGORIES'}></TitleBox>
            
            <div className="flex gap-5 mt-20">
                <div className="">
                    <img className="w-[300px] shadow-lg h-[400px]" src={c1} alt="" />

                    <div className=" -mt-28">
                    <button className="btn btn-warning w-full hover:bg-green-700 text-white">Total Products <span className="text-xl font-semibold text-red-50">{productCategory.length}</span></button>
                    </div>
                </div>
                <div>
                <img className="w-[300px] shadow-lg h-[400px]" src={c2} alt="" />
                <div className=" -mt-28">
                    <button className="btn btn-warning w-full hover:bg-green-700 text-white">Total Products <span className="text-xl font-semibold text-red-50">{productCategory1.length}</span></button>
                    </div>
                </div>
                <div>
                <img className="w-[300px] shadow-lg h-[400px]" src={c3} alt="" />
                <div className=" -mt-28">
                    <button className="btn btn-warning w-full hover:bg-green-700 text-white">Total Products <span className="text-xl font-semibold text-red-50">{productCategory2.length}</span></button>
                    </div>
                </div>
                <div>
                <img className="w-[300px] shadow-lg h-[400px]" src={c4} alt="" />
                <div className=" -mt-28">
                    <button className="btn btn-warning w-full hover:bg-green-700 text-white">Total Products <span className="text-xl font-semibold text-red-50">{productCategory1.length}</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDataShow;