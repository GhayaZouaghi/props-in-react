import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, hundleName, children }) => {
  return (
    <div className="childComponent">
      <h2 style={{ color: "red" }}>{fullName}</h2>
      <h2>{bio}</h2>
      <h3>{profession}</h3>
      {children}
    </div>
  );
};

export default Profile;

/********* PropTypes */
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  hundleName: PropTypes.func,
};
/********* Default props */
Profile.defaultProps = {
  name: "No name",
  bio: "Empty",
  profession: "Nothing",
};
