import React from 'react';
import './App.module.css';

import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Cards from "./components/Cards/Cards";

import styles from "./App.module.css";
import { fetchData } from "./api";
import Image from "./image.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={Image} alt="COVID-19" />
        <p>
          <b>Global and Country Wise Cases of Corona Virus</b>
        </p>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} country={country} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;