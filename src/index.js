import "babel-polyfill";

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import configureStore from './store/configureStore';
// import routes from './routes';

import App from './scenes/App';
// import Dashboard from './scenes/Dashboard';
// import Kanban from './scenes/Kanban';

console.log(`
@@@@@@   @@@  @@@@@@@    @@@@@@        @@@  @@@  @@@  @@@     
@@@@@@@   @@@  @@@@@@@@  @@@@@@@@       @@@  @@@  @@@  @@@     
!@@       @@!  @@!  @@@  @@!  @@@       @@!  @@!  @@@  @@!     
!@!       !@!  !@!  @!@  !@!  @!@       !@!  !@!  @!@  !@!     
!!@@!!    !!@  @!@!!@!   @!@!@!@!       !!@  @!@  !@!  @!!     
 !!@!!!   !!!  !!@!@!    !!!@!!!!       !!!  !@!  !!!  !!!     
     !:!  !!:  !!: :!!   !!:  !!!       !!:  !!:  !!!  !!:     
    !:!   :!:  :!:  !:!  :!:  !:!  !!:  :!:  :!:  !:!   :!:    
:::: ::    ::  ::   :::  ::   :::  ::: : ::  ::::: ::   :: ::::
:: : :    :     :   : :   :   : :   : :::     : :  :   : :: : :
_______________________________________________________________
SIRAJUL MUNEER C B
`)

const store = configureStore();

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);