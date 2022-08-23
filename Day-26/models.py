
from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Author(Base):
    
    __tablename__ = "author"

    author_id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)

    def __repr__(self):
        return (
            f"Author(author_id=({self.author_id!r}), "
            f"first_name={self.first_name!r}, last_name={self.last_name!r}"
        )

