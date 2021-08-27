var flagMessage=0;
var gamerMoov = 0;
var mooveMap = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var specMap = [];
var gamerScore=[];
var compScore=[];
var gamerScoreUnsorted=[];
var flagWin=1;
var flagDiffucult=1;

// показ информации об уровнях сложности

infButton.addEventListener('click', function() {
	if (flagMessage==0) {
		document.getElementById('alertMess').innerHTML="Простой уровень - случайные ходы.<br> Сложный уровень- компьютер думает.";
		document.getElementById('infButton').innerHTML="Убрать информацию"; 
		flagMessage = 1;
	}
	else if (flagMessage==1) {
		document.getElementById('alertMess').innerHTML="";
		document.getElementById('infButton').innerHTML="Информация об уровнях"; 
		flagMessage=0;
	}
});

// выбор уровня сложности по радиокнопке

let radios = document.querySelectorAll('input[type="radio"]');

buttonStart.addEventListener('click', function() {
	for (let radio of radios) {
		if (radio.checked) {
			if (radio.value=='simple') {
				document.getElementById('alertMess').innerHTML="Вероятность верного хода компьютера от 16%. Кликните по полю для хода";
				a=document.getElementById('Title').innerHTML="Игра!";
				hideBlock.classList.add('hidden');	
				flagWin=0;	
				flagDiffucult=0
				for (let i in Moove) {
					Moove[i].innerHTML = '<img src="img/imgS.jpg" width=100% height=100%</img>';
				}
			}
			else if (radio.value=='difficult') {
				document.getElementById('alertMess').innerHTML="Сложный уровень, соберитесь <br> Кликните по полю для хода";
				a=document.getElementById('Title').innerHTML="Игра!";
				hideBlock.classList.add('hidden');
				flagWin=0;		
				flagDiffucult=1
				for (let i in Moove) {
					Moove[i].innerHTML = '<img src="img/imgS.jpg" width=100% height=100%</img>';
				}
			}
		}
	}
});

// Запускаем игру

let Moove = table.querySelectorAll('#table td');

for (let i in Moove) {
	Moove[i].addEventListener('click', function() {
		for (let point of mooveMap) {
			if (point==i && flagWin==0) {
				this.innerHTML = '<img src="img/imgX.jpg" width=100% height=100%</img>';
				gamerMoov = point;	
				gamerScore.push(i);	
				gamerScoreUnsorted.push(i);	
				w = GetMoove();
				Moove[w].innerHTML = '<img src="img/img0.jpg" width=100% height=100%</img>';
				compScore.push(w);
				calcScore();			
			}
		}
	});		
}

//ходы компьютера в зависимости от выбранной сложности

function GetMoove() {
	if (gamerScore.length<5) {
		mooveMap = mooveMap.filter((n) => {return n != gamerMoov});
		if (flagDiffucult==0) {
			lightGame();
		}
		else if (flagDiffucult==1) {
			smartGame();
		}
	}
return(b);

}

// легкий уровень - случайный ход. Из карты ходов удаляется ход игрока, находится ход и он тоже удаляется из карты ходов
		
function lightGame() {
	a = Math.floor(Math.random()*(mooveMap.length));
	b = mooveMap[a];
	mooveMap = mooveMap.filter((n) => {return n != b});	
}

// сложный уровень

