/**
 * Constructor for object Validator with necessary function for validations
 */
function Validator() {

  this.validateEmail = (inputtedInfo) => {
    const regExp = /^([a-zA-Z\d][a-zA-Z\d\.\+-]{1,19}@[\.!\$%&’\*\+\/=\?\^_\w]{1,15}\.[a-z]{1,5})$/g;

    return regExp.test(inputtedInfo);
  }

  this.validatePhone = (inputtedInfo) => {
    const regExp = /^(?=.{0,25}$)[\s\-]*(\+[\s\-]*3[\s\-]*\d)?[\s\-]*\(?[\s\-]*0[\s\-]*\d[\s\-]*\d[\s\-]*\)?[\s\-]*([\s\-]*\d){7}$/g;

    return regExp.test(inputtedInfo);
  }

  this.validatePassword = (inputtedInfo) => {
    const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\_\da-zA-Z]{8,}$/g;

    return regExp.test(inputtedInfo);
  }
}

// Tests

let validator = new Validator();
console.log("emailValidator : " + "\n" +
  validator.validateEmail("fi@secondpart.end") + "(expected true) " + "\n" +
  validator.validateEmail("first-part@.se=cond%p.art.end") + "(expected true) " + "\n" +
  validator.validateEmail("first.part@se=cond%part.r") + "(expected true) " + "\n" +
  validator.validateEmail("f@secondart.end") + "(expected false) " + "\n" +
  validator.validateEmail("first-part@.se=cond@part.end") + "(expected false) " + "\n" +
  validator.validateEmail("-firstpart@.se=cond%.enddeded") + "(expected false) " + "\n" +
  validator.validateEmail("firs_tpart@.se.en") + "(expected false) " + "\n" +
  validator.validateEmail("firstpart@.se.enddeded") + "(expected false)");

console.log("phoneValidator : " + "\n" +
  validator.validatePhone("+38 (099) 567 8901") + "(expected true) " + "\n" +
  validator.validatePhone("+38 099 5 6 7 8 9  01") + "(expected true) " + "\n" +
  validator.validatePhone("(09-9) 567-890-1") + "(expected true) " + "\n" +
  validator.validatePhone("--  (099) 567 890-1") + "(expected true) " + "\n" +
  validator.validatePhone("+38 (099) 567 8901 0") + "(expected false) " + "\n" +
  validator.validatePhone("+38 099 a0000000") + "(expected false) " + "\n" +
  validator.validatePhone("+38 (0989) 567 8901") + "(expected false) " + "\n" +
  validator.validatePhone("+48 (0989) 567 8901") + "(expected false) ");

console.log("passwordValidator : " + "\n" +
  validator.validatePassword("C00l_Pass") + "(expected true) " + "\n" +
  validator.validatePassword("SupperPas1") + "(expected true) " + "\n" +
  validator.validatePassword("Cool_pass") + "(expected false) " + "\n" +
  validator.validatePassword("C00l") + "(expected false) ");

