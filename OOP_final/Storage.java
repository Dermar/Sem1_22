import java.util.ArrayList;
public abstract class Storage<T> {
    ArrayList<T> elems;

    public Storage(){
        ArrayList<T> elems = new ArrayList<T>();
    }

    public abstract void print();
    public void add(T elem){
        if (elem == null){
            return;
        }
        for (int i = 0; i < elems.size(); i++){
            if (elem.equals(elems.get(i))){
                return;
            }
        }
        elems.add(elem);
    }

    public static void main(String[] args){
        MyStorage g = new MyStorage();
        g.print();
    }
}

class MyStorage extends Storage{
    public void print(){
        System.out.println(this);
    }
}

/*Create a Storage<T> abstract class. The class has abstract methods void print() which prints the object of the storage. 
The class has a non-abstract method add(T element) which adds the not-null element in the storage if the element is not already present.

Create a class MyStorage which is a subclass of Storage. */