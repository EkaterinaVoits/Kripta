const rotorL = 'AJDKSIRUXBLHWTMCQGZNPYFVOE' //2
const rotorM = 'BDFHJLCPRTXVZNYEIWGAKMUSQO' //3
const rotorR = 'VZBRGITYUPSDNHLXAWMJQOFECK'	//5

const N = 26

const config = {
	alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
	letters: [ // хранит объект с расположениемм букв на клавиатуре
		'qwertzuio',
		'asdfghjk',
		'pyxcvbnml',
	].map(row => row.toLocaleUpperCase().split('')),
	rotors: [
		rotorR,
		rotorM,
		rotorL,
	].map(rotor => rotor.split('')),
	rotorsShift: [1, 2, 2], // сдвиг 
	reflector: ['AF', 'BV', 'CP', 'DJ', 'EI', 'GO', 'HY', 'KR', 'LZ', 'MX', 'NW', 'TQ', 'SU'],	//Re C
}