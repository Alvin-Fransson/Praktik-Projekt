$('#jump_to_loc').click(function(){
    var jump = $(this).attr('href');
    var new_position = $('#'+jump).offset();
    window.scrollTo(new_position.left,new_position.top);
    return false;
});