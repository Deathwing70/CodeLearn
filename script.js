function random(min, max) {
    let value = min + Math.random() * (max - min);
    return Math.round(value);
  }

function input() {
    let min = +prompt('Введите минимальное значение', '');
    let max = +prompt('Введите максимальное значение', '');

    if ( min === null || max === null) {
      return console.log('Отмена');
  } else if(min === '' || max === '') {
    return console.log('Введите значение', '');
  } else {
    return min, max;
  }
}
console.log(random(input()))