export const MAX_ORGANIZATIONS_PER_USER = 3;

export const ORGANIZATION_NAME_MIN_LENGTH = 3;
export const ORGANIZATION_NAME_MAX_LENGTH = 64;
export const ORGANIZATION_DESCRIPTION_MAX_LENGTH = 256;

export const FUNCTION_NAME_MIN_LENGTH = 3;
export const FUNCTION_NAME_MAX_LENGTH = 64;

export const FUNCTION_MEMORY = 128; // 128MB

export const MAX_FUNCTION_SIZE_MB = 10 * 1024 * 1024; // 10MB
export const MAX_ASSET_SIZE_MB = 10 * 1024 * 1024; // 10MB
export const MAX_ASSETS_PER_FUNCTION = 100;

export const ENVIRONMENT_VARIABLE_KEY_MAX_LENGTH = 64;
export const ENVIRONMENT_VARIABLE_VALUE_MAX_SIZE = 5 * 1024; // 5KB
export const ENVIRONMENT_VARIABLES_PER_FUNCTION = 100;

export const CUSTOM_DOMAINS_PER_FUNCTION = 10;

export const PRESIGNED_URL_EXPIRES_SECONDS = 60 * 60; // 1 hour

export const REGIONS = {
  'ashburn-us-east': 'Ashburn (us-east)',
  'hillsboro-us-west': 'Hillsboro (us-west)',
  'san-francisco-us-west': 'San Francisco (us-west)',
  'montreal-ca-east': 'Montreal (ca-east)',
  'london-eu-west': 'Londo (eu-west)',
  'paris-eu-west': 'Paris (eu-west)',
  'nuremberg-eu-central': 'Nuremberg (eu-central)',
  'helsinki-eu-north': 'Helsinki (eu-north)',
  'warsaw-eu-east': 'Warsaw (eu-east)',
  'bangalore-ap-south': 'Bangalore (ap-south)',
  'singapore-ap-south': 'Singapore (ap-south)',
  'sydney-ap-south': 'Sydney (ap-south)',
  'tokyo-ap-east': 'Tokyo (ap-east)',
  'johannesburg-af-south': 'Johannesburg (af-south)',
};

export type Regions = keyof typeof REGIONS;

export const DEFAULT_FUNCTION = `export function handler(request) {
  return new Response("Hello World!")
}`;
