import React from 'react'
import renderer from 'react-test-renderer'
import AppScreen from './app/components/AppScreen'


import AppText from './app/components/AppText'

test("Consistent Styles", () => {
    json = renderer.create(<AppText>EE </AppText>).toJSON();
    expect(json.props.style[0].fontSize).toBe(20)
    console.log(json)
})
