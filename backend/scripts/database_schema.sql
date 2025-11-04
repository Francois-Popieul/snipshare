CREATE TABLE site_user (
    id_user SERIAL,
    username VARCHAR(150) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    mail_address VARCHAR(320) NOT NULL,
    password VARCHAR(100) NOT NULL,
    bio VARCHAR(2000),
    PRIMARY KEY (id_user)
);

CREATE TABLE code_language (
    id_language SERIAL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_language)
);

CREATE TABLE token (
    id_token SERIAL,
    token_value VARCHAR(200) NOT NULL,
    creation_date DATE NOT NULL,
    expiry_date DATE NOT NULL,
    id_user INTEGER NOT NULL,
    PRIMARY KEY (id_token),
    FOREIGN KEY (id_user) REFERENCES site_user (id_user)
);

CREATE TABLE tag (
    id_tag SERIAL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id_tag)
);

CREATE TABLE snippet (
    id_snippet SERIAL,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(500) NOT NULL,
    code VARCHAR(5000) NOT NULL,
    creation_date DATE NOT NULL,
    visibility VARCHAR(50) NOT NULL,
    user_id INTEGER NOT NULL,
    PRIMARY KEY (id_snippet),
    FOREIGN KEY (user_id) REFERENCES site_user (id_user)
);

CREATE TABLE utilize (
    snippet_id INTEGER,
    language_id INTEGER,
    PRIMARY KEY (snippet_id, language_id),
    FOREIGN KEY (snippet_id) REFERENCES snippet (id_snippet),
    FOREIGN KEY (language_id) REFERENCES code_language (id_language)
);

CREATE TABLE categorize (
    snippet_id INTEGER,
    tag_id INTEGER,
    PRIMARY KEY (snippet_id, tag_id),
    FOREIGN KEY (snippet_id) REFERENCES snippet (id_snippet),
    FOREIGN KEY (tag_id) REFERENCES tag (id_tag)
);

CREATE TABLE rate (
    snippet_id INTEGER,
    user_id INTEGER,
    PRIMARY KEY (snippet_id, user_id),
    FOREIGN KEY (snippet_id) REFERENCES snippet (id_snippet),
    FOREIGN KEY (user_id) REFERENCES site_user (id_user)
);

CREATE TABLE criticize (
    snippet_id INTEGER,
    user_id INTEGER,
    message VARCHAR(1000) NOT NULL,
    creation_date DATE NOT NULL,
    PRIMARY KEY (snippet_id, user_id),
    FOREIGN KEY (snippet_id) REFERENCES snippet (id_snippet),
    FOREIGN KEY (user_id) REFERENCES site_user (id_user)
);