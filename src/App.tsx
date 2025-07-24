import './App.scss';
import Pages from './pages';
import {MessageProvider} from './context/MessageContext';

function App() {
    return (
        <MessageProvider>
            <Pages/>
        </MessageProvider>
    );
}

export default App;
