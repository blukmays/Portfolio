import React {Component} from 'react';
import { BrowserRouter , Route,} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Page from './Page';



class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="Routes">

                    <Route path="/" exact strict component={Home}/>

                    <Route path="/about" exact strict component={About}/>

                    <Route path="/page" exact strict component={Page}/>


                </div>

            </BrowserRouter>
        )
    }
}

render(<Routes/>, window.document.getElementById('routes'));
