import styled from "styled-components";

export const ContainerAnnoucement = styled.div`
  background: linear-gradient(
    to bottom,
    var(--color-brand1) 80px,
    var(--color-brand1) 520px,
    var(--color-grey7) 530px,
    var(--color-grey7) 100%
  );
`;

export const ContentAnnoucement = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 78px;
  gap: 20px;
`;

export const ContentImgs = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  margin-top: 50px;
`;

export const ResponsiveImgsAndDescription = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ResponsivePhotosAndProfile = styled.div`
  max-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const DivImagemCar = styled.div`
  display: flex;
  width: 100%;
  height: 355px;
  background: var(--color-grey10);
  border-radius: var(--radius-2);
  align-items: center;
  justify-content: center;

  img {
    width: 440px;
    height: 224px;
    object-fit: contain;
  }
`;

export const InformationCar = styled.div`
  width: 100%;
  height: 250px;
  background: var(--color-grey10);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 38px;
  padding: 20px 36px;
  border-radius: var(--radius-2);
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;

  button {
    background-color: var(--color-brand1);
    border-radius: var(--radius-2);
    border: 1px solid var(--radius-2);
    width: 80px;
    height: 32px;
    color: var(--color-grey10);

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const InfosPriceYearKm = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    background-color: var(--color-brand4);
    width: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-2);
  }
  div {
    display: flex;
    gap: 20px;
  }
`;

export const ContentPhotosCar = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  padding: 30px 26px;
  -webkit-box-pack: center;
  justify-content: center;
  width: 440px;
  height: 380px;
  max-width: 100%;
  gap: 20px;
  border-radius: var(--radius-2);
  background: var(--color-grey10);
`;

export const PhotosCar = styled.div`
  width: auto;
  max-width: 383px;
  height: 222px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  div {
    background-color: var(--color-grey7);
    width: 100px;
    height: 100px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border-radius: var(--radius-2);
    img {
      width: 100px;
      height: 60px;
    }
  }
`;

export const ProfileUser = styled.div`
  background-color: var(--color-grey10);
  width: 392px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-2);
  button {
    width: 206px;
    height: 48px;
    background: #0b0d0d;
    border: 1.5px solid #0b0d0d;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
    color: #ffffff;
    opacity: 0.9;
  }
`;

export const ContentProfileUser = styled.div`
  width: 352px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
`;

export const PhotoProfile = styled.div`
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background-color: var(--color-brand2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 36px;
  line-height: 53px;
  color: var(--color-grey10);
`;

export const ContentDescriptionComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 696px;
  margin-left: 122px;
`;

export const DescriptionCar = styled.div`
  background-color: var(--color-grey10);
  max-width: 100%;
  height: 213px;
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    span {
      line-height: 28px;
    }
  }
`;

export const CommentsAboutCar = styled.div`
  background-color: var(--color-grey10);
  max-width: 94%;
  height: auto;
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 36px 44px;
  gap: 40px;
`;
export const AllignCommentAndProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    line-height: 24px;
  }
`;

export const ProfileComment = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ImgProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #e34d8c;
  border-radius: 150px;
  font-weight: 500;
  font-size: 8px;
  line-height: 0px;
  color: #ffffff;
`;
export const InputAndButtonForComment = styled.div`
  background-color: var(--color-grey10);
  max-width: 94%;
  height: 315px;
  border-radius: var(--radius-2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 36px 44px;
  margin-bottom: 50px;

  textarea {
    width: 100%;
    height: 128px;
    border-radius: var(--radius-2);
    padding: 15px;
    resize: none;
  }

  button {
    width: 108px;
    height: 38px;
    position: absolute;
    margin-left: 78%;
    bottom: 40px;
    background: var(--color-brand1);
    border: 1.5px solid var(--color-brand1);
    border-radius: var(--radius-2);
    font-weight: 600;
    font-size: 14px;
    line-height: 0px;
    color: #ffffff;
  }
`;

export const AllignProfileAndInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 42%;
  max-width: 570px;
  position: absolute;
`;
