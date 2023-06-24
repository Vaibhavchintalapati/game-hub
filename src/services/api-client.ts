
import axios from 'axios';

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '38d161669e934da98e4f7717d45f33f3'
    }
});
