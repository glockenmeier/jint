/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-3-163.js
 * @description Object.defineProperty - 'writable' property in 'Attributes' is own accessor property(without a get function) that overrides an inherited accessor property  (8.10.5 step 6.a)
 */


function testcase() {
        var obj = {};

        var proto = {};
        Object.defineProperty(proto, "writable", {
            get: function () {
                return true;
            }
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();
        Object.defineProperty(child, "writable", {
            set: function () { }
        });

        Object.defineProperty(obj, "property", child);

        var beforeWrite = obj.hasOwnProperty("property");

        obj.property = "isWritable";

        var afterWrite = (typeof (obj.property) === "undefined");

        return beforeWrite === true && afterWrite === true;
    }
runTestCase(testcase);
