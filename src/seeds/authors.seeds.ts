import { AuthorEntity } from "../domain/entities/author.entity";
import { authorModel } from "../infra/database/author.model";

export const seedAuthors = async () => {
  const authors = [
    new AuthorEntity({
      name: "Mark Twain",
      dateOfBirth: "1835-11-30",
      bio: "American writer known for his works 'The Adventures of Tom Sawyer' and 'Adventures of Huckleberry Finn'.",
      country: "United States",
    }),
    new AuthorEntity({
      name: "Jane Austen",
      dateOfBirth: "1775-12-16",
      bio: "English novelist known for works like 'Pride and Prejudice' and 'Sense and Sensibility'.",
      country: "United Kingdom",
    }),
    new AuthorEntity({
      name: "Charles Dickens",
      dateOfBirth: "1812-02-07",
      bio: "English writer and social critic, famous for 'A Tale of Two Cities' and 'Great Expectations'.",
      country: "United Kingdom",
    }),
    new AuthorEntity({
      name: "Leo Tolstoy",
      dateOfBirth: "1828-09-09",
      bio: "Russian author best known for 'War and Peace' and 'Anna Karenina'.",
      country: "Russia",
    }),
    new AuthorEntity({
      name: "Virginia Woolf",
      dateOfBirth: "1882-01-25",
      bio: "English writer and modernist, known for 'Mrs. Dalloway' and 'To the Lighthouse'.",
      country: "United Kingdom",
    }),
    new AuthorEntity({
      name: "Gabriel García Márquez",
      dateOfBirth: "1927-03-06",
      bio: "Colombian novelist and Nobel laureate, famous for 'One Hundred Years of Solitude'.",
      country: "Colombia",
    }),
    new AuthorEntity({
      name: "Franz Kafka",
      dateOfBirth: "1883-07-03",
      bio: "German-speaking Bohemian writer known for 'The Metamorphosis' and 'The Trial'.",
      country: "Austria-Hungary (now Czech Republic)",
    }),
    new AuthorEntity({
      name: "J.K. Rowling",
      dateOfBirth: "1965-07-31",
      bio: "British author best known for the 'Harry Potter' series.",
      country: "United Kingdom",
    }),
    new AuthorEntity({
      name: "Homer",
      dateOfBirth: "1965-07-31",
      bio: "Ancient Greek poet, best known for the epic poems 'The Iliad' and 'The Odyssey'.",
      country: "Ancient Greece",
    }),
    new AuthorEntity({
      name: "Haruki Murakami",
      dateOfBirth: "1949-01-12",
      bio: "Japanese novelist and translator, known for 'Norwegian Wood' and 'Kafka on the Shore'.",
      country: "Japan",
    }),
  ];

  for (const author of authors) {
    const exists = await authorModel.findOne({ name: author.name });
    if (!exists) {
      await authorModel.create(author);
      console.log(`Author "${author.name}" added.`);
    } else {
      console.log(`Author "${author.name}" already exists.`);
    }
  }
};
