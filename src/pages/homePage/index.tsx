import { useState } from "react";
import { CarList } from "../../components/carList";
import { FilterMenu } from "../../components/filterMenu";
import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { StyledText } from "../../styles/tipography";
import {
  ContainerHomePage,
  HomePageContainer,
  MaskImageDiv,
  SectionHomePageHeader,
  SectionHomePageMain,
  SectionHomePageMainMenu,
  SectionHomePageMainProductGallery,
} from "./style";
import { AdvertisingButton } from "../../components/filterMenu/style";
import { StyledButton } from "../../styles/buttons";
import { FooterComponent } from "../../components/footer";
import { useUser } from "../../hooks/useUser";
import { HeaderLoggedIn } from "../../components/headerLoggedIn";
import { useProduct } from "../../hooks/useProduct";
import { CustomIconsPagination } from "../../components/pagination";

export const HomePage = () => {
  const [advertising, setAdvertising] = useState<boolean>(false);

  const { filteredProducts } = useProduct();

  const { user } = useUser();

  return (
    <ContainerHomePage>
      {user ? <HeaderLoggedIn /> : <HeaderNotLoggedIn />}
      <HomePageContainer>
        <SectionHomePageHeader id="advertising" display={advertising}>
          <MaskImageDiv>
            <div>
              <StyledText
                tag="h3"
                textStyle={"heading-3-500"}
                textColor="white"
              >
                {`Motors Shop`}
              </StyledText>
              <StyledText tag="p" textStyle={"heading-5-500"} textColor="white">
                {`A melhor plataforma de anúncios de carros do país`}
              </StyledText>
            </div>
          </MaskImageDiv>
        </SectionHomePageHeader>
        <SectionHomePageMain>
          <SectionHomePageMainMenu display={advertising}>
            <FilterMenu
              advertising={advertising}
              setAdvertising={setAdvertising}
            />
          </SectionHomePageMainMenu>
          <SectionHomePageMainProductGallery display={advertising}>
            <AdvertisingButton>
              {advertising && (
                <StyledButton
                  onClick={() => setAdvertising((advertising) => !advertising)}
                  buttonStyle={window.screen.width < 700 ? "sm" : "bg"}
                  buttonColor="brand1"
                >{`Filtros`}</StyledButton>
              )}
            </AdvertisingButton>
            <CarList cars={filteredProducts} />
            <AdvertisingButton>
              {advertising && (
                <StyledButton
                  onClick={() => setAdvertising((advertising) => !advertising)}
                  buttonStyle={window.screen.width < 700 ? "sm" : "bg"}
                  buttonColor="brand1"
                >
                  {`Filtros`}
                </StyledButton>
              )}
            </AdvertisingButton>
            <CustomIconsPagination />
          </SectionHomePageMainProductGallery>
        </SectionHomePageMain>
      </HomePageContainer>
      <FooterComponent />
    </ContainerHomePage>
  );
};
