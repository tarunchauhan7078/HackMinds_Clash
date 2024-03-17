import axios from '../AxiosConfig'

export const handleLogin = async (email, ideaTitle, description, domain, url) => {
    try {
        const response = await axios.post(``);
        console.log(response.data);
        return response.data;
    } catch (e) {
        console.error("Submission Failed", e.response ? e.response.data : e.message)
        throw e;
    }
}