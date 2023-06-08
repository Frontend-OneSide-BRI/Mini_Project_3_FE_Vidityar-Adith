import React, { useEffect, useState } from "react";
import DetailItem from "../../components/Molecules/Detail";
import tmdbApi from "../../service";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Atom/Button";

function DetailPage() {
  const [detailMovie, setDetailMovie] = useState([]);
  const params = useParams();
  const id = params.id;
  console.log(id);
  const getDetail = async () => {
    try {
      const response = await tmdbApi.detail("movie", id, { params: {} });
      console.log(response);
      setDetailMovie(response);
    } catch {
      //console.log("error");
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {detailMovie && (
        <div className="min-h-screen bg-dark">
          <div className="m-4 absolute z-[1000]">
            <Button>
              <Link to="/movie">Back</Link>
            </Button>
          </div>
          <DetailItem detailMovie={detailMovie} />
        </div>
      )}
    </>
  );
}

export default DetailPage;
