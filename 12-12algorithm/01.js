/**
 * 最近的请求次数
 */
var RecentCounter = function () {
  this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  let time = t - 3000;
  while (this.queue[0] < time) {
    this.queue.shift();
  }
  return this.queue.length;
};
