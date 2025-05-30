import { Action } from "@reduxjs/toolkit";

export interface RTKQueryAction extends Action {
  meta?: {
    requestId?: string;
  };
}

export interface MovieSearchParams {
  page: number;
  search?: string;
  include_adult?: boolean;
  include_video?: boolean;
  language?: string;
  sort_by?: string;
  'release_date.gte'?: string;
}
