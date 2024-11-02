
const About = ({ad}) => {
    return (
        <div>
            <h2>{ad.title}</h2>
            <h3>{ad.description}</h3>
            <div>
                <h4>{ad.quote}</h4>
                <h4>{ad.quoteAuthor}</h4>
            </div>
        </div>
    );
}

export default About;