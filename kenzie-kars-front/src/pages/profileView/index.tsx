import { useEffect, useState } from "react";
import { HeaderLoggedIn } from "../../components/headerLoggedIn";
import { StyledButton } from "../../styles/buttons";
import { StyledText } from "../../styles/tipography";
import {
  BlueBox,
  Circle,
  Container,
  Flex,
  PerfilBox,
  StyledDiv,
} from "./style";
import { ModalAddCar } from "../../components/modalAddCar";
import { CarListProfileView } from "../../components/carListProfileView";
import { useUser } from "../../hooks/useUser";
import { api } from "../../services/api";
import { iVehicle } from "./types";
import { toast } from "react-toastify";
import { fipeApi } from "../../services/fipeApi";

export const ProfileView = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => setIsOpenModal(!isOpenModal);

  const [vehicles, setVehicles] = useState<Array<iVehicle> | null>(null);
  const [brands, setBrands] = useState([] as Array<string>);

  const { user, logoutUser } = useUser();

  const initials = user?.name?.substring(0, 2)?.toUpperCase();

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem("@KenzieKars:token");
        if (!token) {
          logoutUser();
        }
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        const { data: userVehicles } = await api.get("users/user_vehicles");
        setVehicles(userVehicles.data);

        const { data: brandsApiFipe } = await fipeApi.get("/cars");
        const brands = Object.keys(brandsApiFipe);
        setBrands(brands);
      } catch (error) {
        console.error(error);
        toast.error("Ops, algo deu errado");
      }
    })();
  }, [logoutUser]);

  return (
    <>
      {isOpenModal && (
        <ModalAddCar
          brands={brands}
          setVehicles={setVehicles}
          toggleModal={toggleModal}
        />
      )}
      <Container>
        <HeaderLoggedIn user={user} />
        <BlueBox />
        <PerfilBox>
          <div>
            <Circle>{initials}</Circle>
            <Flex>
              <StyledText tag="h1" textColor="grey1" textStyle="heading-6-600">
                {user?.name}
              </StyledText>
              <StyledDiv>Anunciante</StyledDiv>
            </Flex>
            <StyledText tag="p" textStyle="body-1-400" textColor="grey2">
              {user?.description}
            </StyledText>
            <StyledButton
              onClick={toggleModal}
              buttonStyle="bg"
              buttonColor="outlineBrand1"
            >
              Criar anuncio
            </StyledButton>
          </div>
        </PerfilBox>
        <CarListProfileView vehicles={vehicles} />
      </Container>
    </>
  );
};