function smartGame() {
	z1 = gamerScore.sort();
	z=z1.join('');
	zoz=gamerScoreUnsorted.join('');

// Первый ход компьютера зафиксирован:

		if (z=='4' ) {
			specMap = [0, 0];
			a = Math.floor(Math.random()*(specMap.length));
			b = specMap[a];
				mooveMap = mooveMap.filter((n) => {return n != b});	
		}

		else if (z=='0' || z=='1' || z=='2' || z=='3' ||z=='5' || z=='6' || z=='7' || z=='8') {
			specMap = [4, 4];
			a = Math.floor(Math.random()*(specMap.length));
			b = specMap[a];
			mooveMap = mooveMap.filter((n) => {return n != b});	
		}
	
		// ходы компьютера, которые не зависят от порядка выбора клеток игроком

		else if (z=='12' || z=='13'|| z=='16' || z=='17' || z=='23' || z=='35'|| z=='36') {
			specMap = [0, 0];
			a = Math.floor(Math.random()*(specMap.length));
			b = specMap[a];
			mooveMap = mooveMap.filter((n) => {return n != b});	
		}

		else if (z=='02' || z=='08' || z=='26' || z=='47') {
			specMap = [1, 1];
			a = Math.floor(Math.random()*(specMap.length));
			b = specMap[a];
			mooveMap = mooveMap.filter((n) => {return n != b});	
		}
	
		else if (z=='01' || z=='46' || z=='58' || z=='05' || z=='15' || z=='18' || z=='037' || z=='378'||  z=='0378') {
			specMap = [2, 2];
			a = Math.floor(Math.random()*(specMap.length));
			b = specMap[a];
			mooveMap = mooveMap.filter((n) => {return n != b});	
			}

		else if (z=='06' || z=='45'  ) {
			specMap = [3, 3];
			a = Math.floor(Math.random()*(specMap.length));
			b = specMap[a];
			mooveMap = mooveMap.filter((n) => {return n != b});	
			}

		else if (z=='34' || z=='28' || z=='0167'||z=='3728') {
			specMap = [5, 5];
			a = Math.floor(Math.random()*(specMap.length));
			b = specMap[a];
			mooveMap = mooveMap.filter((n) => {return n != b});	
			}

		else if (z=='03' || z=='24' || z=='78' || z=='07' || z=='37' || z=='38' || z=='015' || z=='018') {
			specMap = [6, 6];
			a = Math.floor(Math.random()*(specMap.length));
			b = specMap[a];
			mooveMap = mooveMap.filter((n) => {return n != b});	
			}
		
		else if (z=='14' || z=='68' || z=='0368') {
			specMap = [7, 7];
			a = Math.floor(Math.random()*(specMap.length));
			b = specMap[a];
			mooveMap = mooveMap.filter((n) => {return n != b});	
			}

		else if (z=='04' || z=='67' || z=='25' || z=='27' || z=='57' || z=='56' || z=='123') {
			specMap = [8, 8];
			a = Math.floor(Math.random()*(specMap.length));
			b = specMap[a];
			mooveMap = mooveMap.filter((n) => {return n != b});	
		}

		//Ходы, которые зависят от последовательности выбора клеток:

        //	разумные ходы игрока

		var getZeroGood = ['21','156','1863','516','8163','8321'];
		var getOneGood = ['032', '072', '250', '270', '283', '302','382', '437', '702', '720', '823', '0652','3586','3720', '4386', '4368', '7320', '7823', '5702','6502','7502','7605','8723', ];
		var getTwoGood = ['358', '416','436', '456', '538', '578', '605', '0381', '1685', '4156', '5601', '6381','6705', '6815', '8615'];
		var getThreeGood = ['016', '027', '056', '106', '207', '415', '506', '560', '650', '670', '760', '861', '0267', '1865', '2507', '2670', '2706', '4165','4725', '5207', '5861', '6270', '7206', '8561', '8721'];
		var getFiveGood = ['128', '218', '238', '328', '382', '413', '423', '483', '832', '782', '872', '681', '0168', '0237', '0872', '1238', '1278','1382', '1860', '1782', '3182', '3681', '3728', '3827', '4128', '4183', '4613', '4723', '6182', '6702', '7028', '7182', '7328', '8610', '8072', '8612'];
		var getSixGood = ['48' ,'013','017','087','138', '178', '187', '318','412','418','432', '472' ,'570' ,'718','750' ,'807' ,'0273' ,'1283' ,'2183' ,'2378' ,'2387' ,'2837' ,'4132', '4312' ,'4372' ,'8237' ];
		var getSevenGood = ['168', '186', '368', '461', '486', '586', '618', '816', '856', '0156', '0165', '1065', '1568', '1865', '2368', '3568','4321', '4231', '4561', '4638', '4831', '5068', '5168', '5386', '6502'];
		var getEightGood = ['065', '165', '267', '372', '627', '732', '0257', '0275', '0327', '0567', '0725', '2075', '3027', '5067', '6057'];

		// все остальные ходы, включая случайные

		var getZeroWeak = ['251','253','256','257','271','273','275','276','521','523','526','527','561','562','563','567','571','572', '573','576','651','653','656','657','671','672','673','675','721','723','725','726','751','752','753','756', '761','762','763','765','2673','2675','3721','3725','6273','6275','6812','6813','7321','7325'];
		var getOneWeak = ['463', '465', '467', '468','680', '682' , '683' , '685', '860', '862', '863', '865', '4237','4238','4327','4328', '4567', '4568' ,'4832', '4837','5602', '5607','5860', '5863','6382', '6385', '8320','8327','8560', '8563'];
		var getTwoWeak = ['031', '035', '038', '071', '075', '078', '301', '305', '307', '308', '371', '375', '380', '381', '385', '387', '473', '475', '476', '478', '701', '703', '705', '708', '731', '735', '780','781','783', '785', '830', '831', '835', '837', '870', '871', '873', '875', '0651', '0657','0873', '0875', '1385', '1387', '1783', '1785', '3185','3187', '4136','4138', '4316','4318','4376', '4378', '5701', '5703', '6183', '6185','6501', '6507', '7183','7185',  '7501', '7503', '8073', '8075'];
		var getThreeWeak = ['280', '281', '286', '287', '421', '425', '427', '428', '481', '482', '485', '487',  '820', '821', '826', '827','1286', '1287', '2186', '2187','4182', '4185', '4615', '4618', '6810', '6812', '7820', '7821',  '8160', '8165'];
		var getFiveWeak = ['061', '062', '067', '068', '601', '602', '607', '608', '0276', '0278', '0723', '0728', '1067', '1068','1682', '1683', '2076', '2078', '7601', '7602', '8610', '8612'];
		var getSixWeak = ['053' ,'057' ,'058' ,'103', '153' ,'157','158','451' ,'452' ,'457' ,'458' ,'503' ,'507' ,'508' ,'513' ,'517' ,'518' ,'580' ,'581' ,'583' ,'587' ,'810' ,'813' ,'815' ,'817' ,'850' ,'851' ,'853' ,'857' ,'2703' ,'2705' ,'3281' ,'3287' ,'3581' ,'3587' ,'4152' ,'4158' ,'4381' ,'4382' ,'5381' ,'5387' ,'7203' ,'7205'];
		var getSevenWeak = ['023', '025', '026', '028', '082', '083', '085', '086', '203', '205', '206', '208', '260', '263', '265', '268', '431', '438', '620', '623','625', '628', '638', '802', '803', '805', '806', '0325', '0328', '0561', '0568', '2381', '2386', '2503', '2506', '2830', '2836', '3025', '3028', '3820', '3825', '5203', '5206', '6051', '6058', '8230', '8236'];
		var getEightWeak = ['125', '126', '127', '135', '136', '137', '172', '173', '175', '176', '213', '215', '216', '217', '235', '236', '237', '315', '316', '317', '325', '326', '327', '351', '352', '356', '357', '361', '362', '365', '367', '531', '532', '536', '537', '612', '613', '615', '617', '631', '632', '635', '637', '712', '713', '715', '716', , '1563', '1567', '4123', '4125', '4361', '4367', '5163', '5167', '7023', '7025', '7321', '7325'];

		for (let elem01 of getZeroGood) {
			if (zoz == elem01) {
				b = '0';
				mooveMap = mooveMap.filter((n) => {return n != b});	
			}
		}

		for (let elem02 of getZeroWeak) {
			if (zoz == elem02) {
				b = '0';
				mooveMap = mooveMap.filter((n) => {return n != b});	
			}
		}

		for (let elem11 of getOneGood) {
			if (zoz == elem11) {
				b = '1';
				mooveMap = mooveMap.filter((n) => {return n != b});	
			}
		}

		for (let elem12 of getOneWeak) {
			if (zoz == elem12) {
				b = '1';
				mooveMap = mooveMap.filter((n) => {return n != b});	
			}
		}

		for (let elem21 of getTwoGood) {
			if (zoz == elem21) {
				b = '2';
				mooveMap = mooveMap.filter((n) => {return n != b});	
			}
		}

		for (let elem22 of getTwoWeak) {
			if (zoz == elem22) {
				b = '2';
				mooveMap = mooveMap.filter((n) => {return n != b});	
			}
		}
		
		for (let elem31 of getThreeGood) {
			if (zoz == elem31) {
				b = '3';
				mooveMap = mooveMap.filter((n) => {return n != b});	
			}
		}
		
		for (let elem32 of getThreeWeak) {
			if (zoz == elem32) {
				b = '3';
				mooveMap = mooveMap.filter((n) => {return n != b});	
			}
		}
		
		for (let elem51 of getFiveGood) {
			if (zoz == elem51) {
				b = '5';
				mooveMap = mooveMap.filter((n) => {return n != b});	
			}
		}
		
		for (let elem52 of getFiveWeak) {
			if (zoz == elem52) {
				b = '5';
				mooveMap = mooveMap.filter((n) => {return n != b});	
			}
		}
		
		for (let elem61 of getSixGood) {
			if (zoz == elem61) {
				b = '6';
				mooveMap = mooveMap.filter((n) => {return n != b}); 
			}
		}
		
		for (let elem62 of getSixWeak) {
			if (zoz == elem62) {
				b = '6';
				mooveMap = mooveMap.filter((n) => {return n != b}); 
			}
		}
		
		for (let elem71 of getSevenGood) {
			if (zoz == elem71) {
				b = '7';
				mooveMap = mooveMap.filter((n) => {return n != b}); 
			}
		}
		
		for (let elem72 of getSevenWeak) {
			if (zoz == elem72) {
				b = '7';
				mooveMap = mooveMap.filter((n) => {return n != b}); 
			}
		}
		
		for (let elem81 of getEightGood) {
			if (zoz == elem81) {
				b = '8';
				mooveMap = mooveMap.filter((n) => {return n != b}); 
			}
		}
		
		for (let elem82 of getEightWeak) {
			if (zoz == elem82) {
				b = '8';
				mooveMap = mooveMap.filter((n) => {return n != b}); 
			}
		}

}

