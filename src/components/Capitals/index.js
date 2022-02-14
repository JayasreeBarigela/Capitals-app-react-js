import {Component} from 'react'
import Option from '../Option'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {selectedCountry: countryAndCapitalsList[0].country}

  onChangeInput = event => {
    const filteredCountry = countryAndCapitalsList.filter(
      each => each.id === event.target.value,
    )
    this.setState({selectedCountry: filteredCountry[0].country})
  }

  render() {
    const {selectedCountry} = this.state
    return (
      <div>
        <div>
          <h1>Countries and Capitals</h1>
          <select
            id="status"
            className="form-control"
            onChange={this.onChangeInput}
          >
            {countryAndCapitalsList.map(each => (
              <Option
                optionDetails={each}
                key={each.id}
                updateStatusValue={this.updateStatusValue}
              />
            ))}
          </select>
          <label htmlFor="status"> is capital of which country?</label>
          <h1>{selectedCountry}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
