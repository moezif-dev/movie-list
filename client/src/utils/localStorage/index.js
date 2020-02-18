/* global localStorage */
/* function to retrive state from browser's localstorage */
export const loadState = (stateId) => {
  // insure that localStorage is available (localStorage calls can fail if users previcy settings does not allow it).
  try{
    const serializedState = localStorage.getItem(stateId);
    if(!serializedState){
      return null;
    };

    return JSON.parse(serializedState);
  } catch (e) {
    return null;
  }
};

/* function to save redux state to browser's localstorage */
export const saveState = (stateId, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(stateId, serializedState);

  } catch (e) {
    // ignore, or log them somewhere if interested
  }
};
