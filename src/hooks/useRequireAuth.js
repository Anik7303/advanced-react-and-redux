import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useRequireAuth = () => {
    const history = useHistory();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (!auth) {
            history.push("/");
        }
    }, [history, auth]);
};

export default useRequireAuth;
