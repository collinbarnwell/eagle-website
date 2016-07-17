

$(document).ready(function() {
  $('#submit-btn').click(function (e) {
    e.preventDefault();
    var errors = false;

    var name = $('#form-name').val();
    if (name == '') {
      errors = true;
      $('#form-name').addClass('error');
    }

    var email = $('#form-email').val();
    if (!(email.indexOf('@') >= 0)) {
      errors = true;
      $('#form-email').addClass('error');
    }

    var msg = $('#form-msg').val();
    if (msg == '') {
      errors = true;
      $('#form-msg').addClass('error');
    }

    if (!errors) {
      var url = 'https://docs.google.com/forms/d/e/1FAIpQLSdbE-9RkTKMs_KK3LhVGVRgUO1r5ulKSnpnXfhUnmlBXeetCg/formResponse?entry.1802749419=' + name + '&entry.296139361=' + email + '&entry.458868807=' + msg;

      var successCallback = function() {
	$('form').replaceWith('<p>Thank you! We will reach out to you very soon with a response.</p>');
      }

      $.ajax({
	type: 'POST',
	url: url,
	dataType: 'text json',
	success: successCallback,
	error: function (resp) {
	  if (resp.status == 0)
	    successCallback();
	}
      });
    }

  });
});
