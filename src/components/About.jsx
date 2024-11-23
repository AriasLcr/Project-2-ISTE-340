/* eslint-disable react/prop-types */
/**
 * About component displays information about a given advertisement.
 * 
 * @param {Object} props - The properties object.
 * @param {Object} props.ad - The advertisement object.
 * @param {string} [props.ad.title] - The title of the advertisement.
 * @param {string} [props.ad.description] - The description of the advertisement.
 * @param {string} [props.ad.quote] - A quote related to the advertisement.
 * @param {string} [props.ad.quoteAuthor] - The author of the quote.
 * 
 * @returns {JSX.Element} The rendered About component.
 */

import PropTypes from 'prop-types';

const About = ({ ad = {} }) => { 
    return (
        <div id="About" className='w-full flex flex-row justify-center'>
            <div className='mt-20 w-2/3 xl:w-3/5'>
                <h2 className='text-5xl my-20'>{ad.title}</h2>
                <h3 className=''>{ad.description}</h3>
                <div className='text-gray-500 flex justify-center flex-col items-center my-20'>
                    <h4 className=''>{ad.quote}</h4>
                    <h4>--{ad.quoteAuthor}</h4>
                </div>
            </div>
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