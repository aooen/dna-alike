import P5 from 'p5'

import Curve from './Curve'

function sketch(p5: P5) {
  const width = document.body.offsetWidth
  const height = document.body.offsetHeight
  const center = width / 2

  const curve = new Curve(30)
  const revCur = new Curve(-30)

  p5.setup = () => {
    p5.frameRate(30)
    p5.createCanvas(width, height, p5.WEBGL)
  }

  p5.draw = () => {
    p5.clear(130, 219, 216, 1)
    p5.background(130, 219, 216)

    p5.noStroke()
    p5.fill(47, 143, 157)
    for (let x = -center; x < center; x += 0.1) {
      const y = curve.getY(x)
      const revY = revCur.getY(x)
      p5.ellipse(x, y, 5, 5)
      p5.ellipse(x, revY, 5, 5)
    }

    const flag = Math.floor(p5.random(0, 6))
    const delta = p5.random(-5, 5)
    const isX = p5.random(0, 2) < 1
    const isRev = p5.random(0, 2) < 1
    const diff = (() => {
      switch (flag) {
        case 0: case 1: return Math.abs(curve[isX ? 'dx' : 'dy'] - revCur[isX ? 'dx' : 'dy'] + delta * (isRev ? -1 : 1))
        case 2: case 3: return Math.abs(curve[isX ? 'dx' : 'dy'] - revCur[isX ? 'dx' : 'dy'] + delta * (isRev ? -1 : 1))
      }
    })()
    if (diff < 15) {
      switch (flag) {
        case 0: case 2: curve[isX ? 'moveX' : 'moveY'](delta)
        case 1: case 3: revCur[isX ? 'moveX' : 'moveY'](delta)
      }
    }
  }
}

new P5(sketch)
