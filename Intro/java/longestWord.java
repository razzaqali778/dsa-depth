class Source {
  public static String longestWord(String sentence) {
    String[] words = sentence.split(" ");
    String longest = "";
    
    for (String word : words) {
      if (word.length() >= longest.length()) {
        longest = word;
      }
    }

    return longest;
  }

  public static void run() {
    // this function behaves as `main()` for the 'run' command
    // you may sandbox in this function, but should not remove it
  }
}
