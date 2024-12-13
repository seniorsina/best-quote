import express from "express";
import { AuthorValidator } from "../middleware/author-validator.middleware";
import { authorService } from "../services/author.services";
const router = express.Router();

router.post(
  "/create",
  AuthorValidator.validateCreate,
  authorService.createAuthor
);

router.get('/',authorService.authorList);

export { router as authorRouter };
