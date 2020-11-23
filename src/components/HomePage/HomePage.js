import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/index'
import classes from './HomePage.css'
import Slider from '@material-ui/core/Slider'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import CircularProgress from '@material-ui/core/CircularProgress'
import Checkbox from '@material-ui/core/Checkbox'
import Header from '../Header/Header'

const Loading = () => {
  return (
    <div>
      <CircularProgress />
    </div>
  )
}

const NotFound = () => {
  return <div>Products with given search criteria not found. Please try some other.</div>
}
export class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      hasMore: true,
      seacrhValue: '',
      index: 1,
      priceValue: [0, 4000],
      sortValue: '',
      productFilters: [],
      brandFilters:[]
    }
  }

  componentDidMount() {
    //     axios.get(`http://node-sample-api.herokuapp.com/api/products?page=${this.state.index}`)
    // .then((res) => {
    //   let items1 = res.data.data
    //   this.setState({
    //     items: this.state.items.concat(items1)
    //   });
    // })
    this.props.getProducts(this.state.index, [])
  }

  fetchMoreData = () => {
    if (this.state.index >= 11) {
      this.setState({ index: 1 })
    }
    this.setState({ index: this.state.index + 1 })
    // axios.get(`http://node-sample-api.herokuapp.com/api/products?page=${this.state.index}`)
    // .then((res) => {
    //   let items1 = res.data.data
    //   this.setState({
    //     items: this.state.items.concat(items1)
    //   });
    // })
    this.props.getProducts(this.state.index, this.props.products)
  }

  getFilterc = (name) => {
    let bool = false
    for (let i = 0; i < this.state.productFilters.length; i++) {
      if (name.includes(this.state.productFilters[i])) {
        bool = true
      }
    }
    return bool
  }

  getFilterBrand = (name) => {
    let bool = false
    for (let i = 0; i < this.state.brandFilters.length; i++) {
      if (name.includes(this.state.brandFilters[i])) {
        bool = true
      }
    }
    return bool
  }

  getItems = () => {
    let items = this.props.products ? [...this.props.products] : []

    if (this.state.sortValue) {
      console.log(this.state.sortValue, 'this.state.sortValue')
      if (this.state.sortValue === 1) {
        items = items.sort((x, y) => {
          return x.price - y.price
        })
      }
      if (this.state.sortValue === 2) {
        items = items.sort((x, y) => {
          return y.price - x.price
        })
      }
      if (this.state.sortValue === -1) {
        items = this.props.products
      }
    }
    if (this.state.seacrhValue && this.props.products) {
      items = this.props.products.filter((x) => {
        return x.name.toLowerCase().includes(this.state.seacrhValue.toString().toLowerCase())
      })
    }
    if (this.state.priceValue.length && this.props.products) {
      items = items.filter((x) => {
        return x.price > this.state.priceValue[0] && x.price < this.state.priceValue[1]
      })
    }
    if (this.state.productFilters && this.state.productFilters.length) {
      items = items.filter((x) => {
        return this.getFilterc(x.category)
      })
    }
    if (this.state.brandFilters && this.state.brandFilters.length) {
      items = items.filter((x) => {
        return this.getFilterBrand(x.name)
      })
    }
    console.log(items, 'items')
    return items
  }

  handleChange = (event, newValue) => {
    this.setState({ priceValue: newValue })
  }

  handleSortChange = (event) => {
    this.setState({ sortValue: event.target.value })
  }
  displaySortValue = () => {
    if (this.state.sortValue === 1) {
      return <div>Price: Low To High</div>
    } else if (this.state.sortValue === 2) {
      return <div>Price: High To Low</div>
    } else if (this.state.sortValue === -1) {
      return <div>None</div>
    }
  }

  isProductFilterChecked = (e) => {
    return this.state.productFilters.indexOf(e) !== -1
  }

  isBrandFilterChecked = (e) => {
    return this.state.brandFilters.indexOf(e) !== -1
  }

  handleProductFiltersChange = (e) => {
    let productFilters = this.state.productFilters
    let index = this.state.productFilters.indexOf(e.target.name)
    if (e.target.checked && index === -1) {
      productFilters.push(e.target.name)
      this.setState({ productFilters: productFilters })
    } else if (!e.target.checked) {
      productFilters.splice(index, 1)
      this.setState({ productFilters: productFilters })
    }
  }

  handleBrandFiltersChange = (e) => {
    let brandFilters = this.state.brandFilters
    let index = this.state.brandFilters.indexOf(e.target.name)
    if (e.target.checked && index === -1) {
      brandFilters.push(e.target.name)
      this.setState({ brandFilters: brandFilters })
    } else if (!e.target.checked) {
      brandFilters.splice(index, 1)
      this.setState({ brandFilters: brandFilters })
    }
  }

  handleSearchChange = (value) => {
    console.log('searchchange from homepage')
    this.setState({ seacrhValue: value })
  }

  render() {
    console.log(this.state.items, 'this.state.items')

    const items = this.getItems()
    if (!this.props.products) {
      return (
        <div className="Loading">
          <Loading />
        </div>
      )
    }
    return (
      <div>
        <Header handleSearchChange={this.handleSearchChange} />
        <div className="filteringContaier">
          <div className="filterDetails">
            <b>Filters</b>
          </div>
          <div className="filterDetails">
            <b>Displaying</b> {items.length} Products
          </div>
          <div className="filterDetails">
            <b>Price Range</b> {this.state.priceValue[0]} - {this.state.priceValue[1]}
          </div>
          {this.state.sortValue && (
            <div className="filterDetails">
              <b>Sorted By</b> {this.displaySortValue()}
            </div>
          )}
          <div className="sortDropDown">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Sort By</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={this.state.sortValue}
                onChange={(value) => this.handleSortChange(value)}
                label="Age"
              >
                <MenuItem value={-1}>None</MenuItem>
                <MenuItem value={1}>Price: Low To High</MenuItem>
                <MenuItem value={2}>Price: High To Low</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <hr />
        <div className="mainContainer">
          <div className="container1">
            <div className="filter">
              <div>PRICE</div>
              <div>
                <Slider
                  name={'Price'}
                  min={0}
                  max={4000}
                  value={this.state.priceValue}
                  onChange={this.handleChange}
                  valueLabelDisplay="auto"
                  //   aria-labelledby="range-slider"
                  //   getAriaValueText={this.valuetext}
                />
              </div>
              <div className="priceFooter">
                <div>From</div>
                <div>To</div>
              </div>
              <hr />
            </div>
            <div className="filter">
              <div>CATEGORIES</div>
              <div className="category">
                <div className="CategoryCheckBox">
                  <Checkbox
                    checked={this.isProductFilterChecked('Shoes')}
                    color="primary"
                    onChange={this.handleProductFiltersChange}
                    name="Shoes"
                  />
                </div>
                <div className="categoryHeader">Shoes</div>
              </div>
              <div className="category">
                <div>
                  <Checkbox
                    checked={this.isProductFilterChecked('Electronics')}
                    color="primary"
                    onChange={this.handleProductFiltersChange}
                    name="Electronics"
                  />
                </div>
                <div className="categoryHeader">Electronics</div>
              </div>
              <div className="category">
                <div>
                  <Checkbox
                    checked={this.isProductFilterChecked('Clothes')}
                    color="primary"
                    onChange={this.handleProductFiltersChange}
                    name="Clothes"
                  />
                </div>
                <div className="categoryHeader">Clothes</div>
              </div>
              <div className="category">
                <div className="CategoryCheckBox">
                  <Checkbox
                    checked={this.isProductFilterChecked('Ornaments')}
                    color="primary"
                    onChange={this.handleProductFiltersChange}
                    name="Ornaments"
                  />
                </div>
                <div className="categoryHeader">Ornaments</div>
              </div>
              <div className="category">
                <div className="CategoryCheckBox">
                  <Checkbox
                    checked={this.isProductFilterChecked('Kitchenware')}
                    color="primary"
                    onChange={this.handleProductFiltersChange}
                    name="Kitchenware"
                  />
                </div>
                <div className="categoryHeader">Kitchenware</div>
              </div>
            </div>
            <hr/>
            <div className="filter">
              <div>BRAND</div>
              <div className="category">
                <div className="CategoryCheckBox">
                  <Checkbox
                    checked={this.isBrandFilterChecked('Levis')}
                    color="primary"
                    onChange={this.handleBrandFiltersChange}
                    name="Levis"
                  />
                </div>
                <div className="categoryHeader">Levis</div>
              </div>
              <div className="category">
                <div>
                  <Checkbox
                    checked={this.isBrandFilterChecked('Adidas')}
                    color="primary"
                    onChange={this.handleBrandFiltersChange}
                    name="Adidas"
                  />
                </div>
                <div className="categoryHeader">Adidas</div>
              </div>
              <div className="category">
                <div>
                  <Checkbox
                    checked={this.isBrandFilterChecked('Boat')}
                    color="primary"
                    onChange={this.handleBrandFiltersChange}
                    name="Boat"
                  />
                </div>
                <div className="categoryHeader">Boat</div>
              </div>
              <div className="category">
                <div className="CategoryCheckBox">
                  <Checkbox
                    checked={this.isBrandFilterChecked('Samsung')}
                    color="primary"
                    onChange={this.handleBrandFiltersChange}
                    name="Samsung"
                  />
                </div>
                <div className="categoryHeader">Samsung</div>
              </div>
            </div>
          </div>
          <div className="itemsContainer">
            {(!items || items.length === 0) && (
              <div className="Loading">
                <NotFound />
              </div>
            )}
            {items && items.length > 0 && (
              <InfiniteScroll
                dataLength={this.props.products ? this.props.products.length : 0}
                next={this.fetchMoreData}
                hasMore={this.state.hasMore}
                loader={
                  <h4 className="Loading">
                    <Loading />
                  </h4>
                }
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                <div className="listItems">
                  {items &&
                    items.map((i, index) => (
                      <div className="card" key={index}>
                        <div>
                          <img src={i.img} className="productImage" alt={i.name} />
                        </div>
                        <div>{i.name}</div>
                        <div>{`$${i.price}`}</div>
                      </div>
                    ))}
                </div>
              </InfiniteScroll>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.products
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: (index, products) => fetchProducts(dispatch, index, products)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
