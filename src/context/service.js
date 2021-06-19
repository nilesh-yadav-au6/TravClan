import axios from "axios";
import { CUSTOMERLIST_SUCCESS,CUSTOMERLIST_FAILURE} from "./action";
const URL = "https://intense-tor-76305.herokuapp.com/merchants";

const getCustomerList = (dispatch) => {
    axios.get(URL)
    .then((response) => {
      dispatch({
        type: CUSTOMERLIST_SUCCESS,
        payload: response.data
      });
    })
    .catch((err) => {
      dispatch({ type: CUSTOMERLIST_FAILURE });
    });
}

export default getCustomerList;