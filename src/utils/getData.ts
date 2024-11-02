
const proxyServer = "https://solace.ist.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/about/"

const getData = async (endpoint) => {
    const res = await fetch(`${proxyServer}${endpoint}`);
    return await res.json();
}

export default getData;     