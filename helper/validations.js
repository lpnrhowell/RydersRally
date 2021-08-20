module.exports.validateRegisterInput = (
	username,
	email,
	password,
	confirmPassword
) => {
	
	const errors = {};
	if (username.trim() === "") {
		errors.username = "Username must have at least 1 character";
	}
	if (email.trim() === "") {
		errors.email = "Email not entered... please enter valid email";
	} else {
		const regEx =
			/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
		if (!email.match(regEx)) {
			errors.email = "Email must be a valid email address";
		}
	}
	if (password === "") {
		errors.password = "Password minimum charactes 5";
	} else if (password !== confirmPassword) {
		errors.confirmPassword = "Passwords must match";
	}

	return {
		errors,
		valid: Object.keys(errors).length < 1,
	};
};

module.exports.validateLoginInput = (username, password) => {
	const errors = {};
	if (username.trim() === "") {
		errors.username = "Username must have at least 1 character";
	}
	if (password.trim() === "") {
		errors.password = "Email not entered... please enter valid email";
	}

	return {
		errors,
		valid: Object.keys(errors).length < 1,
	};
};