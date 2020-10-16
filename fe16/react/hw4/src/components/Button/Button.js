import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = (props) => {
    const { text, className, onClick } = props;

    return (
        <button className={className} onClick={onClick}>{text}</button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: null,
    onClick: undefined
};

export default Button;