import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileButton = ({ label, icon, to, onClick, classes }) => {
  return (
    <Link role="button" to={to} onClick={onClick}>
      <div
        className={`flex items-center gap-x-2 py-2 px-4 rounded-full bg-primary ring-highlight hover:bg-opacity-90 hover:ring-4 hover:scale-105 transition-all ${classes}`}
      >
        <span className="text-white rounded-full">{icon}</span>
        <span className="text-white text-2xl select-none">{label}</span>
      </div>
    </Link>
  );
};

export default ProfileButton;

ProfileButton.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  classes: PropTypes.string,
};
