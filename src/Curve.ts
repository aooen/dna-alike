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
    return Math.sin((x + this.dx - 50) * 0.03) * this.amplitude + this.dy
  }
}

export default Curve
