'use strict';
angular.module('AbsencesApp', [ 'ngResource', 'ng-context-menu', 'ie7-support', 'ngRoute' , 'ui.calendar', 'ui.bootstrap', 'AbsencesApp.controllers', 'AbsencesApp.directives', 'AbsencesApp.services', 'toaster', 'datePicker', 'enj', 'jm.i18next', 'angular-flot']);

angular.module('AbsencesApp.controllers', []);
angular.module('AbsencesApp.services', []);
angular.module('AbsencesApp.directives', []);
angular.module('enj.directives', []);
angular.module('enj', ['enj.directives']);

function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}
angular.module('AbsencesApp')
.constant('CONSTANTS',{
    app:{
        brand: {
            name: 'Absences',
            icon: 'fa fa-graduation-cap'
        }
    },
    users : {
        accountTypes: [
            {id:'all',label:'All'},
            {id:'admin',label:'Administrator'},
            {id:'teacher',label:'Teacher'},
            {id:'student',label:'Student'}
        ]
    },
    'absence': {
        paymentRate: 7.5,
        paymentCurrency: 'Lei'
    },
    'monthNames': ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    'pages' : [
        {name: 'Dashboard', link: '/guest-dashboard', controller: 'AppController', icon: 'fa-dashboard', collapse: 'false', accountTypes:['guest']},
        {name: 'User Dashboard', link: '/user-dashboard', controller: 'UserController', icon: 'fa-dashboard', collapse: 'false', accountTypes:['user']},
        {name: 'Student Dashboard', link: '/student-dashboard', controller: 'StudentController', icon: 'fa-dashboard', collapse: 'false', accountTypes:['student']},
        {name: 'Teacher Dashboard', link: '/teacher-dashboard', controller: 'TeacherController', icon: 'fa-dashboard', collapse: 'false', accountTypes:['teacher']},
        {name: 'Admin Dashboard', link: '/admin-dashboard', controller: 'AdminController', icon: 'fa-dashboard', collapse: 'false', accountTypes:['admin']},
        {name: 'Administration', controller: 'AdminController', accountTypes:['admin'], icon: 'fa-cog', collapse: 'false', children: [
            {name: 'Config', link: '/admin/config', accountTypes:['admin']},
            {name: 'Sessions', link: '/admin/sessions', accountTypes:['admin']},
            {name: 'Users', link: '/admin/users', accountTypes:['admin']},
            {name: 'Groups', link: '/admin/groups', accountTypes:['admin']},
            {name: 'Subjects', link: '/admin/subjects', accountTypes:['admin']}
        ]},
        {name: 'User', controller: 'UserController', icon: 'fa-user', collapse: 'false', children: [
            {name: 'Login', link: '/user/login', accountTypes:['guest']},
            {name: 'Signup', link: '/user/signup', accountTypes:['guest']},
            {name: 'Profile', link: '/user/profile', accountTypes:['user','teacher','admin','student']}
        ]},
        {name: 'Session', link: '/session/view', controller: 'SessionController', accountTypes:['teacher','admin'], icon: 'fa-bell-o', collapse: 'false'}
    ]
});