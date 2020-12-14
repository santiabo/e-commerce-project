import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: block;
  list-style-type: disc;
  background: #323b40;
  overflow: hidden;
  padding-bottom: 1rem;
  text-align: center;
  bottom: 0;
  left: 0;
  right: 0;
  position: relative;
  -webkit-user-select: none;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;

svg {
  width: 35px;
  height: 35px;
  margin: 1.5rem;
  fill: #ffffff;
  cursor: pointer;
  /* box-shadow: inset 0 -3px 0 0 rgba(0,0,0,0), 0 6px 8px rgba(0,0,0,0), 0 24px 24px rgba(0,0,0,0), 0 36px 36px rgba(0,0,0,0), 0 64px 64px rgba(0,0,0,0), 0 64px 128px rgba(0,0,0,0), 0 120px 0 rgba(0,0,0,0), 0 86px 8px 6px rgba(0,0,0,0),;    */

  &:hover {
    transform: translateY(-4px);
    /* color-interpolation-filters: blur(1px);
    box-shadow: inset 0 -3px 0 0 rgba(0,0,0,0.1), 0 6px 8px rgba(0,0,0,0.05), 0 24px 24px rgba(0,0,0,0.05), 0 36px 36px rgba(0,0,0,0.05), 0 64px 64px rgba(0,0,0,0.15), 0 64px 128px rgba(0,0,0,0.15), 0 86px 8px 6px fadeout(#57a4bb, 75), 0 83px 4px 0px fadeout(#57a4bb, 5); */
    }
  }
`;