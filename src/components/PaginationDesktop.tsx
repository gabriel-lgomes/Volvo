import { useSwiper } from "swiper/react";
import { Flex, IconButton } from "vcc-ui";

export default function PaginationDesktop() {
  const swiper = useSwiper();

  return (
    <div className="paginationDesktop">
      <Flex
        extend={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        <div className="button-prev">
          <IconButton
            aria-label="esquerda"
            onClick={() => swiper.slidePrev()}
            variant="outline"
            iconName="navigation-chevronback"
          />
        </div>
        <div className="button-next">
          <IconButton
            aria-label="esquerda"
            onClick={() => swiper.slideNext()}
            variant="outline"
            iconName="navigation-chevronforward"
          />
        </div>
      </Flex>
    </div>
  );
}
