function myselect() {
    console.log("Added routine");
    var ids = $.map($(".program_routines_exercise_id [id]"), function(n, i) {
      return n.id;
    });
    var this_id = ids[ids.length -1];
    console.log(this_id);
    $('#'+this_id).select2({
      placeholder: "Select or Type an Exercise"
    });
};

$(function(){
  $('#modal').on('shown.bs.modal', function() {
    myselect();
  });
  $('#modal').on('cocoon:after-insert', function(e, addedRoutine) {
    myselect();
  });
});
