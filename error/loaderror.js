window.addEventListener('load', function () {
    sessionStorage.setItem('good_exit', 'pedding');
    setInterval(function () {
        sessionStorage.setItem('time_before_crash', new Date().toString());
    },1000);

    window.addEventListener('beforeunload', function () {
        sessionStorage.setItem('good_exit', 'true')
    })

    if(sessionStorage.getItem('good_exit') && sessionStorage.getItem('good_exit') !== 'true') {
        alert('hey, welcom back from your crash. looks like you crashed on :' + sessionStorage.getItem('time_before_crash'))
    }
})