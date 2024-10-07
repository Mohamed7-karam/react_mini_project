/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import './Display.scss';
import bulle2 from '../../assets/bulle2.webp';
import bulle1 from '../../assets/bulle1.webp';

const Display = ({ nicole, john }) => {
  return (
    <div>
      <div className="display-left display-container">
        <p className="display-text">{john}</p>
        <img src={bulle2} alt="" />
      </div>
      <div className="display-right display-container">
        <p className="display-text">{nicole}</p>
        <img src={bulle1} alt="" />
      </div>
    </div>
  );
};

Display.propTypes = {
  nicole: PropTypes.string.isRequired,
  john: PropTypes.string.isRequired,
};
export default Display;
