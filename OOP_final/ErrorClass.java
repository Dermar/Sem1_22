public class ErrorClass {
    public static void main(String[]args){
        int a = 7; b= 42;
        int smaller = minimum(a, b);
        if (smaller = a){
            System.out.println("a is the smallest!");
        }
    }

    public int minimum(int a, int b){
        double smaller;
        if (a < b){
            smaller = a;
        }
        else (a >= b){
            smaller = b;
        }
        return smaller;
    }
}
