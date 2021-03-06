const { check } = require("express-validator");

exports.signupValidation = [
    check("last_name", "Last name is required").not().isEmpty(),
    check("first_name", "First name is required").not().isEmpty(),
    check("email", "Please include a valid email")
        .isEmail()
        .normalizeEmail({ gmail_remove_dots: true }),
    check("password", "Password must be 6 or more characters").isLength({
        min: 6,
    }),
];

exports.loginValidation = [
    check("email", "Please include a valid email")
        .isEmail()
        .normalizeEmail({ gmail_remove_dots: true }),
    check("password", "Password must be 6 or more characters").isLength({
        min: 6,
    }),
];

exports.categoryValidation = [
    check("name", "Bắt buộc nhập á").not().isEmpty(),
    check("productType", "Bắt buộc nhập").not().isEmpty(),
];
