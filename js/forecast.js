const myApiKey = 'qF3aDsCAKcOfXErZgwuu7YfH5wT5Aeur';



const searchCity = async (cityName)=>{
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${myApiKey}&q=${cityName}`;

    const response = await fetch(baseURL+query);
    if(response.status !== 200){
        throw new Error('Can not fetch the data');
    }
    const data = await response.json();
    const cityData = data[0];
    const Key = data[0].Key;
    return {cityData,Key};
};


const getWeather = async (locationKey)=>{
    const baseURL ='http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationKey}?apikey=${myApiKey}`;

    const response = await fetch(baseURL+query);
    const data = await response.json();
    return data[0];
}
