import getData from "../utils/getData";

const Employment = () => {
    const [employment, setEmployment] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getData("employment/").then((json) => {
            setEmployment(json.coopTable);
            setLoaded(true);
        });
    }, []);
}