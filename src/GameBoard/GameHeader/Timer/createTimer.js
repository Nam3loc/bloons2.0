export function createTimer() {
    // const minutes = document.querySelector('#minutes');
    // const seconds = document.querySelector('#seconds');
    let minutes = '00';
    let seconds = '00';

    let totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
        totalSeconds++;
        seconds = pad(totalSeconds % 60);
        minutes = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
        let valStr = val + "";
        if(valStr.length < 2) {
            return "0" + valStr;
        } else {
            return valStr;
        }
    }

    return (`${minutes}:${seconds}`);
}