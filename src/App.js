import React from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import BreadcrumbsProject from './components/breadcrumbs/breadcumbs';
import Page from './components/page/page';

import '../src/js/main';

function App() {
    return (
        <div>
            <Header/>
            <BreadcrumbsProject/>
            <Page/>
            <Footer/>
        </div>
    )
}

export default App;