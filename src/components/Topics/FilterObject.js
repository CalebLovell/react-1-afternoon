import React, { Component } from 'react';

export default class FilterObject extends Component {

    constructor() {
        super();

        this.state = {
            countries: [
                {
                    name: 'Brazil',
                    size: 'big',
                    populationInMillions: 200,
                },
                {
                    name: 'Turkey',
                    populationInMillions: 80,
                    religion: 'Islam',
                },
                {
                    name: 'Nicaragua',
                    size: 'small',
                }
            ],

            userInput: '',
            filteredCountries: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
    }

    filterCountries(prop) {
        var countries = this.state.countries;
        var newList = [];

        for (var i = 0; i < countries.length; i++) {
            if (countries[i].hasOwnProperty(prop)) {
                newList.push(countries[i]);
            }
        }
        this.setState({ filteredCountries: newList });
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original List: { JSON.stringify(this.state.countries, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filterCountries(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered List: { JSON.stringify(this.state.filteredCountries, null, 10) } </span>
            </div>
        )
    }
}