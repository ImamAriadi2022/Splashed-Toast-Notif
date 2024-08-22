class Toast extends React.Component {
    componentDidMount() {
        this.autoClose = setTimeout(() => {
            this.props.onClose(this.props.id);
        }, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.autoClose);
    }

    render() {
        const { type, title, message, onClose } = this.props;

        return (
            <div className={`toast ${type}`}>
                <div className="icon">{this.getIcon(type)}</div>
                <div className="content">
                    <div className="title">{title}</div>
                    <div className="message">{message}</div>
                </div>
                <div className="close-btn" onClick={() => onClose(this.props.id)}>&times;</div>
            </div>
        );
    }

    getIcon(type) {
        switch (type) {
            case 'help': return '?';
            case 'success': return '✔️';
            case 'warning': return '⚠️';
            case 'error': return '❌';
            default: return '';
        }
    }
}

class App extends React.Component {
    state = {
        toasts: []
    };

    addToast = (type) => {
        const newToast = {
            id: Date.now(),
            type,
            title: this.getTitle(type),
            message: this.getMessage(type)
        };

        this.setState({ toasts: [...this.state.toasts, newToast] });
    };

    removeToast = (id) => {
        this.setState({ toasts: this.state.toasts.filter(toast => toast.id !== id) });
    };

    getTitle(type) {
        switch (type) {
            case 'help': return 'Help!';
            case 'success': return 'Success!';
            case 'warning': return 'Warning!';
            case 'error': return 'Error!';
            default: return '';
        }
    }

    getMessage(type) {
        switch (type) {
            case 'help': return 'Do you have a problem? Just use this contact form.';
            case 'success': return 'Your message has been sent successfully.';
            case 'warning': return 'Be cautious! Something might go wrong.';
            case 'error': return 'An error occurred. Please try again.';
            default: return '';
        }
    }

    render() {
        return (
            <div>
                <div id="button-container">
                    <button className="btn blue" onClick={() => this.addToast('help')}>Show Help</button>
                    <button className="btn green" onClick={() => this.addToast('success')}>Show Success</button>
                    <button className="btn orange" onClick={() => this.addToast('warning')}>Show Warning</button>
                    <button className="btn red" onClick={() => this.addToast('error')}>Show Error</button>
                </div>
                <div id="toast-container">
                    {this.state.toasts.map(toast => (
                        <Toast
                            key={toast.id}
                            id={toast.id}
                            type={toast.type}
                            title={toast.title}
                            message={toast.message}
                            onClose={this.removeToast}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
