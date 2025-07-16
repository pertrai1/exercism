const IS_EMPTY = (message: string): boolean => /^\s*$/.test(message);
const IS_QUESTION = (message: string): boolean => /\?$/.test(message.trim());
const IS_YELLING = (message: string): boolean =>
  /[A-Za-z]+/.test(message) && message === message.toUpperCase();
class Bob {
  hey(message: string): string | undefined {
    if (IS_QUESTION(message) && IS_YELLING(message)) {
      return "Calm down, I know what I'm doing!";
    }

    if (IS_YELLING(message)) {
      return "Whoa, chill out!";
    }

    if (IS_QUESTION(message)) {
      return "Sure.";
    }

    if (IS_EMPTY(message)) {
      return "Fine. Be that way!";
    }

    return "Whatever.";
  }
}

export default Bob;
