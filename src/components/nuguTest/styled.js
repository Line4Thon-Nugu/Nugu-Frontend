import styled from "styled-components";

export const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const FirstTextWrapper = styled.div`
  display: flex;
  width: 241px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => theme.fonts.pretendardB3};
`;
export const FirstTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const TextTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.lotteriaChabH2};
  color: ${({ theme }) => theme.colors.gray500};
`;
export const SubTextWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SubTextTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.pretendardB1};
  color: ${({ theme }) => theme.colors.gray400};
`;

//Home
export const HomeSubTextTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.pretendardB3};
  color: ${({ theme }) => theme.colors.gray400};
`;
//True

export const UserRankWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  margin-top: 2rem;
`;
export const UserTextWrapper = styled.div`
  display: flex;
  width: 218px;
  flex-direction: column;
  align-items: center;
  gap: -10px;
  ${({ theme }) => theme.fonts.lotteriaChabH2};
  color: ${({ theme }) => theme.colors.blue300};
`;
export const TestRank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
