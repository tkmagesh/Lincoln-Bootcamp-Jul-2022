from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session
from models import Author

engine = create_engine("sqlite:///./books.db", echo=True, future=True)
session = Session(engine)
stmt = select(Author)
for author in session.scalars(stmt):
    print(author)
