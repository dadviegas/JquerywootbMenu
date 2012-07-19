
(function (jQuery) {
    var log = function (message, tw) {
        // if not exists do nothing. some versions of ie, ff, opera, safari, ... does not know what is console it's not implemented in them.
        if (typeof console == 'object') {
            if (tw === $.Write.clear || message === $.Write.clear)
                console.clear();
            else
            if (tw === $.Write.log)
                console.log(message);
            else
                if (tw === $.Write.info)
                    console.info(message);
                else
                    if (tw === $.Write.warn)
                        console.warn(message);
                    else
                        if (tw === $.Write.error)
                            console.error(message);
                        else {
                            if ($.browser.mozilla) {
                                if (tw === $.Write.time)
                                    console.time(message);
                                if (tw === $.Write.timeEnd)
                                    console.timeEnd(message);
                            }
                            else { console.log("Time ignored"); }
                        }
        }
    }
    // enum to specify the type of log to write..
    jQuery.Write = { error: "error", info: "info", warn: "warn", log: "log", time: "Time", timeEnd: "TimeEnd", clear:"clear" };
    jQuery.log = log;

    var writeConsole = function (_this, msg, type) {
        var message = _this.attr('id');
        if (msg != undefined)
            message += ' => ' + msg;
        $.log(message, type);
    }

    jQuery.fn.log = function (msg, type) { writeConsole(this, msg, $.Write.log); return this; };
    jQuery.fn.info = function (msg, type) { writeConsole(this, msg, $.Write.info); return this; };
    jQuery.fn.error = function (msg, type) { writeConsole(this, msg, $.Write.error); return this; };
    jQuery.fn.warn = function (msg, type) { writeConsole(this, msg, $.Write.warn); return this; };

    function handleError(e)  
    {
         $.log(e, $.Write.error);
         return true;  
    }
   // window.onerror = handleError; 

})(jQuery);






//$.log("Plugin", $.Write.time);
//$.log("Plugin", $.Write.error);
//$.log("Plugin", $.Write.info);
//$.log("Plugin", $.Write.warn);
//$.log("Plugin", $.Write.log);
//$.log("Plugin", $.Write.timeEnd);

//console.time("console");
//console.warn("console");
//console.info("console");
//console.log("console");
//console.error("console");
//console.timeEnd("console");


//function Person(first, last) {
//    this.first = first;
//    this.last = last;
//}

//var person = new Person("John", "Dough");
//Person.prototype.toString = function () {
//    return this.first + " " + this.last;
//}

//alert(person); // displays "John Dough"

//KevLinDev.extend = function (subClass, baseClass) {
//    function inheritance() { }
//    inheritance.prototype = baseClass.prototype;
//    subClass.prototype = new inheritance();
//    subClass.prototype.constructor = subClass;
//    subClass.baseConstructor = baseClass;
//    subClass.superClass = baseClass.prototype;
//}

//function Employee(first, last, id) {
//    // initialize properties here
//}

//KevLinDev.extend(Employee, Person);


//function Employee(first, last, id) {
//    Employee.baseConstructor.call(this, first, last);
//    this.id = id;
//}

//function Manager(first, last, id, department) {
//    Manager.baseConstructor.call(this, first, last, id);
//    this.department = department;
//}

//KevLinDev.extend(Manager, Employee); 



// Person = function (id, name, age) {
    // this.id = id;
    // this.name = name;
    // this.age = age;
    // $.log("A new person has been accepted", $.Write.info);
 
// }

// Person.prototype = {
    // wake_up: function () {
        // alert('I am awake');
    // },
    // get_age: function () {
        // return this.age;
    // }
    // ,
    // ToString: function () {
        // return this.id + ' ' + this.age + ' ' + this.name;
    // }
// }


// $.log("Plugin", $.Write.time);



// var pers = new Person(1, "David", 30);

// console.log(pers.ToString());

// var pers1 = pers;
// pers.id = 2;
// pers.get_age();

// console.log(pers.ToString());

// console.log(pers1===pers);

// console.log(pers instanceof Person);

// $.log("Plugin", $.Write.timeEnd);

// //$.log($.Write.clear);

// Inheritance_Class = {};
// Inheritance_Class.extend = function (subClass, baseClass) {
    // function inheritance() { }
    // inheritance.prototype = baseClass.prototype;
    // subClass.prototype = new inheritance();
    // subClass.prototype.constructor = subClass;
    // subClass.baseConstructor = baseClass;
    // subClass.superClass = baseClass.prototype;
// }


// Manager = function (id, name, age, salary) {
    // Manager.baseConstructor.call(this, id, name, age);
    // this.salary = salary;
  
// }

// Inheritance_Class.extend(Manager, Person);

// Manager.prototype.lead = function () {
    // alert('I am a good leader');
// }

// var p = new Person(1, 'Joe Tester', 26);
// var pm = new Manager(1, 'Joe Tester', 26, '20.000');


// alert(p.name);
// alert(pm.salary);