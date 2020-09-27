import React, {PureComponent} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
    padding: 10px;
    border: none;
    font-size: 16px;
    margin-right: 10px;
    border-radius: 4px;
    background-color: ${props => props.backColor};
    text-transform: uppercase;
`;

const ButtonCloseStyled = styled(ButtonStyled)`
    float: right;
    border: none;
    cursor: pointer;
    padding: 0;
    position: relative;
`;

const ButtonModalStyled = styled(ButtonStyled)`
    width: 101px;
    color: #fff;
    padding: 15px 0;
    font-size: 15px;
    text-align: center;
`;

const ButtonModalCloseStyled = styled(ButtonCloseStyled)`
    float: right;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 0;
    position: relative;
    font-size: 22px;
`;

class Button extends PureComponent {
    render() {
        const { styleClass, backgroundColor, text, onClick } = this.props;

        switch (styleClass) {
            case 'buttonClose':
                return (<ButtonCloseStyled backColor={backgroundColor} onClick={onClick}> {text} </ButtonCloseStyled>);
            case 'buttonModalClose':
                return (<ButtonModalCloseStyled backColor={backgroundColor} onClick={onClick}> {text} </ButtonModalCloseStyled>);
            case 'buttonModal':
                return (<ButtonModalStyled backColor={backgroundColor} onClick={onClick}> {text} </ButtonModalStyled>);
            default:
                return (<ButtonStyled backColor={backgroundColor} onClick={onClick}> {text} </ButtonStyled>);
        }
    }
}

Button.propTypes = {
    styleClass: PropTypes.string,
    backgroundColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

Button.defaultProps = {
    styleClass: 'ButtonStyled',
    backgroundColor: '#fff',
    text: '',
    onClick: undefined
};

export default Button;