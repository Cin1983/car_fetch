import axios from "axios";

export default axios.create({
        baseURL: "https://api.unsplash.com",
        headers: {
            Authorization: "Client -ID knrFQlB94z2DO2oGL8iPy1-CU4gLRJM7TTDnxujZXYc"
            
    }
});