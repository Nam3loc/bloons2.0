// // Imports
// import { canvas, ctx, canvasWidth, canvasHeight } from "./canvas.js";

// // Mouse
// export const mouse = {
//     x: undefined,
//     y: undefined,
//     width: 0.1,
//     height: 0.1
// }

// let canvasPosition = canvas.getBoundingClientRect();
// // console.log(canvasPosition);
// export canvas.addEventListener('mousemove', function(evt){
//     mouse.x = (evt.x + 60) - (canvasPosition.left - canvasPosition.width);
//     // mouse.x = evt.x - canvasPosition.left; // Original code
//     mouse.y = evt.y - canvasPosition.top;
// });
// canvas.addEventListener('mouseleave', function() {
//     mouse.y = undefined;
//     mouse.y = undefined;
// })