import './sass/main.sass';
import './components/header.css'
import Header from './components/header';
import Characters from './components/characters';

function App(){
    return (
        <div className="app">
            <Header
                title= "Rick and Morty API"
            />
            <Characters/>
        </div>
    );
}

export default App;