import { Text, Spacer, Flex, Link } from "vcc-ui";
import { Car } from "../types/car.interface";
import styles from "../../public/css/components/card-wrapper.module.css";

interface CardCar {
  car: Car;
}
export default function CarCard({ car }: CardCar) {
  return (
    <div className={styles.carCard}>
      <Text variant="bates" subStyle="emphasis">
        {car?.bodyType}
      </Text>
      <Flex
        extend={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Text subStyle="emphasis">{car?.modelName}</Text>
        <Text variant="bates" subStyle="inline-link">
          {car?.modelType}
        </Text>
      </Flex>
      <Spacer />
      <img src={car?.imageUrl} alt={car.modelName} width="250" height="200" />
      <Flex
        extend={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Link href={""} arrow="right">
          LEARN
        </Link>
        <Link href={""} arrow="right">
          SHOP
        </Link>
      </Flex>
    </div>
  );
}
