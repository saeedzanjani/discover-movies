import { Middleware } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "../store/slices";
  import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
  import { subMonths, format } from "date-fns";
  import { Dispatch } from "redux";
import { MovieSearchParams, RTKQueryAction } from "../types/api";

export const isRTKQueryAction = (action: unknown): action is RTKQueryAction => {
  return typeof action === "object" && action !== null && "type" in action;
};

export const apiResponseMiddleware: Middleware =
  (api) => (next) => (action) => {
    if (!isRTKQueryAction(action)) {
      return next(action);
    }

    const requestId = action.meta?.requestId;

    if (action.type.endsWith("/pending") && requestId) {
      api.dispatch(startLoading(requestId));
    }

    if (
      (action.type.endsWith("/fulfilled") ||
        action.type.endsWith("/rejected")) &&
      requestId
    ) {
      api.dispatch(stopLoading(requestId));
    }

    return next(action);
  };

  export interface ApiError {
    message: string;
    status?: number | string;
  }

  export const createMovieQueryParams = (params: MovieSearchParams) => {
    const lastMonth = format(subMonths(new Date(), 1), "yyyy-MM-dd");
    const { page, ...restParams } = params;
    return {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: page.toString(),
      sort_by: "popularity.desc",
      "release_date.gte": lastMonth,
      ...restParams,
    };
  };

  export const handleApiError = (error: unknown): ApiError => {
    const fetchError = error as FetchBaseQueryError;
    return {
      message:
        (fetchError.data as { message?: string })?.message ||
        "An error occurred. Please try again later.",
      status: fetchError.status,
    };
  };

  interface QueryEndpointParams {
    dispatch: Dispatch;
    queryFulfilled: Promise<unknown>;
  }

  export const createQueryEndpoint = (endpointName: string) => ({
    async onQueryStarted(
      _: unknown,
      { dispatch, queryFulfilled }: QueryEndpointParams,
    ) {
      dispatch({ type: "loading/startLoading", payload: endpointName });
      try {
        await queryFulfilled;
      } catch (error) {
        const apiError = handleApiError(error);
        dispatch({
          type: "snackbar/showSnackbar",
          payload: {
            message: apiError.message,
            severity: "error",
            autoHideDuration: 6000,
          },
        });
      } finally {
        dispatch({ type: "loading/stopLoading", payload: endpointName });
      }
    },
  });
