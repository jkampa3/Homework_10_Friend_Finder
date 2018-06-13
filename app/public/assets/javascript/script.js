//script for survey

$(document).ready(function () {

    //on click form validation to ensure required info needed
    $("#submitButton").on("click", function () {
        function validateForm() {
            var isValid = true;
            $('.validate').each(function () {
                if ($(this).val() === '') {
                    isValid = false;
                }
            });
            $('.browserDefault').each(function () {
                if ($(this).val() === "") {
                    isValid = false;
                }
            });
            return isValid;
        }

        //if everything is filled, we have a valid input to push to array
        if (validateForm() == true) {
            var newFriend = {
                name: $('#userNameInput').val().trim(),
                profilePic: $('#userPhotoInput').val().trim(),
                scores: [
                    $('#q1').val(),
                    $('#q2').val(),
                    $('#q3').val(),
                    $('#q4').val(),
                    $('#q5').val(),
                    $('#q6').val(),
                    $('#q7').val(),
                    $('#q8').val(),
                    $('#q9').val(),
                    $('#q10').val(),
                ]
            };

            //posts the data to friends API.
            var currentURL = window.location.origin;

            $.post(currentURL + "/api/friends", userData, function (data) {
                $("#matchName").text(data.name);
                $("#matchPic").attr("src", data.profilePic);
                $(".modal").modal('toggle');
            });

            //form reset
            $('#userNameInput').val("");
            $('#userPhotoInput').val("");
            $('#q1').val("");
            $('#q2').val("");
            $('#q3').val("");
            $('#q4').val("");
            $('#q5').val("");
            $('#q6').val("");
            $('#q7').val("");
            $('#q8').val("");
            $('#q9').val("");
            $('#q10').val("");
        } else {
            alert("Please fill out ALL fields before submitting survey!")
        }

    });
});