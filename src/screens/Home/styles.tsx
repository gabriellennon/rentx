import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;
    background-color: ${({ theme }) => theme.colors.header};
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    justify-content: flex-end;
    padding: 32px 24px;
`;

export const TotalCars = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const HeaderContent = styled.View`
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
`;