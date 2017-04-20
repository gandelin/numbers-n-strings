var numbers;
var strings;
var strEntries;

function parseInput() {
  event.preventDefault();
  var ele = $('textarea#myTextarea');
  var val = ele.val();
  if ($.isNumeric(val)) {
    putNumber(val);
  }
  else {
    putString(val);
  }
}

// Put the number into the numbers array
function putNumber(num) {
  var aNum = parseInt(num);
  if (!isNaN(aNum)) {
    if(typeof(numbers) == "undefined") {
      numbers = [];
    }
    numbers.push(aNum);
    updateNumberDisplay();    
  } 
}

/*
window.onload = function() {
  $('#resetButton').onclick = function() {
    // reset the numbers array
    numbers = [];
    updateDisplay();
    strEntries = 0;
  }  
}
*/

function updateNumberDisplay() {
  // clear out number
  $('textarea#myTextarea').val("");
  
  var nbrs = "";
  // update Number Array
  for (var i=0;i<numbers.length;i++) {
    nbrs += numbers[i];
    if (i < numbers.length - 1) {
      nbrs += ', '
    }
  }
  
  $('#numbersId').text(nbrs);
  
  // update count
  var val = calcCount();
  $('#cnt').text(val);
  
  // update sum
  val = calcSum();
  $('#sum').text(val);
  
  // update ave
  val = calcAverage();
  $('#ave').text(val);
}

function calcCount() {
  return numbers.length;
}

function calcSum() {
  var mySum = 0.0;
  for (var i=0;i<numbers.length;i++) {
    mySum += numbers[i];
  }
  return mySum;
}

function calcAverage() {
  var result = "";
  if (calcCount() > 0) {
    result = calcSum()/calcCount();
  }
  return result;
}

function putString(str) {
  if (!strings) {
    strings = str.trim();
    strEntries = 1;
  }
  else {
    strings = strings + ' ' + str;
    ++strEntries;
  }
  
  updateStrDisplay();
}

function updateStrDisplay() {
  $('#myStrings').text(strings);
  $('#strEntries').text(strEntries);
  $('#wordcnt').text(getWordCnt(strings));
}

function getWordCnt(sa) {
  var words = sa.replace( /[^\w ]/g, "" ).split( /\s+/ );
  return words.length;
}