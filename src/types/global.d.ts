declare namespace ZOHO {
  export const CREATOR: any;
}

declare interface NormalResponse<T> {
  success: boolean;
  type: string;
  data: T;
  message?: string;
}
