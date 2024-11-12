/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const About = ({ ad = {} }) => { 
    return (
        <div className='w-full flex flex-row'>
            <div className='m-10 w-1/2'>
                <h2 className='text-5xl'>{ad.title}</h2>
                <h3 className=''>{ad.description}</h3>
                <div className='text-gray-500 flex justify-center flex-col items-center'>
                    <h4 className=''>{ad.quote}</h4>
                    <h4>--{ad.quoteAuthor}</h4>
                </div>
            </div>
            <img src="" alt="" />
        </div>
    );
};

About.propTypes = {
    ad: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        quote: PropTypes.string,
        quoteAuthor: PropTypes.string,
    }),
};

export default About;