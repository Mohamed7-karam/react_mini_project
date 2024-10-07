/* eslint-disable prettier/prettier */
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ injure, handleSweetWord, enterPress }) => {
  return (
    <form className="form">
      <input
        type="text"
        className="input"
        placeholder="Écrit moi un mot gentil ! Appuie sur entrer pour valider le mot"
        value={injure}
        onChange={(event) => {
          handleSweetWord(event.target.value);
        }}
        onKeyPress={enterPress}
      />
    </form>
  );
};

Input.propTypes = {
  injure: PropTypes.string.isRequired,
  handleSweetWord: PropTypes.func.isRequired,
  enterPress: PropTypes.func.isRequired,
};
export default Input;