//подсчет ситуации выигрыша

function calcScore() {
	z1 = gamerScore.sort();
	z=z1.join('');

    q1 = compScore.sort();
	q=q1.join('');
	
    for (i=0; i<z.length; i++) {
		if (((z.indexOf('0')>-1) && (z.indexOf('1')>-1) && (z.indexOf('2')>-1))|| ((z.indexOf('0')>-1) && (z.indexOf('3')>-1) && (z.indexOf('6')>-1)) || ((z.indexOf('6')>-1) && (z.indexOf('7')>-1) && (z.indexOf('8')>-1)) || ((z.indexOf('2')>-1) && (z.indexOf('5')>-1) && (z.indexOf('8')>-1)) || ((z.indexOf('0')>-1) && (z.indexOf('4')>-1) && (z.indexOf('8')>-1)) || ((z.indexOf('2')>-1) && (z.indexOf('4')>-1) && (z.indexOf('6')>-1)) || ((z.indexOf('3')>-1) && (z.indexOf('4')>-1) && (z.indexOf('5')>-1)) || ((z.indexOf('1')>-1) && (z.indexOf('4')>-1) && (z.indexOf('7')>-1))) { 
	       	a=document.getElementById('Title').innerHTML="ВЫ ВЫИГРАЛИ!";
			document.getElementById('alertMess').innerHTML="Поздравляем!";
			hideBlock.classList.remove('hidden');
			gamerMoov = 0;
			mooveMap = [0, 1, 2, 3, 4, 5, 6, 7, 8];
			gamerScore=[];
			compScore=[];
			gamerScoreUnsorted=[];
			flagWin=3;
			
    	}
		else if (((q.indexOf('0')>-1) && (q.indexOf('1')>-1) && (q.indexOf('2')>-1))|| ((q.indexOf('0')>-1) && (q.indexOf('3')>-1) && (q.indexOf('6')>-1)) || ((q.indexOf('6')>-1) && (q.indexOf('7')>-1) && (q.indexOf('8')>-1)) || ((q.indexOf('2')>-1) && (q.indexOf('5')>-1) && (q.indexOf('8')>-1)) || ((q.indexOf('0')>-1) && (q.indexOf('4')>-1) && (q.indexOf('8')>-1)) || ((q.indexOf('2')>-1) && (q.indexOf('4')>-1) && (q.indexOf('6')>-1)) || ((q.indexOf('3')>-1) && (q.indexOf('4')>-1) && (q.indexOf('5')>-1)) || ((q.indexOf('1')>-1) && (q.indexOf('4')>-1) && (q.indexOf('7')>-1))) { 
            a=document.getElementById('Title').innerHTML="Вы проиграли!";
			hideBlock.classList.remove('hidden');
			gamerMoov = 0;
			mooveMap = [0, 1, 2, 3, 4, 5, 6, 7, 8];
			gamerScore=[];
			compScore=[];
			gamerScoreUnsorted=[];
			flagWin=3;
			for (let radio of radios) {
					if (radio.checked) {
						if (radio.value=='simple') {
							document.getElementById('alertMess').innerHTML="Нельзя недооценивать случайность";
						}
						else if (radio.value=='difficult') {
							document.getElementById('alertMess').innerHTML="Некоторые компьютеры так умны!";
						}
					}
			}
   		}
    	else 
    	a=document.getElementById('Title').innerHTML="Следующий ход!";
			if (z1.length>4 && flagWin<1) {
				a=document.getElementById('Title').innerHTML="НИЧЬЯ!";
				document.getElementById('alertMess').innerHTML="Возможно, нужно постараться";
				hideBlock.classList.remove('hidden');
				gamerMoov = 0;
				mooveMap = [0, 1, 2, 3, 4, 5, 6, 7, 8];
				gamerScore=[];
				compScore=[];
				gamerScoreUnsorted=[];
				flagWin=2;
			}
		return(a);
	}
}   



