import axios from 'axios';

class PostModel {
    static getPosts(city) {
        let url = "http://localhost:3001/api/posts/" + city
        let request = axios.get(url);
        
        console.log("City posts request: ", request);
        return request;
    }

    static addPost(title, body, city, username) {
        let url = "http://localhost:3001/api/posts/create";
        let request = axios.post(url, {
            username: username,
            title: title,
            body: body,
            city: city,
        });
        
        return request;
    }
}

export default PostModel;