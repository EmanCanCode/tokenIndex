import axios from 'axios';

export function getVolatility(symbol?: string) {
    const config = {
        headers: { 
            'X-CMC_PRO_API_KEY': '45be1879-9958-4adb-8ff3-75edbe7eabc5' 
        }
      };
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
    axios.get(url, config).then((res: any) => {
        console.log({res});
    }).catch((err: any) => {
        console.log({err});
    });
}

getVolatility();