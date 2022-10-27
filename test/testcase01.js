var should = require('chai').should()
var expect = require('chai').expect
var assert = require('chai').assert
const{isElementPresent} = require('./validations.js')
log = console.log

describe('Mocha validations',()=>{

    let name = 'Joversky'
    it('Validate through should',()=>{
        name.should.equal('Joversky')
        name.should.have.lengthOf(8)
        log(isElementPresent())
        isElementPresent().should.be.true
    })

    it('Validate through expect',()=>{
        expect(name).to.equal('Joversky')
        expect(name).to.have.lengthOf(8)
        expect(isElementPresent()).to.true
    })

    it('Validate through assert',()=>{
       assert.equal(name,'Joversky')
       assert.lengthOf(name, 8)
       assert.equal(isElementPresent(),true)
    })



})