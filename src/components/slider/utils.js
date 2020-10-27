export const getClient = function(e) {
    let clientX = e.changedTouches[0].clientX;
    let clientY = e.changedTouches[0].clientY;
    return {
        x: clientX,
        y: clientY
    }
}
export const LIMIT_DISTANCE = 15;
export const LIMIT_TIME = 300;