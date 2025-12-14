# BloodDonationn
todo
-install sql xe
-create a .env file like .env.exaple and enter the values except jwt secret

-- 1. Create the blood_users table
CREATE TABLE blood_users (
    id NUMBER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    username VARCHAR2(100) NOT NULL,
    email VARCHAR2(100) NOT NULL UNIQUE,
    password VARCHAR2(255) NOT NULL,
    user_type VARCHAR2(20) NOT NULL CHECK (user_type IN ('DONOR', 'RECEIVER', 'ADMIN')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Create indexes for better performance
CREATE INDEX idx_blood_users_email ON blood_users(email);
CREATE INDEX idx_blood_users_user_type ON blood_users(user_type);

-- 3. Create trigger to auto-update the updated_at timestamp
CREATE OR REPLACE TRIGGER blood_users_update_trigger
BEFORE UPDATE ON blood_users
FOR EACH ROW
BEGIN
    :NEW.updated_at := CURRENT_TIMESTAMP;
END;
/


