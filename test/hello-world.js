/* global browser, describe, it */
const expect = require('chai').expect
const myApp = browser

describe('Hello World App', () => {
  it('has a page', () => {
    let currentWindowTitle = myApp.getTitle()

    expect(currentWindowTitle).to.equal('Home Page')
  })
})
