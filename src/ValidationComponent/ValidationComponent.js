import React from 'react';

const validationComponent = (props) => {

    const textToShort = props.stringLength < 5 && props.stringLength > 0;
    const textTooLong = props.stringLength >15;
    let validationWarning;
    if (textToShort) {
        validationWarning = (
            <div>
                Text too short!
            </div>
        );
    } else if (textTooLong) {
        validationWarning = (
            <div>
                Text too long!
            </div>
        );
    } else {
        validationWarning = null;
    }
    return validationWarning;
};

export default validationComponent;