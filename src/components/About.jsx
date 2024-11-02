import PropTypes from 'prop-types';

const About = ({ ad = [] }) => {
    return (
        <>
        <div className='About'>
            <h2>{ad.title}</h2>
            <h3>{ad.description}</h3>
            <div className='aboutQuote'>
                <h4 className='quote'>{ad.quote}</h4>
                <h4>--{ad.quoteAuthor}</h4>
            </div>
        </div>
        </>
    )
};

About.PropTypes = {
    ad : PropTypes.array,
}

export default About