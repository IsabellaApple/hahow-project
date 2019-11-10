// URL setting basic URL
const baseURL = 'http://hahow-recruit.herokuapp.com';
const baseURLHTTPS = 'https://hahow-recruit.herokuapp.com';
// Heroes
const heroesListUrl = `${baseURL}/heroes`; 
const heroesListUrlHTTPS = `${baseURLHTTPS}/heroes`; 
// [GET] http://hahow-recruit.herokuapp.com/heroes
// [GET] http://hahow-recruit.herokuapp.com/heroes/:heroId/profile
// [PATCH] https://hahow-recruit.herokuapp.com/heroes/:heroId/profile

const defaultHeader = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };

// Method: GET
const getMethod = (...arg) => {
    
    const url = arg[1] ? (arg[0] + '/' + arg[1] + '/profile') : arg[0];

    const getData = fetch( url, {
        method: 'GET',
        headers: defaultHeader
    }).then((response) => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json();
    })

    return getData;
}

// Method: PATCH
const patchMethod = (...arg) => {
    const url = (arg[0]+'/'+ arg[1] +'/profile');
    const data = JSON.stringify(arg[2]);

    const patchData = fetch( url, {
        method: 'PATCH',
        headers: defaultHeader,
        body: data
    })

    return patchData;
}

export const apiHeroesList = () => getMethod(heroesListUrl);
export const apiSingleHero = (id) => getMethod(heroesListUrl, id);
export const apiUpdateHeroAbility = (id, data) => patchMethod(heroesListUrlHTTPS, id, data);

