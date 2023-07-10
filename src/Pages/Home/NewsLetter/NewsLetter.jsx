import newsLetterBanner from '../../../Image/NewsLetterBanner/newsLetter.jpg'

const NewsLetter = () => {
    return (
        <div>
            <div className="hero min-h-[400px]" style={{
                backgroundImage: `url(${newsLetterBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top',
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <h1 className="mb-5  text-5xl font-bold">SIGNUP FOR NEWSLETTER</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonumm.</p>

                        <form className='flex gap-5'>
                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
                        <button className="btn btn-primary">Get Started</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;