class Car {
    constructor(brand,modelYear,price) {
        this.brand = brand;
        this.modelYear = modelYear;
        this.price = price;
        }

        carInformation () {
            return "This car is a " + this.brand + "and its a " + this.modelYear + " model \n" + "The price is €" + this.price + ".-";
        }

}