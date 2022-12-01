import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class FileR {
    public static void readLongLines(String fileName, int length){
        
        try{
            File f = new File(fileName); 
            Scanner scan = new Scanner(f);
            if (length < 0){
               System.out.println("Invalid length");
               return;
            }
            while (scan.hasNextLine()){
                String line = scan.nextLine();
                String[] chars = line.split("");

                if (chars.length > length){
                    System.out.println(line);
                }
            }
            scan.close();

        }
        catch(FileNotFoundException e){
            System.out.println("No such file");
        }
        
    }
    
    public static void main(String[] args){
        readLongLines("qs.txt", 3);
    }
}

/*4. Write the static method readLongLines(String fileName, int length) 
that prints out every line in the file fileName that is longer than length. 
If the file does not exist, print "No such file". If length is negative, print "Invalid length".

You cannot use FileReader or BufferedReader as part of your solution. */