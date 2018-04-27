import {expect} from 'chai'
import {shallow} from '@vue/test-utils'
import test_data from './test_data.json'
import Separator from '../src/components/details/Separator.vue'

describe('Component.vue', () => {
    it('test something', () => {
        const wrapper = shallow(Separator)
        expect(wrapper.find('.separator').classes()).to.contain('separator')
    })
})
