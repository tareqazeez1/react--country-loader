import React from 'react';

const Country = (props) => {
    const { name, population, region, flag} = props.country;
    const flagStyle = {height: "50px"}
    const countryStyle = {border: '1px solid coral', margin: '10px', padding: '10px'}
    const btnStyle = {backgroundColor: 'cyan', margin: '5px', padding: '5px', borderRadius: '5px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>This is {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population}</p>
            <small>Region: {region}</small> <br/>
            <button onClick={() => handleAddCountry(props.country)} style={btnStyle}><b>Add</b> Country</button>

        </div>
    );
};

export default Country;