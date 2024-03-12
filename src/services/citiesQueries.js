import axios from "axios";

export const getCities = async () => {
    try {
        const resp = await axios("http://localhost:4000/api/cities")
        return resp.data
    } catch (error) {
        return []
    }
}
