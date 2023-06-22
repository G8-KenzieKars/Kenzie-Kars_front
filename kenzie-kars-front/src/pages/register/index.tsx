import { HeaderNotLoggedIn } from "../../components/headerNotLoggedIn";
import { FooterComponent } from "../../components/footer";
import { RegisterFormMui } from "../../components/forms/registerFormMui";
import { RegisterSection, RegisterFormDiv } from "./style";

export const Register = () => {
  return (
    <>
      <HeaderNotLoggedIn />
      <main>
        <RegisterSection>
          <RegisterFormDiv id="form_register">
            <RegisterFormMui />
          </RegisterFormDiv>
        </RegisterSection>
      </main>
      <FooterComponent />
    </>
  );
};
