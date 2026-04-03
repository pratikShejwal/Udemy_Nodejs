export function middleware (req,res,next) {
    console.log('custom middleware');
    next()
}

// exports.middleware = function (req,res,next) {
//     console.log('custom middleware');
//     next()
// }