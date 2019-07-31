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
            { 'key': 'personId', 'label': 'Id' },
            { 'key': 'createdDate', 'label': 'Created Date' },
            { 'key': 'namelastname', 'label': 'Name' },
            { 'key': 'gender', 'label': 'Gender' },
            { 'key': 'cv', 'label': 'CV File' },
            { 'key': 'interviewDate', 'label': 'Interview Date' },
            { 'key': 'contact', 'label': 'Contact' },
            { 'key': 'position', 'label': 'Position' },
            { 'key': 'diatomInterviewees', 'label': 'Diatom Interviewees' },
            { 'key': 'rate', 'label': 'Rate (EUR)' },
            { 'key': 'experience', 'label': 'Experience' },
            { 'key': 'potentialProjects', 'label': 'Potential Projects' },
            { 'key': 'status', 'label': 'Status' },
            { 'key': 'notes', 'label': 'Notes' },
            { 'key': 'action', 'label': 'Action' }
        ]
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
        }
    }
});