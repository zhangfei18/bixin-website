export const LIMIT_DISTANCE = 15;
export const LIMIT_TIME = 300;
// 处理PC和移动端的事件
// export const HAS_TOUCH = 'ontouchstart' in window; //判断是pc/iphone
export const HAS_TOUCH = true; //判断是pc/iphone
export const START_EVENT = HAS_TOUCH ? 'touchstart' : 'mousedown';
export const MOVE_EVENT = HAS_TOUCH ? 'touchmove' : 'mousemove';
export const END_EVENT = HAS_TOUCH ? 'touchend' : 'mouseup';
export const getClient = function(e) {
    let clientX = HAS_TOUCH ? e.changedTouches[0].clientX : e.clientX;
    let clientY = HAS_TOUCH ? e.changedTouches[0].clientY : e.clientY;
    return {
        x: clientX,
        y: clientY
    }
}