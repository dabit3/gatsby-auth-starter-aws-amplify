//https://github.com/wesbos/dump
import React from 'react';

const Error = props => (
    <div>
        {Object.entries(props).map(([err, val]) => (
            <pre err={err}>
            <strong>{err}: </strong>
            {JSON.stringify(val, '', ' ')}
            <br/>
            <a
            href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html">AWS Cognito User Pool documentation.</a>
            </pre>
        ))}
    </div>
);

export default Error;