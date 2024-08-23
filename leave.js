document.getElementById('leave-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const reason = document.getElementById('reason').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

   
    if (!name || !reason || !startDate || !endDate) {
        alert('Please fill out all fields.');
        return;
    }

   
    const leaveApplication = {
        name: name,
        reason: reason,
        startDate: startDate,
        endDate: endDate
    };
 let leaveApplications = JSON.parse(localStorage.getItem('leaveApplications')) || [];
leaveApplications.push(leaveApplication);
localStorage.setItem('leaveApplications', JSON.stringify(leaveApplications));
document.getElementById('leave-message').textContent = `Leave application submitted successfully for ${name} from ${startDate} to ${endDate}.`;
document.getElementById('leave-form').reset();
});
