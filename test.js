import React from 'react'
import renderer from 'react-test-renderer'
import AppColours from './app/config/AppColours'


import AppCard from './app/components/AppCard'

test("Consistent Styles - appcard", () => {
  //app colours, trivial but ensures that they havent been messed with 
  expect(AppColours.backgroundColour).toBe("#9EC7D5")
  expect(AppColours.buttonColour).toBe("#A099C1")
  expect(AppColours.cardColour).toBe("#ADD5E2")
  json = renderer
      .create(
          <AppCard
              title={"help"}
              subtitle={"please"}

          />
      )
      .toJSON()

  //appcard
  expect(json.props.style.backgroundColor).toBe(AppColours.cardColour)
  expect(json.props.style.width).toBe("95%")
  expect(json.props.style.padding).toBe(10)
  expect(json.props.style.borderRadius).toBe(10)
  //apptext 
  expect(json.children[1].children[0].type).toBe('Text')
  expect(json.children[1].children[1].type).toBe("Text")
    //title
    expect(json.children[1].children[0].children[0]).toBe("help")
    expect(json.children[1].children[0].props.style[0].fontSize).toBe(20)
    expect(json.children[1].children[0].props.style[0].fontFamily).toBe('Roboto')
    expect(json.children[1].children[0].props.style[1].fontWeight).toBe("bold")
    //subtitle
    expect(json.children[1].children[1].children[0]).toBe("please")
    expect(json.children[1].children[1].props.style[0].fontSize).toBe(20)
    expect(json.children[1].children[1].props.style[0].fontFamily).toBe("Roboto")
    expect(json.children[1].children[1].props.style[1].fontWeight).toBe("100")
})
