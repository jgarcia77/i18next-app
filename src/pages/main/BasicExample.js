import React, { Component } from 'react';
import i18next from 'i18next';

export default class BasicExample extends Component {
    render() {
        return (
            <div>
                <h2>Basic Example: {i18next.language}</h2>
                {i18next.t('greet')}!
            </div>
        );
    }
}