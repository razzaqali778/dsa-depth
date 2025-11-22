/**
 * Practical system design snippets.
 */

// LRU Cache with Map (doubles as doubly linked list).
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }
  get(key) {
    if (!this.map.has(key)) return -1;
    const val = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, val); // move to end (most recent)
    return val;
  }
  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
      const lruKey = this.map.keys().next().value;
      this.map.delete(lruKey);
    }
  }
}

// Round-robin load balancer.
class RoundRobin {
  constructor(targets) {
    this.targets = targets.slice();
    this.idx = 0;
  }
  next() {
    if (this.targets.length === 0) return null;
    const target = this.targets[this.idx];
    this.idx = (this.idx + 1) % this.targets.length;
    return target;
  }
}

// Sliding window rate limiter (timestamp based).
class RateLimiter {
  constructor(limit, windowMs) {
    this.limit = limit;
    this.windowMs = windowMs;
    this.timestamps = [];
  }
  allow() {
    const now = Date.now();
    while (this.timestamps.length && now - this.timestamps[0] > this.windowMs) {
      this.timestamps.shift();
    }
    if (this.timestamps.length < this.limit) {
      this.timestamps.push(now);
      return true;
    }
    return false;
  }
}

module.exports = {
  LRUCache,
  RoundRobin,
  RateLimiter,
};

/*
Examples:
const cache = new LRUCache(2);
cache.put("a",1); cache.put("b",2); cache.get("a"); // 1, now "a" is recent
cache.put("c",3); // evicts "b"
*/
