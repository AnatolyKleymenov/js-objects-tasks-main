// BEGIN
    export default getDomainInfo = (nameSite) => {
        const siteInf = {
            scheme:'',
            name:'',
        };
        if(nameSite.startsWith('https'))
        {
            siteInf.scheme = 'https';
            siteInf.name = nameSite.replace("https://", "");
        }
        else{
            siteInf.scheme = 'http';
            siteInf.name = nameSite.replace("http://", "");
        }
        return siteInf;
    }
// END