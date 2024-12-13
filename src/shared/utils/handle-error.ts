import { ApiResponse } from "./api-response";
import { AppError } from "./app-error";
import {Response} from "express"

export const handleError  = (res: Response, err: unknown):void => {
  if (err instanceof AppError) {
    ApiResponse.fail(res, err.message, err.statusCode);
  } else {
    ApiResponse.fail(res, "An unexpected error occurred.", 500);
  }
};