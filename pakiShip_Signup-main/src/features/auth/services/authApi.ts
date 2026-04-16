import { runtimeConfig } from '../../../config/runtime';
import type { AuthResponse, LoginRequest, SignupRequest } from '../types';

type ForgotPasswordRequest = {
  email: string;
};

const normalizePhone = (value: string) => value.replace(/\D/g, '');

async function request<T>(path: string, init: RequestInit): Promise<T> {
  const response = await fetch(`${runtimeConfig.apiBaseUrl}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers ?? {}),
    },
    ...init,
  });

  const payload = (await response.json().catch(() => null)) as
    | { message?: string }
    | null;

  if (!response.ok) {
    throw new Error(payload?.message ?? 'Request failed.');
  }

  return payload as T;
}

export const authApi = {
  signup(input: SignupRequest): Promise<AuthResponse> {
    return request<AuthResponse>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        ...input,
        email: input.email.trim().toLowerCase(),
        mobile: normalizePhone(input.mobile),
      }),
    });
  },

  login(input: LoginRequest): Promise<AuthResponse> {
    return request<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        ...input,
        emailOrMobile: input.emailOrMobile.includes('@')
          ? input.emailOrMobile.trim().toLowerCase()
          : normalizePhone(input.emailOrMobile),
      }),
    });
  },

  forgotPassword(input: ForgotPasswordRequest): Promise<{ message: string }> {
    return request<{ message: string }>('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({
        email: input.email.trim().toLowerCase(),
      }),
    });
  },
};
