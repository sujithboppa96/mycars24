import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { HomePage } from './HomePage';
import SearchBar from 'material-ui-search-bar';
import Slider from '@material-ui/core/Slider'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import Header from '../Header/Header'

configure({adapter: new Adapter()});

describe('<HomePage />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomePage getProducts={() => {}}/>);
    });

    it('should render Loading with no props', () => {
        expect(wrapper.find('Loading')).toHaveLength(1);
    });
    it('should not render Loading when proper props are feeded', () => {
        wrapper.setProps({products:[{name:'product', img:'img',id:'6',price:560, category:'Electronics'}]})
        expect(wrapper.find('Loading')).toHaveLength(0);
    });

    it('should render the following static components', () => {
        wrapper.setProps({products:[{name:'product', img:'img',id:'6',price:'567',category:'Electronics'}]})
        expect(wrapper.find(InfiniteScroll)).toHaveLength(1);
        expect(wrapper.find(Slider)).toHaveLength(1);
        expect(wrapper.find(MenuItem)).toHaveLength(3);
        expect(wrapper.find(InputLabel)).toHaveLength(1);
        expect(wrapper.find(FormControl)).toHaveLength(1);
        expect(wrapper.find(Select)).toHaveLength(1);
        expect(wrapper.find(Checkbox)).toHaveLength(9);
        expect(wrapper.find(Header)).toHaveLength(1);
        expect(wrapper.find(FormControl)).toHaveLength(1);
    });

    it('should render following classes with proper props', () => {
        wrapper.setProps({products:[{name:'product', img:'img',id:'6',price:'567',category:'Electronics'}]})
        expect(wrapper.find('.filteringContaier')).toHaveLength(1);
        expect(wrapper.find('.sortDropDown')).toHaveLength(1);
        expect(wrapper.find('.mainContainer')).toHaveLength(1);
        expect(wrapper.find('.itemsContainer')).toHaveLength(1);
    });

    it('should render NotFound when search criteria does not match', () => {
        wrapper = shallow(<HomePage getProducts={() => {}} products={[{name:'product', img:'img',id:'6',price:876,category:'Electronics'}]}/>)
        wrapper.setState({seacrhValue: 'h'})
        expect(wrapper.find('NotFound')).toHaveLength(1);
    });
    it('should render NOtFound Msg when price filters does not match', () => {
        wrapper = shallow(<HomePage getProducts={() => {}} products={[{name:'product', img:'img',id:'6',price:876, category:'Electronics'}]}/>)
        wrapper.setState({seacrhValue: 'p'})
        wrapper.setState({priceValue:[50,700]})
        expect(wrapper.find('NotFound')).toHaveLength(1);
    });
    it('should not render Loading when price filters matched', () => {
        wrapper = shallow(<HomePage getProducts={() => {}} products={[{name:'product', img:'img',id:'6',price:876, category:'Electronics'}]}/>)
        wrapper.setState({seacrhValue: 'p'})
        wrapper.setState({priceValue:[50,900]})
        expect(wrapper.find('Loading')).toHaveLength(0);
    });

    it('should call handleChange method', () => {
        const instance = wrapper.instance();
        instance.handleChange('x',[1,20]);
        expect(wrapper.state('priceValue')).toStrictEqual([1,20])
    });

    it('should call handleSearchChange method', () => {
        const instance = wrapper.instance();
        instance.handleSearchChange('p');
        expect(wrapper.state('seacrhValue')).toStrictEqual('p')
    });

    it('should call handleSortChange method', () => {
        const instance = wrapper.instance();
        instance.handleSortChange({target: {
            value: '1'
        }});
        expect(wrapper.state('sortValue')).toStrictEqual('1')
    });

    it('should call getFilterc method', () => {
        const instance = wrapper.instance();
        wrapper.setProps({products:[{name:'product', img:'img',id:'6',price:'567', category:'Electronics'}]})
        wrapper.setState({productFilters: ['Product1']})
        expect(instance.getFilterc('Product1')).toBe(true)
        wrapper.setState({productFilters: ['Product8']})
        expect(instance.getFilterc('Product9')).toBe(false)
    });

    it('should call getItems method', () => {
        const instance = wrapper.instance();
        wrapper.setProps({products:[{name:'product', img:'img',id:'6',price:'567',category:'Electronics'}]})
        expect(instance.getItems()).toHaveLength(1)
        wrapper.setProps({products:[{name:'product', img:'img',id:'6',price:'567',category:'Electronics'}, {name:'product', img:'img',id:'6',price:'567',category:'Electronics'}]})
        expect(instance.getItems()).toHaveLength(2)
    });

    it('should call displaySortValue method', () => {
        const instance = wrapper.instance();
        wrapper.setProps({products:[{name:'product', img:'img',id:'6',price:'567',category:'Electronics'}]})
        expect(wrapper.find('.filterDetails')).toHaveLength(3)
        wrapper.setState({sortValue: 'sujith'})
        instance.displaySortValue()
        expect(wrapper.find('.filterDetails')).toHaveLength(4)
    });

    it('should call isProductFilterChecked method', () => {
        const instance = wrapper.instance();
        wrapper.setProps({products:[{name:'product', img:'img',id:'6',price:'567',category:'Electronics'}]})
        wrapper.setState({productFilters: ['Product 1','Product2']})
        expect(instance.isProductFilterChecked('Product 1')).toBe(true)
        expect(instance.isProductFilterChecked('Product 8')).toBe(false)
    });


    it('should call handleProductFiltersChange method', () => {
        const instance = wrapper.instance();
        wrapper.setProps({products:[{name:'product 3', img:'img',id:'6',price:'567',category:'Electronics'}]})
        wrapper.setState({productFilters: ['Product 1','Product2']})
        instance.handleProductFiltersChange({target: {name: 'Product 3', checked: true}})
        expect(wrapper.state('productFilters')).toStrictEqual(['Product 1','Product2', 'Product 3'])
    });

});