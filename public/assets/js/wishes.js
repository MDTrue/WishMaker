
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-made").on("click", function(event) {
      var id = $(this).data("id");
      var newMade = $(this).data("newmade");
  
      var newMadeState = {
        made: newMade
      };
  
      // Send the PUT request.
      $.ajax("/api/wishes/" + id, {
        type: "PUT",
        data: newMadeState
      }).then(
        function() {
          console.log("changed made to", newMade);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newWish = {
        wish_name: $("#wish").val().trim(),
        made: $("[name=made]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/wishes", {
        type: "POST",
        data: newWish
      }).then(
        function() {
          console.log("created a new wish");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-wish").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/wishes/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted wish", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  