import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import EyeIcon from 'mdi-react/EyeIcon';
import styled from 'styled-components';
import { colorAdditional, colorFieldsBorder } from '@/utils/palette';
import {
  AccountCard,
  AccountContent,
  AccountHaveAccount,
  AccountHead,
  AccountLogo,
  AccountLogoAccent,
  AccountTitle,
  AccountWrap,
  ForgotFormGroup,
  AccountButtons,
} from '@/shared/components/account/AccountElements';
import { marginLeft } from '@/utils/directions';
import {
  FormContainer,
  FormGroup,
  FormGroupField,
  FormFieldButton,
  FormGroupLabel,
  FormGroupIcon,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';

const SignupPage = () => (
  <AccountWrap>
    <AccountContent>
      <AccountCard>
        <AccountHead>
          <AccountTitle>Welcome to
            <AccountLogo> Easy
              <AccountLogoAccent>DEV</AccountLogoAccent>
            </AccountLogo>
          </AccountTitle>
          <h4 className="subhead">Create an account</h4>
        </AccountHead>
        <FormContainer>
          <FormGroup>
            <FormGroupLabel>Username</FormGroupLabel>
            <FormGroupField>
              <FormGroupIcon>
                <AccountOutlineIcon />
              </FormGroupIcon>
              <input
                name="username"
                type="text"
                placeholder="Name"
                className="input-without-border-radius"
              />
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupLabel>E-mail</FormGroupLabel>
            <FormGroupField>
              <FormGroupIcon>
                <AlternateEmailIcon />
              </FormGroupIcon>
              <input
                name="email"
                type="email"
                placeholder="example@gmail.com"
                className="input-without-border-radius"
              />
            </FormGroupField>
          </FormGroup>
          <ForgotFormGroup>
            <FormGroupLabel>Password</FormGroupLabel>
            <FormGroupField>
              <PasswordIcon>
                <KeyVariantIcon />
              </PasswordIcon>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input-without-border-radius"
              />
              <FormFieldButton
                type="button"
              >
                <EyeIcon />
              </FormFieldButton>
            </FormGroupField>
          </ForgotFormGroup>
          <RegisterButtons>
            <Button type="submit" variant="primary">
              Sign Up
            </Button>
          </RegisterButtons>
        </FormContainer>  
        <AccountHaveAccount>
          <p>Already have an account? <NavLink to="/">Login</NavLink></p>
        </AccountHaveAccount>
      </AccountCard>
    </AccountContent>
  </AccountWrap>
);

export default withRouter(SignupPage);

const RegisterButtons = styled(AccountButtons)`
  ${marginLeft}: 0!important;
  margin-bottom: 20px;
  
  button {
    margin-bottom: 0;
    width:100%;
  }
`;
export const PasswordIcon = styled.div`
  padding: 6px;
  height: 32px;
  background: ${colorFieldsBorder};
  border: 1px solid ${colorFieldsBorder};

  svg {
    fill: ${colorAdditional};
    width: 18px;
    height: 18px;
    transition: all 0.3s;
  }
`;
