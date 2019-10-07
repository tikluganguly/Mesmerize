class Symbol {
  constructor(x,y,codeStart,codeLength,color,speed,resetTo) {
    this._x = x;
    this._y = y;
    this._codeStart = codeStart;
    this._codeLength = codeLength;
    this.setCode();
    this._color = color;
    this._speed = speed;
    this._resetTo = resetTo ? resetTo : 0;
  }

  show() {
    stroke(this._color);
    fill(this._color);
    textSize(Symbol.SIZE);
    text(this._value, this._x, this._y);
    this._y = this._y > height ? this._resetTo : this._y+this._speed;
    if (floor(random(1,25)) == 1) {
      this.setCode();
    }
  }

  setCode() {
    this._value = String.fromCharCode(this._codeStart + floor(random(0, this._codeLength+1)));
  }
}

Symbol.SIZE = 14;
Symbol.COLOR_BRIGHT = SketchColor.blend(SketchColor.greenyellow(),SketchColor.white()).stringify();
Symbol.COLOR_DIM = SketchColor.blend(SketchColor.green(),SketchColor.grey()).stringify();