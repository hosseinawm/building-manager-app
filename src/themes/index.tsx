import { ReactNode, useMemo } from 'react';
// types
import { ColorProps } from 'types';
import { CustomShadowProps } from 'types/default-theme';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, Theme, ThemeOptions, ThemeProvider, TypographyVariantsOptions } from '@mui/material/styles';

import useConfig from '../hooks/useConfig';
// assets
import colors from '../scss/_theme1.module.scss';
import componentStyleOverrides from './compStyleOverride';
// project import
import { NextAppDirEmotionCacheProvider } from './emotionCache';
import Palette from './palette';
import customShadows from './shadows';
import Typography from './typography';

interface Props {
  children: ReactNode;
}

export default function ThemeCustomization({ children }: Props) {
  const config = useConfig();
  const { borderRadius, fontFamily, navType, outlinedFilled, presetColor, rtlLayout } = useConfig();

  const theme: Theme = useMemo<Theme>(() => Palette(navType, presetColor), [navType, presetColor]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography: TypographyVariantsOptions = useMemo<TypographyVariantsOptions>(
    () => Typography(theme, borderRadius, fontFamily),
    [theme, borderRadius, fontFamily]
  );
  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(() => customShadows(navType, theme), [navType, theme]);

  let color: ColorProps = colors;

  const themeOption = {
    colors: color,
    heading: '',
    paper: '',
    backgroundDefault: '',
    background: '',
    darkTextPrimary: '',
    darkTextSecondary: '',
    textDark: '',
    menuSelected: '',
    menuSelectedBack: '',
    divider: '',
    customization: config
  };

  switch (config.navType) {
    case 'dark':
      themeOption.paper = color.darkLevel2;
      themeOption.backgroundDefault = color.darkPaper;
      themeOption.background = color.darkBackground;
      themeOption.darkTextPrimary = color.darkTextPrimary;
      themeOption.darkTextSecondary = color.darkTextSecondary;
      themeOption.textDark = color.darkTextPrimary;
      themeOption.menuSelected = color.darkSecondaryMain;
      themeOption.menuSelectedBack = color.darkSecondaryMain + 15;
      themeOption.divider = color.darkTextPrimary;
      themeOption.heading = color.darkTextTitle;
      break;
    case 'light':
    default:
      themeOption.paper = color.paper;
      themeOption.backgroundDefault = color.paper;
      themeOption.background = color.primaryLight;
      themeOption.darkTextPrimary = color.grey700;
      themeOption.darkTextSecondary = color.grey500;
      themeOption.textDark = color.grey900;
      themeOption.menuSelected = color.secondaryDark;
      themeOption.menuSelectedBack = color.secondaryLight;
      themeOption.divider = color.grey200;
      themeOption.heading = color.grey900;
      break;
  }

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      direction: rtlLayout ? 'rtl' : 'ltr',
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: '48px',
          padding: '16px',
          '@media (min-width: 600px)': {
            minHeight: '48px'
          }
        }
      },
      typography: themeTypography,
      customShadows: themeCustomShadows
    }),
    [rtlLayout, theme, themeCustomShadows, themeTypography]
  );

  const themes: Theme = createTheme(themeOptions);
  themes.components = useMemo(() => componentStyleOverrides(themes, borderRadius, outlinedFilled), [themes, borderRadius, outlinedFilled]);

  return (
    <StyledEngineProvider injectFirst>
      <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <ThemeProvider theme={themes}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </StyledEngineProvider>
  );
}
