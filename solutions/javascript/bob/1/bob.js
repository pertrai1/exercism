export const hey = (message) => {
  if (message.trim() === "") {
    return "Fine. Be that way!";
  }

  if (message.toUpperCase() === message && message.toLowerCase() !== message) {
    return message.trim().endsWith("?")
      ? "Calm down, I know what I'm doing!"
      : "Whoa, chill out!";
  }

  return message.trim().endsWith("?") ? "Sure." : "Whatever.";
};
