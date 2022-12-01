public class Car {
    private String reg;
    private double hRent;

    public Car(String reg, double hRent){
        this.reg = reg;
        this.hRent = hRent;
    }

    public double getHRent(){
        return hRent;
    }
}


class CarRentals{
    Car[] cars;

    public CarRentals(Car[] cars){
        this.cars = cars;
    }


    public Car cheapest(Car one, Car two){
        if (one.getHRent() < two.getHRent()){
            return one;
        }
        else{
            return two;
        }
    }   
}
/*5. Create a Car class that contains two attributes: registration number and hourly rent amount.

Create a class CarRentals for managing cars that are available for rental. This class should have:

a list to store all the currently available cars
a method that takes two cars as arguments and returns the car with the lowest hourly rent */
