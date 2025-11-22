/**
 * Geometry helpers on 2D coordinates.
 */

function cross(o, a, b) {
  return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
}

// Convex Hull using Graham Scan / Monotonic Chain.
function convexHull(points) {
  if (points.length <= 1) return points.slice();
  const pts = points
    .map((p) => ({ x: p.x, y: p.y }))
    .sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x));
  const lower = [];
  for (const p of pts) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) {
      lower.pop();
    }
    lower.push(p);
  }
  const upper = [];
  for (let i = pts.length - 1; i >= 0; i--) {
    const p = pts[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) {
      upper.pop();
    }
    upper.push(p);
  }
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}

// Sweep line: max overlap of intervals (e.g., meeting rooms).
function maxOverlappingIntervals(intervals) {
  const events = [];
  for (const [start, end] of intervals) {
    events.push([start, 1]);
    events.push([end, -1]);
  }
  events.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
  let active = 0;
  let best = 0;
  for (const [, delta] of events) {
    active += delta;
    best = Math.max(best, active);
  }
  return best;
}

// Rotating calipers on convex hull to get farthest pair distance (diameter).
function hullDiameter(points) {
  const hull = convexHull(points);
  const n = hull.length;
  if (n < 2) return 0;
  let j = 1;
  let best = 0;
  const dist2 = (p, q) => (p.x - q.x) ** 2 + (p.y - q.y) ** 2;
  for (let i = 0; i < n; i++) {
    while (true) {
      const next = (j + 1) % n;
      const cur = Math.abs(cross(hull[i], hull[(i + 1) % n], hull[next]));
      const prev = Math.abs(cross(hull[i], hull[(i + 1) % n], hull[j]));
      if (cur > prev) j = next;
      else break;
    }
    best = Math.max(best, dist2(hull[i], hull[j]));
  }
  return Math.sqrt(best);
}

module.exports = {
  convexHull,
  maxOverlappingIntervals,
  hullDiameter,
};

/*
Examples:
convexHull([{x:0,y:0},{x:1,y:1},{x:1,y:0},{x:0,y:1}]); // square corners
maxOverlappingIntervals([[1,3],[2,4],[5,6]]); // 2
*/
