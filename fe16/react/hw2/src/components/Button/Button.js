import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

class Button extends PureComponent {
    render() {
        const { text, className, onClick } = this.props;

        return (
            <button className={className} onClick={onClick}>{text}</button>
        );
    }
}

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