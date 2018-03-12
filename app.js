var input = document.getElementById('username');
var result = document.getElementById('result');


function checkUsername() {
	var inputValue = input.value;
	if (inputValue.length < 5) {

		result.textContent = 'Hata! Kullanıcı adınız 5 karakterden az olamaz';
		result.className = 'warning';
		

	} else {

		result.className = 'success'
		result.textContent = 'Ok';

	}

}


function tipUsername() {

	result.textContent = 'Kullanıcı adı en az 5 karakter olmalı';
	result.className = 'info';

}


input.addEventListener('focus', tipUsername, false);
input.addEventListener('blur', checkUsername, false);