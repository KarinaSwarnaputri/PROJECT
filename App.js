import React, { Component } from 'react';

import {Route} from 'react-router-dom';



import Header from './component/Header'

import Content from './component/Content'

import Footer from './component/Footer'

class App extends Component {



render() {

return (

<div>

<Header />

<div>

<Route path="/" component={'Home'}/>

<Route path="/Content" component={Content}/>

<Route path="/Footer" component={Footer}/>

</div>

</div>

);

}

}



export default App;