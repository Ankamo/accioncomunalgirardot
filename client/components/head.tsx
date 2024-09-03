import React from 'react';
import NextHead from 'next/head';

const Head: React.FC<{ title?: string }> = ({ title }) => {
    return (
        <NextHead>
            <title>{title ? title : 'Default Title'}</title>
            <meta name="description" content="Your site description here" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </NextHead>
    );
};

export default Head;
