//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (num) => {
  const secrets = ['wink', 'double blink', 'close your eyes', 'jump']
  const nums = Number(num).toString(2).split('').reverse();

  const output = secrets.reduce((result, curr, i) => {
    if (nums[i] === '1') {
      result.push(curr)
    }
    return result;
  }, []);

  return nums[4] === '1' ? output.reverse() : output;
};
