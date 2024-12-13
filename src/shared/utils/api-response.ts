import { json, Response } from "express";
export class ApiResponse {
  status: string;
  message: string;
  statusCode: number;
  data: any | null;

  constructor(
    status: string,
    message: string,
    statusCode: number,
    data: any[]
  ) {
    this.status = status;
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }

  static success(res: Response, message: string, data: any = null) {
    const response = new ApiResponse("success", message, 200, data);
    return res.status(200).json(response);
  }

  static fail(res: Response, message: string, data: any = null) {
    const response = new ApiResponse("fail", message, 400, data);
    return res.status(400).json(response);
  }

  static error(res: Response, message: string, data: any = null) {
    const response = new ApiResponse("error", message, 500, data);
    return res.status(500).json(response);
  }

  static response(
    res: Response,
    status: string,
    message: string,
    statusCode: number,
    data: any | null
  ) {
    const response = new ApiResponse(status, message, statusCode, data);
    return res.status(statusCode).json(response);
  }
}
