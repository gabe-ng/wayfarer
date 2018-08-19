import axios from 'axios';

class PostModel {
    static getPosts(city) {
        let url = "http://localhost:3001/api/posts/" + city
        let request = axios.get(url);
        
        console.log("City posts request: ", request);
        return request;
    }
}

export default PostModel;