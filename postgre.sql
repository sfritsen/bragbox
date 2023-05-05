CREATE TABLE users(
   user_id SERIAL PRIMARY KEY,
   password VARCHAR(255),
   email VARCHAR(255),
   created_at TIMESTAMP NOT NULL DEFAULT NOW(),
   updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE brags(
   brag_id SERIAL PRIMARY KEY,
   user_id int NOT NULL,
   title VARCHAR(255),
   brag TEXT,
   tags VARCHAR(255)[],
   created_at TIMESTAMP NOT NULL DEFAULT NOW(),
   updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);