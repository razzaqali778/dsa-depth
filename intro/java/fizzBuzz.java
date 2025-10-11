import java.util.List;
import java.util.ArrayList;

class Source {
  public static List<Object> fizzBuzz(int n) {
    List<Object> result = new ArrayList<>();

    for (int i = 1; i <= n; i += 1) {
      if (i % 3 == 0 && i % 5 == 0) {
        result.add("fizzbuzz");
      } else if (i % 3 == 0 ) {
        result.add("fizz");
      } else if (i % 5 == 0) {
        result.add("buzz");
      } else {
        result.add(i);
      }
    }
    
    return result;
  }

  public static void run() {
    // this function behaves as `main()` for the 'run' command
    // you may sandbox in this function , but should not remove it
  }
}
