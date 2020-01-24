/*
*
*
*       Complete the handler logic below
*       
*       
*/
CONFIG = [
  {
    unit: 'gal',
    value: 1,
    spell: 'gallons',
    compare: 'L'
  },
  {
    unit: 'L',
    value: 3.78541,
    spell: 'liters',
    compare: 'gal'
  },
  {
    unit: 'lbs',
    value: 1,
    spell: 'pounds',
    compare: 'kg'
  },
  {
    unit: 'kg',
    value: 0.453592,
    spell: 'kilograms',
    compare: 'lbs'
  },
  {
    unit: 'mi',
    value: 1,
    spell: 'miles',
    compare: 'km'
  },
  {
    unit: 'km',
    value: 1.60934,
    spell: 'kilometers',
    compare: 'mi'
  },
]

function ConvertHandler() {

  this.getNum = function (input) {
    var result = input.match(/^(.*)(gal|L|lbs|kg|mi|km)$/) ? input.match(/^(.*)(gal|L|lbs|kg|mi|km)$/)[1] : undefined;;
    if (result === '') result = 1;
    else if (result) {
      try {
        result = eval(result);
      } catch (error) { console.log('Error on parse number') };
    }
    return result;
  };

  this.getUnit = function (input) {
    var result = input.match(/^(.*)(gal|L|lbs|kg|mi|km)$/) && input.match(/^(.*)(gal|L|lbs|kg|mi|km)$/)[2] || undefined;

    return result;
  };

  this.getReturnUnit = function (initUnit) {
    if (!initUnit) return;
    var data = CONFIG.find(o => o.unit == initUnit);
    var result = data.compare;

    return result;
  };

  this.spellOutUnit = function (unit) {
    if (!unit) return;
    var result = CONFIG.find(o => o.unit == unit).spell;

    return result;
  };

  this.convert = function (initNum, initUnit) {
    if (!initUnit) return;
    const dataInit = CONFIG.find(o => o.unit == initUnit);
    const dataOut = CONFIG.find(o => o.unit == dataInit.compare);
    var result = initNum * dataOut.value / dataInit.value;

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    if (typeof initNum == 'undefined' && typeof initUnit == 'undefined') return 'invalid number and unit';
    else if (typeof initNum == 'undefined') return 'invalid number';
    else if (typeof initUnit == 'undefined') return 'invalid unit';
    var result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`

    return result;
  };

}

module.exports = ConvertHandler;
