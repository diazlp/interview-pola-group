import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../actions/userAction";

function DetailPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userDetail } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  return (
    <div className="about-section">
      <h1>
        {userDetail.name} ({userDetail.email})
      </h1>
      <p>
        {userDetail.address?.street} {userDetail.address?.suite}, &nbsp;
        {userDetail.address?.city}, {userDetail.address?.zipcode}
      </p>
      <p>{userDetail.company?.name}</p>
    </div>
  );
}

export default DetailPage;
