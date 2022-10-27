var should = require('chai').should()
var expect = require('chai').expect
var assert = require('chai').assert

describe('Mocha validations',()=>{

    let name = 'Joversky'
    it('Validate through should',()=>{
        name.should.equal('Joversky')
    })

    it('Validate through expect',()=>{
        expect(name).to.equal('Joversky')
    })

    it('Validate through assert',()=>{
       assert.equal(name,'Joversky')
    })



})