document.addEventListener('DOMContentLoaded', function() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const subscribeBubble = document.getElementById('subscribeBubble');
    const submitEmail = document.getElementById('submitEmail');
    const emailInput = document.getElementById('emailInput');

    if (subscribeBtn && subscribeBubble && submitEmail && emailInput) {
        subscribeBtn.addEventListener('click', function() {
            subscribeBubble.style.display = 'flex';
            subscribeBtn.style.display = 'none';
        });

        submitEmail.addEventListener('click', function() {
            const email = emailInput.value;
            if (email) {
                alert('Check your inbox to confirm your subscrition to the Substack newsletter!');
                subscribeBubble.style.display = 'none';

                // Make Substack subscription API call
                const form = document.createElement('form');
                form.action = 'https://fernandoyanez.substack.com/api/v1/free';
                form.method = 'POST';
                form.target = 'hiddenFrame';

                const emailInput = document.createElement('input');
                emailInput.type = 'hidden';
                emailInput.name = 'email';
                emailInput.value = email;
                form.appendChild(emailInput);

                const redirectInput = document.createElement('input');
                redirectInput.type = 'hidden';
                redirectInput.name = 'redirect';
                redirectInput.value = 'false';
                form.appendChild(redirectInput);

                document.body.appendChild(form);
                form.submit();
            } else {
                alert('Please enter a valid email.');
            }
        });
    }
});
