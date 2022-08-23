from sqlalchemy import create_engine, MetaData, Table, select
engine = create_engine("sqlite:///./books.db", echo=True, future=True)
conn = engine.connect()
metadata = MetaData()
author_table = Table("author", metadata, autoload_with=engine)
stmt = select(author_table)
result = conn.execute(stmt)
print(result.all())