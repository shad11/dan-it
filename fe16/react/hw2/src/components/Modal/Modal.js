import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Modal.scss';

class Modal extends PureComponent {
    render() {
        const { header, closeButton, text, actions, closeFunc, headerColorClass, bodyColorClass } = this.props;

        window.addEventListener('click', this.closeModal);

        return (
            <div className='modal'>
                <div className='modal__content'>
                    <div className={'modal__header ' + headerColorClass}>
                        {
                            closeButton &&
                            <Button className='btnModalClose' text="&#x2715;" onClick={closeFunc} />
                        }
                        <div>{header}</div>
                    </div>
                    <div className={'modal__body ' + bodyColorClass}>
                        {text}
                    </div>
                    <div className={'modal__footer ' + bodyColorClass}>
                        <div>{actions}</div>
                    </div>
                </div>
            </div>
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
    headerColorClass: PropTypes.string,
    bodyColorClass: PropTypes.string
};

Modal.defaultProps = {
    header: 'Modal window',
    closeButton: true,
    text: '',
    actions: (<></>),
    closeFunc: undefined,
    headerColorClass: 'modal-header-red',
    bodyColorClass: 'modal-body-red'
};

export default Modal;