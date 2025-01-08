export class Cube {
  private _side: number;

  constructor(value: number = 0) {
    this._side = Math.abs(value);
  }

  public getSide(): number {
    return this._side;
  }

  public setSide(value: number) {
    this._side = Math.abs(value);
  }
}
