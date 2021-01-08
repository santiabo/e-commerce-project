import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: block;
  list-style-type: disc;
  background: #191b2b;
  overflow: hidden;
  padding-bottom: 1rem;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  -webkit-user-select: none;
  align-self: flex-end;
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
