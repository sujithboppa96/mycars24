import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CircularProgress from '@material-ui/core/CircularProgress';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import { Header } from './Header';
import SearchBar from 'material-ui-search-bar';

configure({adapter: new Adapter()});

describe('<Header />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Header handleSearchChange={() => {}}/>);
    });

    it('should render the cars24 image in Header', () => {
        expect(wrapper.find('.imgContainer')).toHaveLength(1);
    });
    it('should render searchBar Component', () => {
        expect(wrapper.find(SearchBar)).toHaveLength(1);
    });
    it('should render ShoppingCartIcon Icon', () => {
        expect(wrapper.find(ShoppingCartIcon)).toHaveLength(1);
    });
    it('should render PersonOutlineIcon Icon', () => {
        expect(wrapper.find(PersonOutlineIcon)).toHaveLength(1);
    });

    it('should call handleSearchChange method', () => {
        const instance = wrapper.instance();
        instance.handleSearchChange();
    });

    it('should call searchByValue method', () => {
        const instance = wrapper.instance();
        instance.searchByValue();
    });

});