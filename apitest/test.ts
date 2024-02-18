import axios from 'axios';

async function makePostRequest() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const headers = {
        'Content-Type': 'application/json',
    };
    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    try {
        const res = await axios.post(url, data, { headers });
        console.log(res.data);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error making POST request:', error.message);
        } else {
            console.error('Unknown error occurred:', error);
        }
    }
}

makePostRequest();
