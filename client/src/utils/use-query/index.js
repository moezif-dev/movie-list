import { useLocation } from "react-router-dom";
const useQuery = (defaultValue = '') => {
  const params = {};
  (useLocation().search || defaultValue).replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    params[key] = value;
  });
  return params;
};


export default useQuery;