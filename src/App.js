import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'
import axios from 'axios'
import { fetchProducts } from '../src/actions/index'
import SearchBar from 'material-ui-search-bar'
import HomePage from '../src/components/HomePage/HomePage'

export class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      hasMore: true,
      seacrhValue: '',
      index: 1
    }
  }
  render() {
   return(
      <HomePage/>
   )
  }
}


export default (App)
