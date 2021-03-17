"use strict";

var CalculateApp1 =
/** @class */
function () {
  function CalculateApp1() {
    this.openApplication();
  }

  CalculateApp1.prototype.openApplication = function () {
    this.getInputs();
    this.watchInputValues();
  };

  CalculateApp1.prototype.getInputs = function () {
    this.userInput1 = document.querySelector('#data1');
    this.userInput2 = document.querySelector('#data2');
    this.userInput3 = document.querySelector('#data3');
    this.userInput4 = document.querySelector('#data4');
    this.sumOutput = document.querySelector('#sum');
    this.averageOutput = document.querySelector('#avg');
    this.minimumOutput = document.querySelector('#min');
    this.maximumOutput = document.querySelector('#max');
  };

  CalculateApp1.prototype.watchInputValues = function () {
    var _this = this;

    this.userInput1.addEventListener('input', function () {
      return _this.computeData();
    });
    this.userInput2.addEventListener('input', function () {
      return _this.computeData();
    });
    this.userInput3.addEventListener('input', function () {
      return _this.computeData();
    });
    this.userInput4.addEventListener('input', function () {
      return _this.computeData();
    });
  };

  CalculateApp1.prototype.computeData = function () {
    var value1 = +this.userInput1.value;
    var value2 = +this.userInput2.value;
    var value3 = +this.userInput3.value;
    var value4 = +this.userInput4.value;
    var sum = value1 + value2 + value3 + value4;
    var avg = sum / 4;
    var min = Math.min(value1, value2, value3, value4);
    var max = Math.max(value1, value2, value3, value4);
    this.showValues(sum, avg, min, max);
  };

  CalculateApp1.prototype.showValues = function (sum, avg, min, max) {
    this.sumOutput.value = sum.toString();
    this.averageOutput.value = avg.toString();
    this.minimumOutput.value = min.toString();
    this.maximumOutput.value = max.toString();
  };

  return CalculateApp1;
}();

var calculateApp1 = new CalculateApp1();