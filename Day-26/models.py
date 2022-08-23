
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import declarative_base, relationship, backref

Base = declarative_base()

class Author(Base):
    
    __tablename__ = "author"

    author_id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)

    #1-to-many relationship
    books = relationship("Book", backref=backref("author"), cascade="all, delete-orphan")

    def __repr__(self):
        return (
            f"Author(author_id=({self.author_id!r}), "
            f"first_name={self.first_name!r}, last_name={self.last_name!r}"
        )


class Book(Base):
    __tablename__ = "book"

    book_id = Column(Integer, primary_key=True)
    title = Column(String)
    author_id = Column(Integer, ForeignKey("author.author_id"), nullable=False)

    def __repr__(self):
        return (
            f"Book(book_id={self.book_id!r}, "
            f"title={self.title!r}, author_id={self.author_id!r})"
        )
