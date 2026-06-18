/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let hourHandInMin = 0.5
    let angleOfHourHand = 30
    let AngleofMinHand = 6
    let minuteAngle = minutes * AngleofMinHand
    let hourAngle = (hour * angleOfHourHand) + (hourHandInMin * minutes)
    let result = Math.abs(hourAngle-minuteAngle)
    let minAngle = Math.min(result,(360-result))
    return minAngle
};