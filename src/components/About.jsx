/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const About = ({ ad = {} }) => { 
    return (
        <>
            <div className='m-10'>
                <h2>{ad.title}</h2>
                <h3>{ad.description}</h3>
                <div className=''>
                    <h4 className=''>{ad.quote}</h4>
                    <h4>--{ad.quoteAuthor}</h4>
                </div>
            </div>
        </>
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