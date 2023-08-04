const _baseCountryUrl = 'https://ap';

class CountryServices {
  getCountries = async () => {
    const response = await fetch(`${_baseCountryUrl}/countries?pageNum=1&pageSize=500`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json.data;
  };

  getCurrencies = async () => {
    const response = await fetch(`${_baseCountryUrl}/currencies`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json.data;
  };
}

const instance = new CountryServices();
export default instance;
