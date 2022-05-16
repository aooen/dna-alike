class Curve {
  private amplitude: number
  dx: number = 0
  dy: number = 0

  constructor(amplitude: number) {
    this.amplitude = amplitude
  }

  moveX(delta: number) {
    this.dx += delta
  }

  moveY(delta: number) {
    this.dy += delta
  }

  getY(x: number) {
    return Math.sin((x + this.dx) * 0.03) * this.amplitude + this.dy
  }

  getJoints(start: number, end: number) {
    const halfWavelength = Math.PI / 0.03
    const unit = halfWavelength / 4
    const result: Array<number> = []
    for (let i = start + this.dx; i < end; i += unit) {
      result.push(i)
    }
    return result
  }
}

export default Curve
