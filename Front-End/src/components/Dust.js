import React, { useState, useEffect } from "react";
import "../scss/Dust.scss";
import axios from "axios";

function Dust() {
  const API_KEY =
    "AWww3bsN1Jf0BBZXWkVQG%2F%2FnC2xpn3sSDXgBJhsYdJIMVPHiScpp9jPP%2Bs8iwwZv0v9m6Rt3qW9DgK8SbHWMag%3D%3D";
  const API_URL = `
https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=종로구&dataTerm=month&pageNo=1&numOfRows=100&returnType=json&serviceKey=AWww3bsN1Jf0BBZXWkVQG%2F%2FnC2xpn3sSDXgBJhsYdJIMVPHiScpp9jPP%2Bs8iwwZv0v9m6Rt3qW9DgK8SbHWMag%3D%3D`;
  axios.defaults.baseURL = "http://openapi.airkorea.or.kr/";
  let [dust, setDust] = useState({});
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    //getDust();
  }, []);

  const getDust = async () => {
    // status별 error 코드 만들기
    try {
      const resp = await axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=종로구&dataTerm=month&pageNo=1&numOfRows=100&returnType=json&serviceKey=${API_KEY}`
        )
        .catch((err) => {
          console.error(err);
        });
      console.log(resp.data.response.body);

      setLoading(false);
    } catch (e) {
      throw new Error(e);
    }
  };

  return (
    <React.Fragment>
      <div className="dust-container">
        {loading ? <p>loading</p> : <p>complete</p>}
      </div>
    </React.Fragment>
  );
}

export default Dust;
