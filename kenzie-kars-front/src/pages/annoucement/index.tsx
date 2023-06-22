import {
  AllignCommentAndProfile,
  AllignProfileAndInput,
  CommentsAboutCar,
  ContainerAnnoucement,
  ContentAnnoucement,
  ContentDescriptionComment,
  ContentImgs,
  ContentPhotosCar,
  ContentProfileUser,
  DescriptionCar,
  DivImagemCar,
  ImgProfile,
  InformationCar,
  InfosPriceYearKm,
  InputAndButtonForComment,
  PhotoProfile,
  PhotosCar,
  ProfileComment,
  ProfileUser,
  ResponsiveImgsAndDescription,
  ResponsivePhotosAndProfile,
} from "./style";
import exteriorCarro from "../../imagensMock/exterior-carro.png";
import { HeaderLoggedIn } from "../../components/headerLoggedIn";
import { FooterComponent } from "../../components/footer";
import { StyledText } from "../../styles/tipography";
import { StyledButton } from "../../styles/buttons";

export const AnnoucementPage = () => {
  return (
    <ContainerAnnoucement>
      <HeaderLoggedIn />
      <ContentAnnoucement>
        <ContentImgs>
          <ResponsiveImgsAndDescription>
            <DivImagemCar>
              <img src={exteriorCarro} alt="" />
            </DivImagemCar>
            <InformationCar>
              <StyledText
                tag="span"
                textStyle={"heading-6-600"}
                textColor="grey1"
              >
                {`Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200`}
              </StyledText>
              <InfosPriceYearKm>
                <div>
                  <StyledText
                    tag="span"
                    textStyle={"body-2-400"}
                    textColor="brand1"
                  >
                    {`2013`}
                  </StyledText>
                  <StyledText
                    tag="span"
                    textStyle={"body-2-400"}
                    textColor="brand1"
                  >
                    {`0 Km`}
                  </StyledText>
                </div>
                <StyledText tag="p" textStyle={"body-1-600"} textColor="grey1">
                  {`R$ 00.000,00`}
                </StyledText>
              </InfosPriceYearKm>
              <StyledButton tag="button" buttonColor="brand1">
                {`Comprar`}
              </StyledButton>
            </InformationCar>
            <DescriptionCar>
              <div>
                <StyledText
                  tag="p"
                  textStyle={"heading-6-600"}
                  textColor="grey1"
                >
                  {`Descrição`}
                </StyledText>
                <StyledText
                  tag="span"
                  textStyle={"body-2-400"}
                  textColor="grey2"
                >
                  {`Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.`}
                </StyledText>
              </div>
            </DescriptionCar>
          </ResponsiveImgsAndDescription>
          <ResponsivePhotosAndProfile>
            <ContentPhotosCar>
              <StyledText
                tag="h2"
                textStyle={"heading-6-600"}
                textColor="grey1"
              >
                {`Fotos`}
              </StyledText>
              <PhotosCar>
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
                <div>
                  <img src={exteriorCarro} alt="" />
                </div>
              </PhotosCar>
            </ContentPhotosCar>
            <ProfileUser>
              <ContentProfileUser>
                <PhotoProfile>
                  <h4>SL</h4>
                </PhotoProfile>
                <StyledText
                  tag="p"
                  textStyle={"heading-6-600"}
                  textColor="grey1"
                >
                  {`Samuel Leão`}
                </StyledText>

                <StyledText
                  tag="span"
                  textStyle={"body-2-400"}
                  textColor="grey2"
                >
                  {`Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's`}
                </StyledText>

                <StyledButton
                  tag="button"
                  buttonColor="grey1"
                >{`Ver todos anúncios`}</StyledButton>
              </ContentProfileUser>
            </ProfileUser>
          </ResponsivePhotosAndProfile>
        </ContentImgs>
        <ContentDescriptionComment>
          <CommentsAboutCar>
            <StyledText tag="h2" textStyle={"heading-6-600"} textColor="grey1">
              {`Comentários`}
            </StyledText>
            <AllignCommentAndProfile>
              <ProfileComment>
                <ImgProfile>
                  <h2>JL</h2>
                </ImgProfile>
                <StyledText tag="p" textStyle={"body-2-500"} textColor="grey1">
                  {`Júlia Lima`}
                </StyledText>
                <StyledText
                  tag="p"
                  textStyle={"body-2-500"}
                  textColor="grey3"
                >{`há 3 dias`}</StyledText>
              </ProfileComment>
              <StyledText tag="span" textStyle={"body-2-400"} textColor="grey2">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.`}
              </StyledText>
            </AllignCommentAndProfile>
          </CommentsAboutCar>
          <InputAndButtonForComment>
            <AllignProfileAndInput>
              <ProfileComment>
                <ImgProfile>
                  <h2>SL</h2>
                </ImgProfile>
                <StyledText tag="p" textStyle={"body-2-500"} textColor="grey1">
                  {`Samuel Leão`}
                </StyledText>
              </ProfileComment>
              <textarea placeholder="Digite um comentário..." />
              <StyledButton tag="button" buttonColor="brand1">
                {`Comentar`}
              </StyledButton>
            </AllignProfileAndInput>
          </InputAndButtonForComment>
        </ContentDescriptionComment>
      </ContentAnnoucement>
      <FooterComponent />
    </ContainerAnnoucement>
  );
};
