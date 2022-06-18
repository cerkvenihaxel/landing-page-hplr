import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
return (
<div>
<Head>
    <title>{props.pageTitle}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
</Head>

<div>
    {props.children}
</div>


</div>

);

}

export default Layout;