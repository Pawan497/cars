import { useSelector } from "react-redux";

function CarValue() {

    const totalCost = useSelector(({cars: { searchTerm , data }}) => 
    // {
        // const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()));

        // // let cost = 0;
        // // for(let car of filteredCars) {
        // //     cost += car.cost
        // // }
        // // return cost;

        // // OR

        // return filteredCars.reduce((acc, car) => acc + car.cost, 0);
    // }

    //OR

        data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())).reduce((acc, car) => acc + car.cost, 0)
    );

    return (<div className = "car-value">
                Total Cost : ${totalCost}
            </div>);
}

export default CarValue;