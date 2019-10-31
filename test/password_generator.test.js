// https://www.chaijs.com/

//https://stackoverflow.com/questions/38444212/testing-js-alert-with-chai-mocha


'use strict';


//var chai = require('chai');
var expect = chai.expect;
//var sinon = require('sinon');
var alert; // We are going to overwrite default alert() function

describe("generate_password", function(){
    it("should generate a password", function(){
        return false;
    });
});

describe("validate_password_length", function(){
    beforeEach(function(){
        alert = sinon.spy;
    });

    it("should accept length of 8", function(){
        var length1 = 8;

        var result = validate_password_length(length1);

        expect(result).to.eql(true);
    });

    it("should accept length of 128", function(){
        var length1 = 128;

        var result = validate_password_length(length1);

        expect(result).to.eql(true);
    });

    it("should not accept length of 7", function(){
        var length1 = 7;

        var result = validate_password_length(length1);

        expect(result).to.eql(false);
    });


    it("should not accept length of NaN", function() {


        var lengthNaN = NaN;

        var result = validate_password_length(lengthNaN);
        console.log(result);
        console.log(alert);
        console.log(alert.calledOnce);
        console.log(alert.args);
        expect(result).to.eql(false);

    });
});