export class Degrees {
  static toDecimal(deg: number, min: number, sec = 0): number {
    return deg + min / 60 + sec / 3600;
  }
}
