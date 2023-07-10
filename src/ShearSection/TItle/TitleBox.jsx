

const TitleBox = ({title}) => {
    return (
        <div>
            <div className='mt-28'>
                <div className='divider px-20'><span className='border-2 p-2 text-3xl font-thin'>{title}</span>
                </div>
            </div>
        </div>
    );
};

export default TitleBox;