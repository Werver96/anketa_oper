var surName=prompt('Введите вашу фамилию:','Колесник');
var name=prompt('Введите ваше имя:','Виталий');
var patronymic=prompt('Введите ваше отчество:','Геннадьевич');
var FullName=surName+' '+name+' '+patronymic;
var ageYearStr=prompt('Введите ваш возраст:','26');
var ageYear=Number(ageYearStr);
var ageDay=ageYear*365;
var ageWill=ageYear+5;
var male=confirm('Вы мужчина? \nНажмите ОК(Да) если мужчина \nНажмите Отмена(Нет) если женщина');
var pensionMan=60;
var pensionWoman=54;

var pension=male?(ageYear>=pensionMan?'да':'нет'):(ageYear>=pensionWoman?'да':'нет');

/*if (male) {
	if (ageYear>=pensionMan) {
		pension='да';
	}
	else{
		pension='нет'
	}
}
else{
	if (ageYear>=pensionWoman) {
		pension='да';
	}
	else{
		pension='нет';
	}
}*/
var male=male?'мужской':'женский';
/*
if (male) {male='мужской'}
else male='женский';*/
alert('ваше ФИО: ' + FullName + '\nваш возраст в годах: ' + ageYear + ' год/лет' + '\nваш возраст в днях: ' 
+ ageDay + ' дня/дней' + '\nчерез 5 лет вам будет: ' + ageWill + ' год/лет' + '\nваш пол : ' + male 
+ '\nвы на пенсии: ' + pension );