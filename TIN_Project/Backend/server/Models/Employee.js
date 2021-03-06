class Employee{
    constructor(employee_name,employee_surname,employee_birthday,employee_position,employee_seniority) {
        const dateRegex =new RegExp("^(19|20)\\d\\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$");
        if (typeof employee_name !== 'string' && !(employee_name instanceof String))
                throw "employee_name is not a string";
        else if(typeof employee_surname !== 'string' && !(employee_surname instanceof String))
                throw "employee_surname is not a string";
        else if(typeof employee_position !== 'string' && !(employee_position instanceof String))
            throw "employee_position is not a string";
        else if(typeof employee_seniority !== 'number' && !(employee_seniority instanceof Number))
            throw "employee_seniority is not a number";
        else if((typeof employee_surname !== 'string' && !(employee_surname instanceof String))||
        !dateRegex.test(employee_birthday))
                throw "employee_birthday is not in correct form starting 'YYYY-MM-DD' where year > 1899";

        this.employee_name = employee_name;
        this.employee_surname = employee_surname;
        this.employee_birthday = employee_birthday;
        this.employee_position = employee_position;
        this.employee_seniority = employee_seniority;

    }
}
module.exports = Employee;



