import $ from 'jquery';

export const SearchPost = (value) => {
    let keyvalue = value.toLowerCase();
    $(".EventMain__event").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(keyvalue) > -1)
    });
};