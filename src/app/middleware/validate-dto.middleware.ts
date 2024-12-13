import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../../shared/utils/api-response";

class DtoValidator {
  protected static validateDto = async (
    dto: object,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const errors = await validate(dto);
      if (errors.length > 0) {
        const formattedErrors = errors.map((error) => ({
          field: error.property,
          errors: Object.values(error.constraints || {}),
        }));
        ApiResponse.fail(res, "Validation failed", formattedErrors);
        return;
      }
      next();
    } catch (err) {
      ApiResponse.error(res, "Internal server error during validation", err);
    }
  };
}

export default DtoValidator;
