import P5 from 'p5'

import Curve from './Curve'

function sketch(p5: P5) {
  const width = document.body.offsetWidth
  const height = document.body.offsetHeight
  const center = width / 2

  const regular = new Curve(30)
  const symmetric = new Curve(-30)

  const lineColors = Array(10).fill(0).map(() => [p5.random(40, 200), p5.random(40, 200), p5.random(40, 200)])

  p5.setup = () => {
    p5.frameRate(8)
    p5.createCanvas(width, height, p5.WEBGL)
  }

  p5.draw = () => {
    p5.clear(130, 219, 216, 1)
    p5.background(130, 219, 216)

    p5.noStroke()
    p5.fill(47, 143, 157)
    for (let x = -center; x < center; x += 0.1) {
      const y = regular.getY(x)
      const revY = symmetric.getY(x)
      p5.ellipse(x, y, 5, 5)
      p5.ellipse(x, revY, 5, 5)
    }

    p5.strokeWeight(3)
    const joints1 = regular.getJoints(-center, center)
    const joints2 = symmetric.getJoints(-center, center)
    for (let i = 0; i < Math.min(joints1.length, joints2.length); i++) {
      const color = lineColors[Math.floor(i / 4) % lineColors.length]
      p5.stroke.call(p5, color)
      const regX = joints1[i]
      const symX = joints2[i]
      p5.line(regX, regular.getY(regX), symX, symmetric.getY(symX))
    }

    ([['dx', 'moveX'], ['dy', 'moveY']] as const).map(([deltaField, mover]) => {
      const diff = regular[deltaField] - symmetric[deltaField]
      const deltaX = p5.random(0, 5)
      const willMoveSymmetric = p5.random(0, 2) < 1
      const subject = willMoveSymmetric ? symmetric : regular
      const direction = p5.random(-5, 5) < diff ? (willMoveSymmetric ? 1 : -1) : (willMoveSymmetric ? -1 : 1)
      subject[mover](deltaX * direction)
    })
  }
}

new P5(sketch)
