import { ChartWrapper } from './Components/ChartWrapper/ChartWrapper';
import { Header } from './Components/Header/Header';
import './css/styles.css';
import './css/normalize.css';
import { Average } from './Components/Average/Average';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="chart">
                <ChartWrapper />
                <Average />
            </div>
        </div>
    );
}

export default App;
