import React from "react";
import { useState } from "react";
import { useParams, Link } from "react-router";
import "./Verify.css";
import axios from "axios";
import { useEffect } from "react";

const Verify = () => {
  const { token } = useParams();

  const [loading, setLoading] = useState(true);

  const [responseStatus, setResponseStatus] = useState("");

  const verifyUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/user/verify/${token}`
      );

      setLoading(false);

      setResponseStatus(response.data);
    } catch (error) {
      console.log(error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      verifyUser();
    }
  }, []);

  if (loading) {
    return (
      <div>
        <img src="https://i.gifer.com/ZKZg.gif" alt="" />
      </div>
    );
  }

  return (
    <div className="verify">
      <h1>{responseStatus.msg}</h1>
      <img
        src={
          responseStatus.success
            ? "https://media4.giphy.com/media/sUlvyfTPYqnHl7tHoW/giphy.gif?cid=6c09b952tny3vvhv1ypn8spr1x0nsp1smy7yri5dx9blgn7w&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
            : "https://cdn.dribbble.com/userupload/42295887/file/original-2e27796737e975dc1e453c3b72df2a3d.gif"
        }
        alt=""
        className="verified"
      />
      {responseStatus.success && (
        <Link to="/">
          <button>Login Now</button>
        </Link>
      )}
    </div>
  );
};

export default Verify;
