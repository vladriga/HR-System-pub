'use strict'

var persons = [];
persons[0] = {
    'personId': 1,
    'name': 'Antonio',
    'lastName': 'Perez',
    'gender': 'M',
    'createdDate': '15.08.2019',
    'isCvUploaded': true,
    'interviewDate': '15.08.2019 15:30',
    'contact': {
        'skype': 'antonio_perez',
        'phone': '+371 12345678'
    },
    'position': 'manager',
    'diatomInterviewees': ['Andrew', 'Eugene'],
    'rate': 12,
    'experience': 'C#, node.js, LINQ, .Net Core, REST API',
    'potentialProjects': 'OceanReef, Torget',
    'status': 'pending',
    'notes': 'note',
    'isEditMode': false
};
persons[1] = {
    'personId': 2,
    'name': 'Louis',
    'lastName': 'Santana',
    'gender': 'M',
    'createdDate': '15.08.2019',
    'isCvUploaded': true,
    'interviewDate': '15.08.2019 14:00',
    'contact': {
        'skype': 'louis_santana',
        'email': 'louis@mail.com',
        'phone': '+371 12345678'
    },
    'position': 'programmer',
    'diatomInterviewees': ['Andrew', 'Eugene', 'Eliza'],
    'rate': 14,
    'experience': 'C#, node.js, LINQ, .Net Core, REST API, OOP, Azure',
    'potentialProjects': 'Torget, DepotManager',
    'status': 'pending',
    'notes': 'note',
    'isEditMode': false
};
persons[2] = {
    'personId': 3,
    'name': 'Carmen',
    'lastName': 'Lozano',
    'gender': 'F',
    'createdDate': '15.08.2019',
    'isCvUploaded': true,
    'interviewDate': '15.08.2019 18:15',
    'contact': {
        'skype': 'carmen_lozano',
        'other': 'carmen@mail.com'
    },
    'position': 'team lead',
    'diatomInterviewees': ['Andrew', 'Eugene', 'Eliza'],
    'rate': 16,
    'experience': 'C#, node.js, LINQ, .Net Core, HTML, CSS, JavaScript, TypeScript',
    'potentialProjects': 'DepotManager, Torget',
    'status': 'pending',
    'notes': 'note',
    'isEditMode': false
};

var hrPlace = new Vue({
    'el': '#hrSystem',
    'data': {
        'persons': persons,
        'fields': [
            { 'key': 'personId', 'label': 'Id', 'sortable': true },
            { 'key': 'createdDate', 'label': 'Created Date', 'sortable': true },
            { 'key': 'namelastname', 'label': 'Name', 'sortable': true },
            { 'key': 'gender', 'label': 'Gender', 'sortable': true },
            { 'key': 'cv', 'label': 'CV File' },
            { 'key': 'interviewDate', 'label': 'Interview Date', 'sortable': true },
            { 'key': 'contact', 'label': 'Contact' },
            { 'key': 'position', 'label': 'Position', 'sortable': true },
            { 'key': 'diatomInterviewees', 'label': 'Diatom Interviewees' },
            { 'key': 'rate', 'label': 'Rate (EUR)', 'sortable': true },
            { 'key': 'experience', 'label': 'Experience' },
            { 'key': 'potentialProjects', 'label': 'Potential Projects' },
            { 'key': 'status', 'label': 'Status', 'sortable': true },
            { 'key': 'notes', 'label': 'Notes' },
            { 'key': 'action', 'label': 'Action' }
        ],
        'intervieweerOptions': ['Eliza', 'Eugene', 'Laura', 'Andrew'],
        'class_add_btn': '[btn btn-info]',
        'filter': null,
    },
    'methods': {
        'deleteRow': function (personId) {
            if (confirm('Delete this row?')) {
                for (let i = 0; i < hrPlace.persons.length; i++) {
                    if (hrPlace.persons[i].personId === personId) {
                        hrPlace.persons.splice(i, 1);
                        break;
                    }
                }
            }
        },
        'edit': function (item, index) {
            hrPlace.persons.forEach((cvsItem, cvsIndex) => cvsItem.isEditMode = (index === cvsIndex ? cvsItem.isEditMode : false));
            item.isEditMode = !item.isEditMode;
        },
        'add': function (event) {
            //disable button until new row added in DB
            event.target.setAttribute('disabled', true);
            hrPlace.class_add_btn = ['btn btn-info disabled'];

            hrPlace.lastIndex = persons.length;
            hrPlace.persons.push({
                'personId': 0,
                'name': '',
                'lastName': '',
                'gender': 'M',
                'createdDate': new Date().toLocaleDateString(),
                'isCvUploaded': false,
                'interviewDate': '',
                'contact': {
                    'skype': '',
                    'email': '',
                    'phone': '',
                    'other': ''
                },
                'position': '',
                'diatomInterviewees': [],
                'rate': 0,
                'experience': '',
                'potentialProjects': '',
                'status': 'pending',
                'notes': '',
                'isEditMode': true
            });
            // set focus into Name column
            setTimeout(() => { let el = document.querySelectorAll('#input-name'); if (el[el.length - 1] !== null) el[el.length - 1].focus(); }, 400);
            // send data into a DB emulation (getting prsonId back)
            setTimeout(() => {
                event.target.removeAttribute('disabled');
                hrPlace.class_add_btn = ['btn btn-info'];
                persons[persons.length - 1]['personId'] = persons.length;
            }, 3000);
        }
    }
});