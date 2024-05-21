import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

$(document.body).append('<p>Dashboard data for the students</p>');
$(document.body).append('<button>Click here to get started</button>');
$(document.body).append(`<p id="count"></p>`);

function updateCounter() {
    count++;
    // the 'html()' method override the existing content inside
    // the paragraph tag.
    $('#count').html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter))