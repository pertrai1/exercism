class ReverseString {

    String reverse(String inputString) {
        StringBuilder outputString = new StringBuilder(inputString);

        for (int i = 0; i < inputString.length() / 2; i++) {
            char temp = inputString.charAt(i);
            outputString.setCharAt(i, inputString.charAt(inputString.length() - i - 1));
            outputString.setCharAt(outputString.length() - i - 1, temp);
        }

        return outputString.toString();
    }
  
}
