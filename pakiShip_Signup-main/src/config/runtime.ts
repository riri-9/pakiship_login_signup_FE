import Constants from 'expo-constants';

type ExpoExtra = {
  apiBaseUrl?: string;
  supabaseUrl?: string;
  supabasePublishableKey?: string;
};

const extra = (Constants.expoConfig?.extra ?? {}) as ExpoExtra;

export const runtimeConfig = {
  apiBaseUrl: extra.apiBaseUrl ?? 'http://192.168.5.31:3000/api/v1',
  supabaseUrl: extra.supabaseUrl ?? '',
  supabasePublishableKey: extra.supabasePublishableKey ?? '',
};
