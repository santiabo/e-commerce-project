import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: block;
  /* background: red; */
  background: #191b2b;
  overflow: hidden;
  padding-bottom: 1rem;
  text-align: center;
  -webkit-user-select: none;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  
  svg {
  transition: 0.45s cubic-bezier(0.165, 0.84, 0.44, 1);
  width: 24px;
  height: 24px;
  margin: 1.5rem;
  fill: #ffffff;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    transform: translateY(-4px);
    opacity: 1;
    width: 26px;
    height: 26px;
    }
  }
`;
