import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "PakiShipMobile",
  slug: "PakiShipMobile",
  version: "1.0.0",
  scheme: "pakiship",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      backgroundColor: "#E6F4FE",
      foregroundImage: "./assets/android-icon-foreground.png",
      backgroundImage: "./assets/android-icon-background.png",
      monochromeImage: "./assets/android-icon-monochrome.png"
    },
    package: "com.pakiship.mobile"
  },
  web: {
    favicon: "./assets/favicon.png"
  },
  plugins: [],
  experiments: {
    typedRoutes: false,
  },
  extra: {
    router: {
      origin: false,
    },
  },
});
