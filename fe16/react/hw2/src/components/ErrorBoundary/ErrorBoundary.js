import React, {PureComponent} from 'react';
import Error from "../../pages/Error/Error";

class ErrorBoundary extends PureComponent {
    state = {
        hasError: false,
        errorMessage: 'Error',
    };

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMessage: error.toString()
        }
    }

    render() {
        const { hasError, errorMessage } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <Error message={errorMessage} />
        }

        return children;
    }
}

export default ErrorBoundary;