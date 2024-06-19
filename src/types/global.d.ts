declare namespace ZOHO {
  export const CREATOR: unknown;
}

declare interface NormalResponse<T> {
  success: boolean;
  type: string;
  data: T;
  message?: string;
}
