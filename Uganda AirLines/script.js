document.addEventListener('DOMContentLoaded', function () {

    // MOBILE NAVIGATION

    const toggle = document.querySelector('.menu-toggle');

    const nav = document.querySelector('.nav');

    if (toggle && nav) {

        toggle.addEventListener('click', function () {

            const open = nav.classList.toggle('open');

            toggle.setAttribute(
                'aria-expanded',
                String(open)
            );

            toggle.textContent = open ? '×' : '☰';

        });

    }


    // AUTOMATIC COPYRIGHT YEAR

    document.querySelectorAll('.year').forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });


    // CONTACT AND BOOKING FORMS

    const forms = [
        'contact-form',
        'booking-form'
    ];


    forms.forEach(function (id) {

        const form = document.getElementById(id);

        if (!form) return;


        // SUBMIT FORM

        form.addEventListener('submit', function (event) {

            event.preventDefault();

            const feedback = form.querySelector('.form-feedback');


            if (id === 'contact-form') {

                feedback.textContent =
                    'Thank you. Your message has been prepared successfully. This is a demonstration only.';

            } else {

                feedback.textContent =
                    'Thank you. Your booking request has been recorded for this demonstration. No ticket has been booked.';

            }

            feedback.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });

        });


        // RESET FORM

        form.addEventListener('reset', function () {

            const feedback = form.querySelector('.form-feedback');

            if (feedback) {

                feedback.textContent = '';

            }

        });

    });

});