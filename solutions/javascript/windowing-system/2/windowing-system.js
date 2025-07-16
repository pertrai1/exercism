export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow {
  screenSize = new Size(800, 600);
  size = new Size();
  position = new Position();

  resize(size) {
    if (size.width < 1 || size.height < 1) {
      this.size.width = 1;
      this.size.height = 1;
    } else if (
      size.width > this.screenSize.width || 
      size.height > this.screenSize.height
    ) {
      this.size.width = this.screenSize.width - this.position.x;
      this.size.height = this.screenSize.height - this.position.y;
    } else {
      this.size.width = size.width;
      this.size.height = size.height;
    }
    return this;
  }

  move(position) {
    if (position.x < 0 || position.y < 0) {
      this.position.x = 0;
      this.position.y = 0;
    } else if (this.edgesMovePastScreen(position)) {
      this.position.x = this.screenSize.width - this.size.width;
      this.position.y = this.screenSize.height - this.size.height;
    } else {
      this.position.x = position.x;
      this.position.y = position.y;
    }
    return this;
  }
  
  edgesMovePastScreen(position) {
    return (position.x + this.size.width) > this.screenSize.width ||
      (position.y + this.size.height) > this.screenSize.height
  }
}

export const changeWindow = (programWindow) => {
  return programWindow
          .resize(new Size(400, 300))
          .move(new Position(100, 150));
}