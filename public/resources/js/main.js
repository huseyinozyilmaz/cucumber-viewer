if (!String.prototype.format) { String.prototype.format = function() { var args = arguments; return this.replace(/{(\d+)}/g, function(match, number) { return typeof args[number] != 'undefined'? args[number]: match;});};}

$(document).ready(function(){    
    
    loadApplicationList();

    $('#application-list').on('click', 'a', function(){
        var appName = $(this).data('id');
        loadFeatureList(appName);
    });

    // Rendering List Item Selection
    $('.list-group').on('click', 'a.list-group-item', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });
  
});

function loadApplicationList() {
    $('#application-list').empty();
    $.getJSON("/api/apps", function( json ) {
        json.forEach(function(item, index){
            $('#application-list').append('<a href="#" class="list-group-item" data-id="{0}">{1}</a>'.format(item.id, item.name));
        });
    });
}

function loadFeatureList(app) {
    $('#feature-list').empty();
    $.getJSON("/api/apps/{0}/features".format(app), function( json ) {
        json.forEach(function(item, index){
            $('#feature-list').append('<a href="#" class="list-group-item">{0}</a>'.format(item.name));
        });
    });
}