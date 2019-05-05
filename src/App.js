import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./Components/SearchForm";
import GifList from "./Components/GifList";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      isLoading: true
    };
  }
  componentDidMount() {
   this.getData();
  }  
  useAxios = (query = "baby") =>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        //axios has its own callback data property 
        this.setState({ 
          gifs: response.data.data, 
        })
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }
  //fetch promise method
  getData = () => {
    fetch("http://api.giphy.com/v1/gifs/trending?api_key=URL)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ 
          gifs: responseData.data,
          isLoading: false

        });
      })
      .catch(error => {
        console.log("Error fetching data", error);
      });
  };
  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.useAxios}/>
          </div>
        </div>
        <div className="main-content">
          {this.state.isLoading ? <p>Loading...</p> : <GifList data={this.state.gifs} />}
        </div>
      </div>
    );
  }
}
