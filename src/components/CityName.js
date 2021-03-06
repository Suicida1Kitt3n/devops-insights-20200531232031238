import React, { useState } from 'react';

function CityName(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
        const cityNameValid = /^[a-zA-Z]+$/;
        const valid = cityNameValid.test(event.target.value);
        if (!valid) {
            setValidationError('* Input must be at least 1 character and be only upper/lower case alpha characters');
            props.clearResponse();
        } else {
            setValidationError('');
            props.onCityChange(event.target.value);
        }
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="usr" 
                        placeholder="US Zip Code (5 digit)"
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event);
                            }
                        }}
                    ></input>   
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default Zip