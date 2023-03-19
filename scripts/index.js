let age = prompt(`Ваш возраст:`)
if (!isNaN(age) && age !== "") {
    const lastDigit = (age) => age % 10;
    const lastNamber = lastDigit(age)
    if (lastNamber === 1) {
        alert(`Вам ${age} год`)
    } else if (lastNamber === 0 || age >= 11 && age <= 14 || lastNamber >= 5 && lastNamber <= 9) {
        alert(`Вам ${age} лет`)
    } else if (lastNamber >= 2 && lastNamber <= 4) {
        alert(`Вам ${age} года`)
}
else {
    alert('Введите ваш возраст!')
}
}