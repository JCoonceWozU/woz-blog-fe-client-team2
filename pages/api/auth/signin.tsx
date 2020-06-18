import {NextApiHandler} from "next";

const signIn: NextApiHandler = async (req, res) => {
    try {
        await handleLogin(req, res);
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).end(error.message);
    }
};

export default signIn;
