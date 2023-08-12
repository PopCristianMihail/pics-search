import axios from 'axios';

const searchImages = async(term) => { // term = what the user is searching for
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID PXe4q7ZNygXeFT94609qK652ZkHsTyuUhokMlkj7Dno'
        },
        params: {
            query: term,
        }
    });
    console.log(response.data.results);
    return response.data.results;
}

export default searchImages;