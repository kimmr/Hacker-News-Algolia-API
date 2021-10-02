import { useContext } from "react";
import SearchContext from "../store/SearchContext";

const History = () => {
    const msg = useContext(SearchContext);

    return (
        <h1>{msg.searchHistory}</h1>
    );
};

export default History;