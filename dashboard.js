document.addEventListener("DOMContentLoaded", function () {
    const loginTime = new Date().toLocaleString();
    const loginTimeElement = document.getElementById("login-time");
    const timeTrackerCheckbox = document.getElementById("time-tracker-checkbox");
    const workedTimeElement = document.getElementById("worked-time");

    loginTimeElement.textContent = `Login Time: ${loginTime}`;
    localStorage.setItem("loginTime", loginTime);

    let startTime;
    let elapsedTime = 0;
    let timerInterval;
    if (localStorage.getItem("workedTime")) {
        elapsedTime = parseInt(localStorage.getItem("workedTime"));
        workedTimeElement.textContent = `Worked Time: ${elapsedTime} seconds`;
    }
    timeTrackerCheckbox.addEventListener("change", function () {
        if (timeTrackerCheckbox.checked) {
            startTime = Date.now() - elapsedTime * 1000;
            timerInterval = setInterval(() => {
                elapsedTime = Math.floor((Date.now() - startTime) / 1000);
                workedTimeElement.textContent = `Worked Time: ${elapsedTime} seconds`;
                localStorage.setItem("workedTime", elapsedTime);
            }, 1000);
        } else {
            clearInterval(timerInterval);
            localStorage.setItem("workedTime", elapsedTime);
        }
    });
    document.getElementById("logout-button").addEventListener("click", function () {
        const logoutTime = new Date().toLocaleString();
        localStorage.setItem("logoutTime", logoutTime);
        alert(`Logout Time: ${logoutTime}`);
        localStorage.removeItem("workedTime");
        window.location.href = "index.html";
    });
});
