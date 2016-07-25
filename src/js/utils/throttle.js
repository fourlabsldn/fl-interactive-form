
/**
 * @public
 * @method throttle
 * @param  {Function} fn
 * @param  {Int} threshhold - Number of milliseconds
 * @param  {Object} scope - this object
 * @param  {Boolean} defer - whether to execute the callback after the delay has finished
 * @return {Function}
 */
export default function throttle(fn, threshhold = 250, scope, defer = true) {
  let last;
  let deferTimer;
  return (...args) => {
    const context = scope || this;

    const now = +new Date;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);

      if (defer) {
        deferTimer = setTimeout(() => {
          last = now;
          fn.apply(context, args);
        }, threshhold);
      }
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}
