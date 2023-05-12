import Image from "next/image"
import car from '../../assets/car.jpg'

function Card1() {
    return (
        <div className="flex flex-col mt-12 border-2 rounded">
            <div className="flex justify-center mx-2">
                <Image src={car} className="w-[260px] h-[280px]" alt="NEON CAR"/>
            </div>
            <div className="my-2">
                <p className="mx-7">Neon Car</p>
                <p className="mx-7 font-bold mb-8">  Rs 155000</p>
                <p className="mx-7">Faisalabad. 31 minutes ago</p>
            </div>
        </div>
    )
}

export default Card1;
