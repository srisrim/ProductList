"use strict";
/**
 * User Registration Class
 *
 * @export
 * @class UserRegistration
 */
var UserRegistration = (function () {
    /**
     * Creates an instance of UserRegistration.
     *
     * @param {string} name
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} age
     * @param {string} dateOfBirth
     * @param {string} aadhar
     * @param {string} gender
     *
     * @memberOf UserRegistration
     */
    function UserRegistration(name, firstName, lastName, age, dateOfBirth, aadhar, gender) {
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.aadhar = aadhar;
        this.gender = gender;
    }
    return UserRegistration;
}());
exports.UserRegistration = UserRegistration;
//# sourceMappingURL=app.component.model.js.map