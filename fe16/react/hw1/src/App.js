import React, { PureComponent } from 'react';
import './App.css';
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

class App extends PureComponent {
    state = {
        firstModalOpen: false,
        secondModalOpen: false,
    };

    render() {
        const { firstModalOpen, secondModalOpen} = this.state;

        const firstModalProps = {
            header: 'Do you want to delete this file?',
            text: (
                <>
                    <p>Once you delete this file, it won’t be possible to undo this action.</p>
                    <p>Are you sure you want to delete it?</p>
                </>
            ),
            actions: (<>
                <Button styleClass='buttonModal' backgroundColor='#b3382c' text='Ok' onClick={undefined} />
                <Button styleClass='buttonModal' backgroundColor='#b3382c' text='Cancel' onClick={this.closeFirstModal} />
            </>),
            closeFunc: this.closeFirstModal,
        };

        const secondModalProps = {
            header: 'Second Modal',
            closeButton: false,
            text: (
                <>
                    <p>Hi</p>
                    <p>It's the second modal window</p>
                </>
            ),
            actions: (<>
                <Button styleClass='buttonModal' backgroundColor='#1c6d73' text='Cancel' onClick={this.closeSecondModal} />
            </>),
            closeFunc: this.closeSecondModal,
            colorHeader: '#1c6d73',
            colorBody: '#4fd0d9',
        };

        return (
            <div className="App">
                <Button backgroundColor='#90e2ba' text='Open first modal' onClick={this.showFirstModal} />
                <Button backgroundColor='#94deee' text='Open second modal' onClick={this.showSecondModal} />

                {firstModalOpen && <Modal {...firstModalProps} />}
                {secondModalOpen && <Modal {...secondModalProps} />}
            </div>
        );
    };

    showFirstModal = () => {
      this.setState({ firstModalOpen: true });
    };

    closeFirstModal = () => {
        this.setState({ firstModalOpen: false });
    };

    showSecondModal = () => {
        this.setState({ secondModalOpen: true });
    };

    closeSecondModal = () => {
        this.setState({ secondModalOpen: false });
    };
}

export default App;
