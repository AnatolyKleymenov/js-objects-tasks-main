// BEGIN
    export default getDomainInfo = (nameSite) => {
        const siteInf = {
            scheme:'',
            name:'',
        };
        if(nameSite.startsWith('https'))
        {
            siteInf.scheme = 'https';
            siteInf.name = siteInf.name.replace("https://", "");
        }
        else{
            siteInf.scheme = 'http';
            siteInf.name = siteInf.name.replace("http://", "");
        }
        return siteInf;
    }
// END