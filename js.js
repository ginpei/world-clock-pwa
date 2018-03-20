function $ (selector) {
  return document.querySelector(selector);
}

function createElement (tagName, attrs) {
  const el = document.createElementNS('http://www.w3.org/2000/svg', tagName);
  Object.keys(attrs).forEach((name) => {
    const value = attrs[name];
    el.setAttribute(name, value);
  });
  return el;
}

class Spiral {
  constructor (parent) {
    this.elPath = createElement('path', {
      stroke: 'tomato',
    });
    parent.appendChild(this.elPath);
  }

  /**
     * @param {object} settings
     * @param {number} settings.radius Maximum radius
     * @param {number} settings.gap Gap between lines
     * @param {number} settings.rounds How many times spiral rounds
     * @param {number} settings.rotation
     * @param {number} settings.resolution
     */
  update (settings) {
    const d = this.buildPathD(this.buildPoints(settings));
    this.elPath.setAttribute('d', d);
  }

  /**
     * @param {object} settings
     * @param {number} settings.radius Maximum radius
     * @param {number} settings.gap Gap between lines
     * @param {number} settings.rounds How many times spiral rounds
     * @param {number} settings.rotation
     * @param {number} settings.resolution
     * @returns {Array} e.g. `[[100,100], [101,102], ...]`
     */
  buildPoints (settings) {
    const {
      radius: maxR, gap, rounds, rotation, resolution,
    } = settings;
    const points = [];

    for (let i = 0; i < (resolution * rounds) + 1; i++) {
      const totalProgress = i / (resolution * rounds);
      const circleProgress = (i % resolution) / resolution;
      const r = maxR - (gap * rounds) + (gap * rounds * totalProgress);
      const deg = 2 * Math.PI * (circleProgress + (rotation / 360));
      const x = r * Math.cos(deg);
      const y = r * Math.sin(deg);
      points.push([x, y]);
    }

    return points;
  }

  /**
     * @param {Array} points
     * @returns {string}
     */
  buildPathD (points) {
    const linePoints = points.slice(1).map(point => `L ${point[0]} ${point[1]}`);
    const d = `M ${points[0][0]} ${points[0][1]} ${linePoints.join(' ')}`;
    return d;
  }
}

function update (spiral) {
  const rounds = Number($('#rounds').value);
  $('#rounds-value').textContent = rounds;

  const radius = Number($('#radius').value);
  $('#radius-value').textContent = radius;

  const gap = Number($('#gap').value);
  $('#gap-value').textContent = gap;

  const rotation = Number($('#rotation').value);
  $('#rotation-value').textContent = rotation;

  const resolution = Number($('#resolution').value);
  $('#resolution-value').textContent = resolution;

  const settings = {
    rounds, radius, gap, rotation, resolution,
  };
  spiral.update(settings);
}

function rulerDescription () {
  let d = 'M 0 0 l 100 0';
  for (let i = 0; i < 10; i++) {
    d += ` M ${(1 + i) * 10} -5 l 0 10`;
  }
  return d;
}

document.addEventListener('DOMContentLoaded', () => {
  const svg = $('#spiral');
  const g = createElement('g', {
    class: 'spiral',
    transform: 'translate(150, 150)',
    fill: 'transparent',
  });
  svg.appendChild(g);

  const ruler = createElement('path', {
    stroke: 'skyblue',
    d: rulerDescription(),
  });
  g.appendChild(ruler);
  const spiral = new Spiral(g);

  $('#rounds').addEventListener('input', () => update(spiral));
  $('#radius').addEventListener('input', () => update(spiral));
  $('#gap').addEventListener('input', () => update(spiral));
  $('#rotation').addEventListener('input', () => update(spiral));
  $('#resolution').addEventListener('input', () => update(spiral));

  update(spiral);
});
