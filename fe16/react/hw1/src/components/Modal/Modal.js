import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from "../Button/Button";
import styled from 'styled-components';

const ModalStyled = styled.div`
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font: 15px Helvetica Neue, Arial, sans-serif;
    color: #fff;
    overflow: auto;
    background-color: rgba(0,0,0,0.8);
`;

/* Modal Content */
const ModalContentStyled = styled.div`
    position: relative;
    margin: 15% auto; /* 15% from the top and centered */
    width: 627px;
`;

/* Modal Header */
const ModalHeaderStyled = styled.div`
    padding: 21px 30px;
    font-size: 22px;
    text-align: left;
    background-color: ${props => props.backColor};
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
`;

/* Modal Body */
const ModalBodyStyled = styled.div`
    padding: 35px 41px;
    font-size: 15px;
    text-align: center;
    line-height: 2;
    background-color: ${props => props.backColor};

    p {
        margin: 0;
    }
`;

/* Modal Footer */
const ModalFooterStyled = styled.div`
    padding: 0 0 24px;
    background-color: ${props => props.backColor};
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
`;

class Modal extends PureComponent {
    render() {
        const { header, closeButton, text, actions, closeFunc, colorHeader, colorBody } = this.props;

        window.addEventListener('click', this.closeModal);

        return (
            <ModalStyled className='modal'>
                <ModalContentStyled>
                    <ModalHeaderStyled backColor={colorHeader}>
                        {
                            closeButton &&
                            <Button styleClass='buttonModalClose' backgroundColor="transparent" text="&#x2715;" onClick={closeFunc} />
                        }
                        <div>{header}</div>
                    </ModalHeaderStyled>
                    <ModalBodyStyled className="modal-body" backColor={colorBody}>
                        {text}
                    </ModalBodyStyled>
                    <ModalFooterStyled backColor={colorBody}>
                        <div>{actions}</div>
                    </ModalFooterStyled>
                </ModalContentStyled>
            </ModalStyled>
        );
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.closeModal);
    }

    closeModal = (event) => {
        const { closeFunc } = this.props;
        const modalEl = document.querySelector('.modal');

        if (event.target === modalEl) {
            closeFunc();
        }
    }
}

Modal.propTypes = {
    header: PropTypes.string,
    closeButton: PropTypes.bool,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    actions: PropTypes.element,
    closeFunc: PropTypes.func,
    colorHeader: PropTypes.string,
    colorBody: PropTypes.string
};

Modal.defaultProps = {
    header: 'Modal window',
    closeButton: true,
    text: '',
    actions: (<></>),
    closeFunc: undefined,
    colorHeader: '#d44637',
    colorBody: '#e74c3c'
};

export default Modal;