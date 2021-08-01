const updatePlaceData = () => {
  return (dispatch) => {
    fetch("https://api.covid19india.org/data.json")
      .then((req) => req.json())
      .then((data) => {
        console.log(data);
        return dispatch({
          type: "UPDATE_PLACE_DATA",
          payload: data,
        });
      });
  };
};

export default updatePlaceData;
