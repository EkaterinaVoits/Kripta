const { rotorsShift, reflector } = config
const outputText = document.getElementById('output')
const inputText = document.getElementById('input')

let cipherText = ''
let messageText = ''

window.addEventListener('keydown', (e) => {
	const { key, repeat } = e // инициализирует событие в виде объекта
	if (repeat) return
	const buttonInput = inputKeys.find(b => b.dataset.letter === key.toLocaleUpperCase())
	if (buttonInput) {
		highlightInputButton(buttonInput) //подсвечивается нажатая буква
		cipherLetter(buttonInput.dataset.letter)	
	}
})

function cipherLetter(letter) {
	messageText += letter
	let c = forwardRotors([...rotorSelects].reverse(), rotors, letter, 3, true) // получает звшифрованную букву после первого блока спарава налево
	c = reflect(c) // ищет пару в рефлекторе
	c = backwardRotors(rotorSelects, [...rotors].reverse(), c, 3, false) // получает звшифрованную букву после второго блока слева направо
	shiftRotors([...rotorSelects].reverse(), [...rotorsShift].reverse()) // переворвчивает порядок роторов
	highlightCipherLetter(c) //подсвечивается полученная буква
	cipherText += c
	outputText.textContent = cipherText // вывод введенной буквы в textarea
	inputText.textContent = messageText // вывод зашифрованной буквы в textarea
}

function forwardRotors(rotorsEl, rotors, letter) { // зашфрование до рефлектора
	const { alphabet } = config
	let cipher = letter
	let chars = [...alphabet]
	rotorsEl.forEach((r, i) => {
		const rotorLetters = rotors[i]
		const startLetter = getRotorActiveLetter(r)
		const rotorStartIndex = rotorLetters.indexOf(startLetter)
		const idx = chars.indexOf(cipher)
		const newIndex = (rotorStartIndex + idx) % N
		cipher = rotorLetters[newIndex]
	})
	return cipher
}

function backwardRotors(rotorsEl, rotors, letter) { // зашфрование после рефлектора
	const { alphabet } = config
	const chars = [...alphabet]
	let cipher = letter
	rotorsEl.forEach((r, i) => {
		let rotorLetters = rotors[i]
		const startLetter = getRotorActiveLetter(r)
		const rotorStartIndex = rotorLetters.indexOf(startLetter)

		if (rotorStartIndex > 0) {
			rotorLetters = [...rotorLetters.slice(rotorStartIndex), ...rotorLetters.slice(0, rotorStartIndex)]
		}
		// rotorLetters = resortArrays(chars, rotorLetters)
		
		const idx = chars.indexOf(cipher)
		cipher = rotorLetters[idx]
	})
	return cipher
}

function shiftRotors(rotorsEl, rotorsShift) { // сдвиг роторов после каждого нажатия
	rotorsEl.forEach((r, i) => {
		shiftRotor(rotorsEl, rotorsShift, i)
	})
}

function reflect(letter) { // поиск пары в рефлекторе
	const pair = reflector.find(pair => pair.includes(letter))
	const index = pair.indexOf(letter)
	return pair[Math.abs(index - 1)]
}

function highlightCipherLetter(letter) {
	const btn = outputKeys.find(b => b.dataset.letter === letter)
	highlightOutputButton(btn)
}