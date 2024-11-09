// dropdown menu

$(document).ready(function () {
  $(
    '[data-dropdown], [data-dropdown-sol], [data-dropdown-res], [data-dropdown-lang]'
  ).each(function () {
    const $trigger = $(this);
    const $dropdownContent = $trigger.find('ul');

    $trigger.on('mouseenter', function () {
      $dropdownContent.addClass('active');
    });

    $trigger.on('mouseleave', function () {
      $dropdownContent.removeClass('active');
    });
  });
});

// send email

$(document).ready(function () {
  $('#emailForm').on('submit', function (e) {
    e.preventDefault();

    const email = $('#email').val();

    if (!email) {
      alert('Please enter a valid email');
      return;
    }

    $.ajax({
      contentType: 'application/json',
      data: JSON.stringify({ email: email }),
      success: function () {
        console.log('Email successfully submitted:', { email: email });
        alert('Email submitted successfully!');
      },
      error: function (status, error) {
        console.error('Error submitting email:', status, error);
        alert('There was an error. Please try again later.');
      },
    });
  });
});
