module.exports = function toReadable (number) {
    let num = '';
    let numb19 = number % 100;
    let numb20 = Math.floor((number % 100) / 10);
    let numb100 = Math.floor(number / 100);
    let red_num = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    };
    let red_num20 = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  };
  if (number === 0) {
    return 'zero';
  } else if (number < 20) {
    return red_num[number];
  } else if (number === numb19 && number % 10 === 0) {
    return red_num20[numb20];
  } else if (number === numb19) {
    return num = ((num + red_num20[numb20]) + ' ' + red_num[number % 10]);
  } else if (number % 100 === 0) {
    return num = (num + red_num[numb100]) + ' ' + 'hundred';
  } else if ((number % 100) < 20) {
    return num = (num + red_num[numb100]) + ' ' + 'hundred' + ' ' + red_num[number % 100];
  } else if (number % 10 === 0) {
    return  num = (num + red_num[numb100]) + ' ' + 'hundred' + ' ' + (num + red_num20[numb20]);
  } else {
    return num = (num + red_num[numb100]) + ' ' + 'hundred' + ' ' + (num + red_num20[numb20]) + ' ' + red_num[number % 10];
}
};
