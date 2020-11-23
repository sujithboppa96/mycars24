import React from 'react'
import SearchBar from 'material-ui-search-bar'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import CircularProgress from '@material-ui/core/CircularProgress';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import classes from './Header.css'


export class Header extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }


  searchByValue = (value) => {
    let items
    if (this.state.seacrhValue) {
      items = this.props.heroes.filter((x) => {
        console.log(
          x.name.includes(this.state.seacrhValue.toString()),
          'x.name.includes(this.state.seacrhValue.toString())'
        )
        return x.name.includes(this.state.seacrhValue.toString())
      })
    }
    this.setState({ items: items })
  }


  handleSearchChange = (value) => {
      console.log(value, 'searchchange from header')
    this.props.handleSearchChange(value)
  }

  render() {
    console.log(this.state.items, 'this.state.items')

    return (
        <div className="header">
          <div className="imgContainer">
            <img
              className="cars24Img"
              src={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAABuCAMAAAAJSe97AAAAllBMVEX///8Rcrj3lTP4okv927j7x5P82LP2+v36tG78zJvv9vr+7Nr5o06UwN+iyOSPvd4ge72z0ulJk8nK4PC71+v+7t0zhsN5sNfg7fYogL+BtdoZd7vH3u/7w4v6/P5lpNLV5/OpzOZwqtVNlso8jMXn8fj5qlv80KT4nUIxhcJZnc77v4P95Mv6unloptL5sGb94cT/+vS9pH+XAAAJ9klEQVR4nO2c60LiOhCAwaPiVoFyUbBFaKW4iC67vv/LHZJ2JjO59EYLrOfML2jSJl8ymUkmaTud/4h8vrz9c/Vt5OH3j0eG9+ft3FVqXn4RxI9zV6YduQa+u3PXpC35qfXfP5clW1Gn7UMNQWvyR46/9Pev+xOYskpyK6r1o9atX38eJNT26/BH2pftdeFNJ5cjAA+IL1fZ7Z/yxwXyHQfY6fySHdfpSNJfDdarMTkS8EuO4c9UQy9u/Ak5ErBzk94vLU5ztWpQjgWU1vOjI/1Dc7VqUI4FvBf33/0PeD5pH3DpRdFmWb+EMrLcRHPPntQu4Hyweu5KCdfDhb1qKFoNPUPsNfDifVZGMpuaDekGXHplmj0PcL7vMklG5v1DlbxmCb2uKf6ur1N6gU9zPMUlAb0gEdlnG3JtMjvIpDzgIDRquOvpBb2qxPdCQMHYZ7kmz3qGtdYEdsAF3BeSRt+JC4PSgIGtfoneA2uVFjKNcQAeGolkG5lt2H2fFwNG5D4cOV5YCXDkqJ52/ztJYzVzAnZfrfUkjcjUxAa4fKINAg3W71YB3Pi2so0HLGnStBxgF4ZJ792e/kqfYwOMZbZdkKoPKGlSCdCqoEKemSJGTvYcQNCCviM9pKpgA1xDM8hRt2JVKQm4NAY/CjOlU5oyKwkY9grKoF1oA5SaLVphIX48pRdnlQDJCHzeB/0ZsSVsFLJOYCk5gJkuT0gZr8NgpQbkcz5ghFhLeU+qU8+VAJWGvqbNvfBtpUOzpfJkB0xWUnYKIHV2yoWuZBmRGpJRLqDst7WikpYddKkkIPZYwm2UEOpbdxQwtAMOsytKnfv8Xj/zPUptiLu3AE79g+zlT9kmcsiuqgHi8MDhoMwJNZbUXnM/YQJ6GuAY/q4dGVyAevmixT3Qj5KAqJBQO1I6sTJL7sgougmorqT1R43ERsRSg7KAsiPEjwHcWg5wqdWFVY88Ys742MOLAU0tQUBij3MB5SOlUUB1KAdoURa9elKYl2ANfxpAaYiFH5QtPW4eEBUjFeonTgI4BCRh9f2geUDmJQ4m99SAcnYmbIwYzzPEbQ6QeQnuJ04BKC27sMHSM05aAEyyS1Az4iJPASgXo8JnipX5U6cFwMxLhDAvIFGNEwBuRPFi8t/zZTHNA4KXeId1PXn6CQADeHosfsyPBFz2QVTUY5FlWsO0kviJ9gE9kV1O84QCrTtHAtoEvMQ+zn6sagGid+kPMyFTIjdgAE26ycCaB4Q1RwBdSfxEBcBxXhlOQDnwQmHWBJhYYzYPCF5iAIPRrwIIJhgWwBUBh6jLSaY7zQNCFac4d1VBt2JAnD52LfHWQsDeM3SgnK9NWwEEoxChuikDVAyoZgl5OuoClOtTaZ7EdEpOuBsH3Kh+g75UK9ViQBIUN+LZhYBpQEcuQEUzv+8PIisx3rOg3FGAYFp81RvKTxQDkpiMP7c8PhdQGvDUaHc1YYGFowDjLE+iZt3KTxQDLknoNXHaGQegXMpHLQOCl9ipiI0aTcWALPa6Mh+fBxhn5bYLCHGeVxUvUn6iBOCGBjxcBdkB5XCbtA0IlmVIxhP6iTxAsHQsfD41C3ACjkgHKmncisIYiolBjdyAKoADfm+Jvr7rNDRWQHmfsSHbNCBmEiWFWt1NwKVa/qO3jOgWj93Q2ABlKMh0nk0DolqKpocYIIYZFWDoSyF9pfZv2Cad1dDYAOUcyFTppgFjyCPqC0vevQloCPXEbBjaCnOF7hMza9OAMBOR0yTYzkfFcQOGEX0KC+tYDI0FUC6v/ScUuKtpQMYEPYFbM25AXoVegaFxARKBcd80IKwGpLnGCClYChdgovfSPN/QnBEQVhByTYYx7igfMDBN5ZT6e8PQnA/QY1kivTRXD/pD4/gO20XVC7QADsdcwCHG4o+uIPUBORLeYc5bdBkbR55Yl2j+u52jXGUA0YWlbhtGEvgABTiezWarMdHDtf6opVrcH8wU5z8fIK5X03B2otVen1pvSDcZIYoNPY/A55jnAwQvkU3ewZ/BgS4zUBw4EIRMqKFh/OcDhLlLRoQdtHQBqvNJvvm0mACyWeb5AEGrMp1EjY1cgKQLLdNqOmejduZsgAiQzT6xC6ZOQNVLG8sDyVEceqLobIDoJbI400K7wwKoNrwjywOJoaET6bMBopfIpg64nJ2VANRPrUpRHUzix+cDxOlHppIY3N7VBVSx/G6kLp4NEK1mHKUCnv6pNmDfli4BX+5T0SvPRUt9lBev6wISm8AlO/hbA9B6mEoCZqJ1pPbK6k+e+pMk1QF0HGbtwoGuYsB51vWRucIirp4A3tTlKwc4B5EWgB315TItCYhWE3FC4woFrM9XZ4+eHfXlMqgN6BtXCOBLfb46gNohLiqzVgA1vpcqfHUAXeetu+AnGgbM59Osj85XB1A7xEUlaQHw4yi+OoDaIS4qYfOA2su3VfnqAOLS5zUAwerNGwfkCJX47moCokVXKx+MOyzaBazEd/NoBSw88YtTa7J2XdEM7QFW4nvp2AFVB1kAY1pXsrLBJWtwNGDOSaebanwuQCwc155qd0+UjoFsEl7h14oBcfEAsdoeT7cCVuVzARpH/slGV9QhXoIsvnmvWgBxTZwC4HR9b6STLQoOmM93a/K5AJWby/TH4xEj9BJkMh6xHBZANb2TZkjFEdMOU/u99E1EBlidzwUYY+HdVTyJpkMVT5B9inUh5kAhbeyAuM+djjGlE+FsFC36an1CI8MUsBJfNjdwAHrWVxdVfTE5IjehjVjYAdV5iFF+GUPyUAKo8WmrCzufC1DZfF1Cj/UFjbNjt8YOQFSDlEDfJWJFmIC1+JyAE0fhqVVBc8BCuDgwAwcgZkjNytzRhfT9EgX4oxafE9D1CuiTnLmgR2A75WiZVg5AvC2L29iXJPZ3eGvyuQHZjg+KP+H09rclEweg0uzMD9gGgm99C7sunxuw07OU/h6laahr7K1WNIu+A1CNOrhmrroSbZs+BazEx9YebsCDRmkv2YavEHJHc8JiUsrPeQ5AD56IL4uO6BkE4TD03VFZ+YfafLmAneVgh6Y/HAdqR2EAEtHsPbzs0dcQaJ4JXFQcsSojCcxNC632VfnS1LyvkUTTuN8fjBZ5B8ePlWg0GB6KsH7NwwSsxCfjvpf/PZkcvutcvuxzcX8ToBZ9KsX3NwHW4jsAiq+PbU9X6wpyW4Hvjqd+EnD5XTX+tdELkdsG+A73yS/kHbEL157c1ubbqqSfWd5L7MLbBviuvrJPAL59na7iZeW2Ab7fHQjXXOD3N127S/l895Tv6lNcyj5g/PBxc1kCX+bd8stadPTqhSczvnRx8bW9+qbyO+vVx4fivH+j3KFh+fqO36Hesq3R+49v9J10IW8/DL/w+Hn9XeTP5wV6vbbkXwnl39jiMGN7AAAAAElFTkSuQmCC'
              }
              alt={'cars24-img'}
            />
          </div>
          <div className="searchBar">
            <SearchBar
              value={this.state.seacrhValue}
              onChange={(newValue) => this.handleSearchChange(newValue)}
              onRequestSearch={() => this.searchByValue()}
              onCancelSearch={(newValue) => {
                this.handleSearchChange('')
              }}
            />
          </div>
          <div className="Profile">
              <div><PersonOutlineIcon/></div>
              <div>Profile</div>
          </div>
          <div>
              <div><ShoppingCartIcon/></div>
              <div>Bag</div>
          </div>
        </div>
    )
  }
}


export default (Header)
