import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

let count = 0;

$(document.body).append('<p id="logo"></p>')
$(document.body).append('<p>Holberton Dashboard</p>');
$(document.body).append('<p>Dashboard data for the students</p>');
$(document.body).append('<button>Click here to get started</button>');
$(document.body).append(`<p id="count"></p>`);
$(document.body).append('<p>Copyright - Holberton School</p>');

function updateCounter() {
    count++;
    // the 'html()' method override the existing content inside
    // the paragraph tag.
    $('#count').html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter))