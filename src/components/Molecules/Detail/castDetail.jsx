import React, { useEffect, useState } from "react";
import tmdbApi from "../../../service";
import apiConfig from "../../../helper/apiConfig";

function CastDetail({ id }) {
  const [casts, setCasts] = useState([]);
  useEffect(() => {
    const getCredits = async () => {
      const res = await tmdbApi.credits("movie", id);
      setCasts(res.cast.slice(0, 5));
    };
    getCredits();
  }, [id]);
  return (
    <>
      <div className="casts">
        {casts.map((item, i) => (
          <div key={i} className="casts__item">
            <div
              className="casts__item__img"
              style={{
                backgroundImage: `url(${apiConfig.w500Image(
                  item.profile_path
                )})`,
              }}
            ></div>
            <p className="casts__item__name">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CastDetail;
