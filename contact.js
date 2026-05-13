document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formStatus = document.getElementById('formStatus');
    const gotchaTime = document.getElementById('gotchaTime');
    if (!form || !submitBtn || !formStatus || !gotchaTime) {
        return;
    }
    const fields = form.elements;
    const pageLoadTime = Date.now();
    gotchaTime.value = String(pageLoadTime);

    function showStatus(message, type) {
        formStatus.className = 'status-box';
        formStatus.textContent = message;
        if (type === 'success') {
            formStatus.classList.add('status-success');
        } else {
            formStatus.classList.add('status-error');
        }
        formStatus.focus();
    }

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        formStatus.className = 'status-box';
        formStatus.textContent = '';
        const name = fields.name.value.trim();
        const email = fields.email.value.trim();
        const message = fields.message.value.trim();
        const company = fields.company.value.trim();
        const timeOnPage = Date.now() - pageLoadTime;
        if (!name || !email || !message) {
            showStatus('Please fill out your name, email, and message.', 'error');
            return;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showStatus('Please enter a valid email address.', 'error');
            return;
        }
        if (company !== '') {
            showStatus('Submission blocked.', 'error');
            return;
        }
        if (timeOnPage < 4000) {
            showStatus('Please wait a few seconds and try again.', 'error');
            return;
        }
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (response.ok) {
                form.reset();
                showStatus('Thanks — your message was sent successfully.', 'success');
            } else {
                showStatus('Sorry, something went wrong. Please try again.', 'error');
            }
        } catch (_error) {
            showStatus('Sorry, something went wrong. Please try again.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }
    });
});
